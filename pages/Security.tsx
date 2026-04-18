
import React, { useEffect } from 'react';
import { Shield, Camera, Users, Lock, Radio, Bell, Eye, CheckCircle2 } from 'lucide-react';

const Security: React.FC = () => {
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

  const protocols = [
    { title: "24/7 AI-Integrated CCTV", desc: "500+ high-definition cameras monitoring every corridor and exit with motion alerts.", icon: Camera },
    { title: "RFID Entry Systems", desc: "Student attendance and entry logged via personalized RFID smart cards.", icon: Lock },
    { title: "Visitor Screening", desc: "Mandatory ID verification and pre-appointment checks for all visitors.", icon: Shield },
    { title: "Verified Personnel", desc: "100% background-verified security staff and support personnel.", icon: Users }
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">A Zero-Compromise Campus</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-4 reveal delay-100 italic">Campus <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Security.</span></h1>
          <p className="text-white max-w-xl mx-auto text-sm reveal delay-200 uppercase tracking-widest font-black">Safety isn't just a policy; it's our promise.</p>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {protocols.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-8 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-colors shadow-xl">
                      <item.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-black leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2 reveal">
                  <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Emergency Response</h4>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic text-white leading-tight">Prepared for the <br /><span className="text-secondary not-italic">Unexpected.</span></h2>
                  <div className="space-y-6">
                     {[
                        "Regular Fire & Earthquake Evacuation Drills.",
                        "Direct Hotline to local Police and Trauma Care.",
                        "Redundant Power Systems for critical security hardware.",
                        "Strict No-Bullying Policy enforced by trained vigilantes."
                     ].map((point, i) => (
                        <div key={i} className="flex items-center gap-4 text-white">
                           <CheckCircle2 className="text-secondary shrink-0" size={20} />
                           <span className="font-bold text-sm tracking-wide">{point}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 reveal delay-400">
                  <div className="p-12 bg-white rounded-[4rem] text-primary shadow-2xl relative overflow-hidden">
                     <Bell className="text-secondary mb-6" size={64} strokeWidth={1.5} />
                     <h3 className="text-3xl font-serif font-bold mb-6">Alert Systems</h3>
                     <p className="text-black mb-10 leading-relaxed italic">
                       "Every second counts. Our campus-wide PA system and instant app alerts ensure that in any event, communication is instantaneous."
                     </p>
                     <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">Response Time Standard</p>
                        <p className="text-xl font-black mt-2">Under 45 Seconds</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Our priority is your <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">child's safety.</span></h2>
           <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all">
              Request Security Audit
           </button>
        </div>
      </section>
    </main>
  );
};

export default Security;
