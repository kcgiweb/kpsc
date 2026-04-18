import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const AdmissionsPopup: React.FC = () => {
  const { isOpen, openPopup, closePopup } = usePopup();
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    grade: '',
    email: '',
    mobile: '',
    consent: false
  });

  useEffect(() => {
    // Show popup after 10 seconds delay
    const timer = setTimeout(() => {
      openPopup();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [openPopup]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please authorize us to contact you.");
      return;
    }
    setStatus('sending');

    try {
      const response = await fetch("https://formspree.io/f/mbdzljek", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          subject: "Admissions Enquiry (Popup)"
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ studentName: '', parentName: '', grade: '', email: '', mobile: '', consent: false });
        setTimeout(() => {
          closePopup();
          setStatus('idle');
        }, 3000);
      } else {
        alert("Something went wrong. Please try again.");
        setStatus('idle');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
      setStatus('idle');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative overflow-hidden animate-zoom-in border-4 border-secondary/20">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Content Side */}
          <div className="w-full p-8 md:p-10">
            <div className="text-center mb-6">
              <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Admissions Open 2026-27</span>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Join Our Legacy</h2>
              <p className="text-gray-500 text-sm">Fill out the form below to enquire about admissions.</p>
            </div>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Thank You!</h3>
                <p className="text-gray-500 text-sm">We have received your enquiry and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Student's Name <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter Student's Name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/10 transition-all text-sm font-medium"
                    value={formData.studentName}
                    onChange={e => setFormData({...formData, studentName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Parent's Name <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter Parent's Name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/10 transition-all text-sm font-medium"
                    value={formData.parentName}
                    onChange={e => setFormData({...formData, parentName: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Grade <span className="text-red-500">*</span></label>
                    <select 
                      required
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/10 transition-all text-sm font-medium appearance-none"
                      value={formData.grade}
                      onChange={e => setFormData({...formData, grade: e.target.value})}
                    >
                      <option value="" disabled>Select Grade</option>
                      <option value="Pre-Nursery">Pre-Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={`Grade ${i + 1}`}>Grade {i + 1}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                    <input 
                      required
                      type="email" 
                      placeholder="Enter Email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/10 transition-all text-sm font-medium"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Mobile No <span className="text-red-500">*</span></label>
                  <input 
                    required
                    type="tel" 
                    placeholder="Enter Mobile No"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/10 transition-all text-sm font-medium"
                    value={formData.mobile}
                    onChange={e => setFormData({...formData, mobile: e.target.value})}
                  />
                </div>
                
                <div className="flex items-start gap-2 mt-2">
                  <input 
                    type="checkbox" 
                    id="consent"
                    required
                    className="mt-1 w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
                    checked={formData.consent}
                    onChange={e => setFormData({...formData, consent: e.target.checked})}
                  />
                  <label htmlFor="consent" className="text-[10px] text-gray-500 leading-tight">
                    I authorise Karnataka Public School and its representatives to contact me with updates and notifications via Email/SMS/WhatsApp/Call. This will override DND/NDNC.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-primary hover:bg-secondary text-white font-black py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  <span className="uppercase tracking-widest text-xs">
                    {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
                  </span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPopup;
