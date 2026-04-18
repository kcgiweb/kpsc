
import React, { useEffect } from 'react';
import { MapPin, ShieldCheck, Sun, Droplets, Wind, Globe, Microscope, Laptop, Library, Music, Dumbbell, Coffee, Compass, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Campus: React.FC = () => {
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

  const landmarks = [
    { title: "The Knowledge Pavilion", desc: "A 10,000 sq.ft state-of-the-art library and digital archive.", category: "Intellectual", img: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789513/SLA_9060_emvw7m.jpg" },
    { title: "Olympic Aqua Center", desc: "Indoor heated swimming pool with professional coaching.", category: "Sports", img: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789511/SLA_9058_y5xdri.jpg" },
    { title: "The Innovation Wing", desc: "Robotics hubs and NABL certified science research labs.", category: "Innovation", img: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789510/SLA_9006_itrogh.jpg" },
    { title: "The Grand Amphitheater", desc: "Open-air theater for cultural festivals and school assemblies.", category: "Culture", img: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789509/SLA_8735_uksvsy.jpg" },
    { title: "Green Valley Plaza", desc: "Sustainable gardens and organic farming learning zones.", category: "Wellness", img: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789509/SLA_8998_yygnwc.jpg" },
    { title: "Digital Class Studios", desc: "Interactive smart learning spaces with 4K panel integration.", category: "Academia", img: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789508/SLA_8772_rgqdpt.jpg" }
  ];

  return (
    <main className="bg-white">
      {/* Immersive Campus Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9084_ysrthb.jpg" 
            className="w-full h-full object-cover animate-[zoom_20s_infinite_alternate]" 
            alt="Main Campus Aerial View" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">World-Class Infrastructure</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-6 reveal delay-100 italic">
            The <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Master Plan.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200">
            25 acres of lush sanctuary, engineered for intellectual curiosity and physical vitality.
          </p>
          <div className="mt-12 reveal delay-300">
             <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all flex items-center mx-auto group">
                <Play className="mr-3 fill-white" size={16} /> Virtual Campus Tour
             </button>
          </div>
        </div>
      </section>

      {/* The Estate Master Plan (Visual Grid) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-20 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Architecture of Mind</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">A Blueprint for Excellence.</h2>
              <p className="text-black leading-relaxed">
                Designed by international award-winning architects, our campus follows the principle of "Biophilic Learning"—connecting students with nature to boost cognitive function and reduce stress.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landmarks.map((item, i) => (
                <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                   <div className="bg-gray-50 rounded-[3rem] p-4 h-full flex flex-col border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-4">
                      <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8">
                         <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                         <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest">
                            {item.category}
                         </div>
                      </div>
                      <div className="px-6 pb-8">
                         <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                         <p className="text-black text-sm leading-relaxed mb-8">{item.desc}</p>
                         <Link to="/infrastructure/details" className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary flex items-center group/btn">
                            Technical Specs <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform" size={14} />
                         </Link>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Campus Map Concept */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2 reveal">
                  <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Navigating KPS</h4>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic">Find Your <span className="text-secondary not-italic">Sanctuary.</span></h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     {[
                        { label: "Zone A: Foundational", val: "Grades Pre-K to 2", icon: Compass },
                        { label: "Zone B: Academic Block", val: "Grades 3 to 12", icon: MapPin },
                        { label: "Zone C: Sports Complex", val: "Fields & Courts", icon: Dumbbell },
                        { label: "Zone D: Admin & Media", val: "Visitor Center", icon: Globe }
                     ].map((zone, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                           <zone.icon className="text-secondary mb-4" size={24} />
                           <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">{zone.label}</p>
                           <p className="text-sm font-bold">{zone.val}</p>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 reveal delay-400">
                  <div className="bg-white rounded-[4rem] p-12 lg:p-20 text-center text-primary shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                     <h3 className="text-3xl font-serif font-bold mb-8">Digital Campus Map</h3>
                     <p className="text-black mb-10 leading-relaxed">
                        Download our high-resolution interactive master plan to explore every wing, lab, and green space on the campus.
                     </p>
                     <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl w-full sm:w-auto">
                        Download Master Plan PDF
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Security & Logistics Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789506/SLA_8705_ccmafe.jpg" className="w-full h-[500px] object-cover grayscale" alt="Campus Security" />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    <div className="absolute top-10 left-10">
                       <ShieldCheck className="text-secondary" size={64} />
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Operations</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10 leading-tight">Safe. Secure. <br /> Seamless.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed">
                   The security of our students is our paramount priority. Our campus is monitored by an AI-integrated CCTV network with 500+ nodes, supported by 24/7 background-verified security personnel and strict access protocols.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                       <span className="text-3xl font-black text-primary italic">100%</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-black mt-2">CCTV Coverage</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-3xl font-black text-primary italic">RFID</span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-black mt-2">Attendance Cards</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Walk through the <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">future of education.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Schedule a Campus Visit
              </Link>
              <Link to="/infrastructure/details" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Technical Details
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Campus;
