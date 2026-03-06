
import React, { useEffect } from 'react';
import { HeartPulse, ShieldCheck, Heart, UserCheck, Stethoscope, Droplets, Smile, Clock, Info } from 'lucide-react';

const Wellness: React.FC = () => {
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

  const services = [
    { title: "24/7 Infirmary", desc: "Equipped with primary care beds and oxygen standby.", icon: HeartPulse, bg: "bg-red-50", color: "text-red-500" },
    { title: "The Sanctuary", desc: "A quiet space for psychological counseling and emotional SEL support.", icon: Smile, bg: "bg-blue-50", color: "text-blue-500" },
    { title: "Full-time Doctor", desc: "Resident medical officer and two trained nurses on campus.", icon: Stethoscope, bg: "bg-green-50", color: "text-green-500" },
    { title: "Annual Profiling", desc: "Regular BMI, vision, dental, and general health monitoring.", icon: UserCheck, bg: "bg-orange-50", color: "text-orange-500" }
  ];

  return (
    <main className="bg-white min-h-screen">
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Holistic Vitality</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-4 reveal delay-100 italic">Health & <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Wellness.</span></h1>
          <p className="text-white/40 max-w-xl mx-auto text-sm reveal delay-200 uppercase tracking-widest font-black">Healthy Bodies. Resilient Minds.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-xl`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Mental Resilience</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Nurturing the <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Inner Self.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Academic success is impossible without emotional stability. Our specialized counseling wing, 'The Sanctuary', provides a confidential and compassionate space for students to navigate the complexities of adolescence.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex items-center gap-4">
                       <Clock className="text-secondary" size={24} />
                       <div>
                          <p className="font-bold text-primary">Daily Drop-in</p>
                          <p className="text-black text-xs">No appointment needed.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <Droplets className="text-secondary" size={24} />
                       <div>
                          <p className="font-bold text-primary">Yoga & Meditation</p>
                          <p className="text-black text-xs">Mandatory weekly sessions.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student in Wellness Center" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 reveal">
           <div className="max-w-3xl mx-auto flex flex-col items-center">
              <Heart className="text-secondary mb-8 fill-secondary" size={64} />
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">Wellness is a <span className="text-secondary not-italic underline decoration-2 underline-offset-8">way of life</span> at KPS.</h2>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-secondary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl">
                    View Health Calendar
                 </button>
                 <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                    Emergency Protocols
                 </button>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Wellness;
