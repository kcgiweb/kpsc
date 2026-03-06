
import React, { useEffect } from 'react';
import { Microscope, Monitor, Shield, Bus, HeartPulse, Zap, Music, Play, ChevronRight, CheckCircle2 } from 'lucide-react';

const InfrastructureDetails: React.FC = () => {
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

  const labs = [
    { title: "NABL Physics Lab", specs: "High-precision optical benches, digital signal generators, advanced mechanics rigs.", icon: Zap },
    { title: "Chemistry Research Wing", desc: "Chemical-resistant worktops, fume hoods, digital titration stations, and spectral analyzers.", icon: Microscope },
    { title: "Biological Hub", desc: "Digital microscopes, tissue culture incubation, and bio-specimen library.", icon: HeartPulse }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-primary">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Technical Specifications</h4>
            <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-4 reveal delay-100">Estate <span className="text-secondary italic">Intelligence.</span></h1>
            <p className="text-white/40 max-w-xl mx-auto text-sm reveal delay-200 font-bold uppercase tracking-widest">Detailing the world-class facilities of KPS</p>
         </div>
      </section>

      {/* Smart Learning Specs */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Digital Spine</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Inside the <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Smart Classroom.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Our learning studios are more than just rooms; they are data-driven environments designed for collaborative brilliance.
                 </p>
                 <div className="space-y-6">
                    {[
                       { label: "Interactive Visuals", val: "85-inch 4K Touch Panels with built-in PC units." },
                       { label: "Acoustic Treatment", val: "Sound-dampening wall textures for crystal-clear auditory delivery." },
                       { label: "Climate Intelligence", val: "IoT-enabled ACs maintaining optimal learning temperatures." },
                       { label: "Ergonomics", val: "Dynamic, height-adjustable furniture for posturally correct seating." }
                    ].map((spec, i) => (
                       <div key={i} className="flex gap-4 group">
                          <CheckCircle2 className="text-secondary shrink-0" size={20} />
                          <div>
                             <h4 className="font-bold text-primary text-sm uppercase tracking-widest">{spec.label}</h4>
                             <p className="text-black text-xs mt-1">{spec.val}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80">
                       <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Classroom 1" />
                    </div>
                    <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-80 translate-y-8">
                       <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Classroom 2" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Lab Specifications */}
      <section className="py-24 bg-gray-50 overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 reveal">
               <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Innovation Hub</h4>
               <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Laboratory Standards</h2>
               <p className="text-black">Every laboratory at KPS is NABL certified and adheres to international safety protocols (ASTM).</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {labs.map((lab, i) => (
                  <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                     <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                        <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                           <lab.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">{lab.title}</h3>
                        <p className="text-black text-sm leading-relaxed mb-8">{lab.specs || lab.desc}</p>
                        <ul className="space-y-3 mt-auto">
                           <li className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center"><ChevronRight size={14} className="mr-2" /> Digital Logging</li>
                           <li className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center"><ChevronRight size={14} className="mr-2" /> Eye-Wash Stations</li>
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Auditorium & Arts */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Performing Arts</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">The Grand <br />Auditoria.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Our 1,500-seater indoor auditorium features professional-grade line-array sound systems, moving-head LED lighting, and acoustic panels that ensure zero reverb for orchestral performances.
                 </p>
                 <div className="bg-primary p-10 rounded-[3rem] text-white">
                    <h4 className="text-xl font-bold mb-4 italic">Seating Capacity</h4>
                    <p className="text-white/40 text-xs mb-8">Split-level seating for optimal visibility from every corner.</p>
                    <div className="flex gap-10">
                       <div className="flex flex-col">
                          <span className="text-4xl font-black text-secondary">1,500</span>
                          <span className="text-[9px] font-black uppercase tracking-widest mt-1">Indoor Main</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-4xl font-black text-secondary">3,000</span>
                          <span className="text-[9px] font-black uppercase tracking-widest mt-1">Outdoor Arena</span>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                    <img src="https://images.unsplash.com/photo-1514525253361-bee1455d082c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="School Auditorium" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                       <Play className="text-white fill-white cursor-pointer" size={64} />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Logistics & Fleet */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 reveal">
               <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Transport Logistics</h4>
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Connected Care</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { label: "GPS Tracking", val: "Real-time location sharing via school app.", icon: Bus },
                  { label: "Speed Governors", val: "Capped at 40 km/h for urban routes.", icon: Zap },
                  { label: "Women Safety", val: "Dedicated female attendants on every bus.", icon: Shield },
                  { label: "First Aid Kit", val: "Oxygen cylinders and trauma-care kits on-board.", icon: HeartPulse }
               ].map((item, i) => (
                  <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500 group">
                     <item.icon className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={40} />
                     <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{item.label}</h4>
                     <p className="text-white/40 group-hover:text-black text-xs leading-relaxed">{item.val}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic">See it for <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">yourself.</span></h2>
           <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
              Book a Guided Tour
           </button>
        </div>
      </section>
    </main>
  );
};

export default InfrastructureDetails;
