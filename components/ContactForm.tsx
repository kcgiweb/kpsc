
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC<{ title?: string }> = ({ title = "Request Prospectus" }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch("https://formspree.io/f/mbdzljek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Form submission failed");
        setStatus('idle');
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('idle');
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="bg-primary p-3 pb-5 rounded-[2.5rem] shadow-xl">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10">
        <h3 className="text-2xl font-black text-primary mb-8">{title}</h3>
        
        {status === 'success' ? (
          <div className="bg-green-50 text-green-700 p-8 rounded-2xl text-center border border-green-100 animate-fade-in">
            <p className="font-black text-xl mb-3">Successfully Sent!</p>
            <p className="text-sm font-medium">We have received your request and will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">Full Name</label>
              <input 
                required
                type="text" 
                className="w-full px-5 py-4 rounded-xl bg-white text-black border border-gray-200 focus:border-secondary focus:outline-none focus:ring-4 focus:ring-secondary/10 placeholder:text-black/40 transition-all font-medium"
                placeholder="Enter your name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">Phone Number</label>
              <input 
                required
                type="tel" 
                className="w-full px-5 py-4 rounded-xl bg-white text-black border border-gray-200 focus:border-secondary focus:outline-none focus:ring-4 focus:ring-secondary/10 placeholder:text-black/40 transition-all font-medium"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full px-5 py-4 rounded-xl bg-white text-black border border-gray-200 focus:border-secondary focus:outline-none focus:ring-4 focus:ring-secondary/10 placeholder:text-black/40 transition-all font-medium resize-none"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full bg-secondary hover:bg-primary text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 shadow-lg transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="uppercase tracking-[0.2em] text-sm">
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </span>
              <Send size={18} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
