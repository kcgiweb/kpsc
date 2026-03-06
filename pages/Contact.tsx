
import React, { useEffect } from 'react';
import { 
  MapPin, Phone, Mail, Clock, 
  Facebook, Instagram, Twitter, Youtube, 
  MessageSquare, Users, Briefcase, ChevronRight,
  Send, Globe, ShieldCheck, Heart, Linkedin
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      title: "Admissions Office",
      desc: "For all queries regarding new enrollments and campus visits.",
      val: "9071887788, 8310663628, 080 29736819",
      icon: Users,
      action: "Call Now"
    },
    {
      title: "General Enquiries",
      desc: "For existing students, academic verification and admin support.",
      val: "Info@kpscbse.edu.in",
      icon: Mail,
      action: "Send Email"
    },
    {
      title: "Careers & HR",
      desc: "Join our team of elite educators and support staff.",
      val: "Info@kpscbse.edu.in",
      icon: Briefcase,
      action: "View Openings"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789494/IMG_9717_uwdwbd.jpg" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="School entrance" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Connect with Us</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Get in <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Touch.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            Whether you are a prospective parent or a member of our alumni, we are here to assist you in every possible way.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-24 bg-white relative -mt-20 z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactMethods.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 h-full flex flex-col items-center text-center hover:-translate-y-4 transition-all duration-500">
                  <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                    <item.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed mb-8">{item.desc}</p>
                  <p className="text-xl font-black text-primary mb-10 group-hover:text-secondary transition-colors">{item.val}</p>
                  <button className="mt-auto px-8 py-3 rounded-full border-2 border-primary/10 text-primary font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                    {item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: Contact Info & Map */}
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Visit the Estate</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10 leading-tight italic">Our <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Location.</span></h2>
              
              <div className="space-y-8 mb-12">
                 <div className="flex gap-6 group">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary group-hover:text-white transition-all">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-primary mb-2">Campus Address</h4>
                       <p className="text-black leading-relaxed">
                         P.O. Box No. 6455, MG Road,<br />
                         Near Hebbal Flyover, Bangalore North,<br />
                         Karnataka - 560001, India
                       </p>
                    </div>
                 </div>
                 <div className="flex gap-6 group">
                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary shadow-lg group-hover:bg-secondary group-hover:text-white transition-all">
                       <Clock size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-bold text-primary mb-2">Office Hours</h4>
                       <p className="text-black leading-relaxed">
                         Monday – Friday: 08:00 AM – 04:30 PM<br />
                         Saturday: 08:30 AM – 01:00 PM (1st & 3rd Only)<br />
                         Sunday: Closed
                       </p>
                    </div>
                 </div>
              </div>

              {/* Conceptual Map Placeholder */}
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] border border-gray-200">
                 <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9668_ufygfd.jpg" className="w-full h-full object-cover grayscale opacity-50" alt="Map View" />
                 <div className="absolute inset-0 flex items-center justify-center bg-primary/20 backdrop-blur-[2px]">
                    <div className="bg-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center">
                       <MapPin className="text-secondary mb-4 animate-bounce" size={48} />
                       <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-4">Karnataka Public School</h4>
                       <button className="bg-primary text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-secondary transition-all">
                          Get Directions
                       </button>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right: Comprehensive Form */}
            <div className="lg:w-1/2 reveal delay-400">
              <div className="sticky top-32">
                 <ContactForm title="Direct Message" />
                 
                 <div className="mt-12 grid grid-cols-2 gap-6">
                    <a href="https://www.facebook.com/share/1Hj2pKYsVa/" target="_blank" rel="noopener noreferrer" className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-secondary transition-colors">
                       <Facebook className="text-black group-hover:text-[#1877F2] transition-colors mb-4" size={32} />
                       <span className="text-[10px] font-black uppercase tracking-widest text-black">Facebook</span>
                    </a>
                    <a href="https://www.instagram.com/kpscbse?igsh=ZnB5cm4ya2p6bXBt" target="_blank" rel="noopener noreferrer" className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-secondary transition-colors">
                       <Instagram className="text-black group-hover:text-[#E4405F] transition-colors mb-4" size={32} />
                       <span className="text-[10px] font-black uppercase tracking-widest text-black">Instagram</span>
                    </a>
                    <a href="https://youtube.com/@kps_cbse?si=-KFwPAut3yTHvs1a" target="_blank" rel="noopener noreferrer" className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-secondary transition-colors">
                       <Youtube className="text-black group-hover:text-[#FF0000] transition-colors mb-4" size={32} />
                       <span className="text-[10px] font-black uppercase tracking-widest text-black">Youtube</span>
                    </a>
                    <a href="https://www.linkedin.com/company/karnataka-public-school-kps/" target="_blank" rel="noopener noreferrer" className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-secondary transition-colors">
                       <Linkedin className="text-black group-hover:text-[#0A66C2] transition-colors mb-4" size={32} />
                       <span className="text-[10px] font-black uppercase tracking-widest text-black">LinkedIn</span>
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2 reveal">
                  <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Network</h4>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic">Part of the <span className="text-secondary not-italic">Global KPS Group.</span></h2>
                  <div className="space-y-8">
                     <div className="flex gap-6 group">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                           <Globe size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Academic Partnerships</h4>
                           <p className="text-black group-hover:text-black text-sm">We maintain active student exchange and faculty training partnerships with institutions in the UK, Singapore, and Australia.</p>
                        </div>
                     </div>
                     <div className="flex gap-6 group">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                           <ShieldCheck size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold mb-2">Accreditation Liaison</h4>
                           <p className="text-black group-hover:text-black text-sm">For CBSE affiliation enquiries or ISO compliance verification, please contact our quality audit desk at ketkps@gmail.com.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 reveal delay-400 flex justify-center">
                  <div className="relative p-1">
                     <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-20"></div>
                     <div className="w-80 h-80 rounded-full border-8 border-white/5 flex items-center justify-center relative bg-white/5 backdrop-blur-md">
                        <div className="text-center">
                           <Heart className="text-secondary mx-auto mb-6 fill-secondary" size={48} />
                           <h3 className="text-3xl font-serif font-black italic">Legacy <br /> of Love</h3>
                           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-4 underline underline-offset-8">Established 1998</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Footer Invite */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">The journey of excellence <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">starts with a conversation.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Request a Call Back
              </button>
              <button className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Our FAQ Library
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
