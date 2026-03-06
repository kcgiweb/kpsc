
import React, { useEffect } from 'react';
import { Bus, MapPin, ShieldCheck, Zap, Phone, Clock, Search, Download, ChevronRight } from 'lucide-react';

const Transport: React.FC = () => {
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

  const features = [
    { title: "Real-time Tracking", desc: "Live GPS feed integrated with the KPS Parent App.", icon: MapPin },
    { title: "Safety Mesh", desc: "Female attendants and background-verified drivers on all routes.", icon: ShieldCheck },
    { title: "Smart Fleet", desc: "Eco-friendly, AC-equipped buses with speed governors.", icon: Bus },
    { title: "Speed Capped", desc: "All vehicles limited to 40km/h for city safety.", icon: Zap }
  ];

  const zones = [
    { name: "North Zone", areas: "Hebbal, Jakkur, Sahakar Nagar", timing: "07:15 AM" },
    { name: "Central Zone", areas: "MG Road, Indiranagar, Ulsoor", timing: "07:45 AM" },
    { name: "East Zone", areas: "Whitefield, Marathahalli", timing: "07:00 AM" }
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Mobility & Safety</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-4 reveal delay-100 italic">Smart <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Transport.</span></h1>
          <p className="text-white/40 max-w-xl mx-auto text-sm reveal delay-200 uppercase tracking-widest font-black">Connected. Controlled. Comfortable.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-black text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3 reveal">
               <h2 className="text-4xl font-serif font-bold text-primary mb-12">Zone Coverage</h2>
               <div className="space-y-6">
                  {zones.map((zone, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex items-center justify-between group">
                       <div className="flex items-center gap-6">
                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                             <MapPin size={24} />
                          </div>
                          <div>
                             <h4 className="font-bold text-primary text-xl mb-1">{zone.name}</h4>
                             <p className="text-black text-sm">{zone.areas}</p>
                          </div>
                       </div>
                       <div className="text-right">
                          <p className="text-[10px] font-black uppercase tracking-widest text-black">Avg. Arrival</p>
                          <p className="text-primary font-black text-lg">{zone.timing}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="lg:w-1/3 reveal delay-400">
               <div className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                  <Download className="text-secondary mb-8" size={48} />
                  <h3 className="text-2xl font-serif font-bold mb-6 italic">Enroll in Transport</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-10">
                    Download the transport policy and application form to secure a seat for the upcoming academic session.
                  </p>
                  <button className="w-full bg-secondary text-white py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl">
                    Download Form PDF
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic">Punctuality with <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Peace of Mind.</span></h2>
           <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all">
              Contact Transport Manager
           </button>
        </div>
      </section>
    </main>
  );
};

export default Transport;
