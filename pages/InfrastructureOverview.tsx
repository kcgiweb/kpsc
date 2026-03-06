
import React, { useEffect } from 'react';
import { 
  Building, Wifi, Shield, Zap, Wind, Coffee, Dumbbell, 
  Microscope, Laptop, Monitor, Bus, Camera, HeartPulse, 
  ChevronRight, ArrowRight, Play 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InfrastructureOverview: React.FC = () => {
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

  const corePillars = [
    { 
      title: "Digital Spine", 
      desc: "Gigabit-speed campus-wide Wi-Fi and smart-integration for seamless blended learning.", 
      icon: Wifi, 
      color: "text-blue-500", 
      bg: "bg-blue-50" 
    },
    { 
      title: "Scientific Hub", 
      desc: "NABL-certified laboratories for Physics, Chemistry, and Biological research.", 
      icon: Microscope, 
      color: "text-primary", 
      bg: "bg-primary/5" 
    },
    { 
      title: "Secure Sanctuary", 
      desc: "AI-monitored CCTV networks and 24/7 background-verified security personnel.", 
      icon: Shield, 
      color: "text-orange-500", 
      bg: "bg-orange-50" 
    },
    { 
      title: "Sustainable Power", 
      desc: "Fully solar-powered campus with integrated rainwater harvesting systems.", 
      icon: Zap, 
      color: "text-yellow-600", 
      bg: "bg-yellow-50" 
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover animate-[zoom_20s_infinite_alternate]" 
            alt="Modern Office Building" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">World Class Estate</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-6 reveal delay-100">
            Engineered <br /> for <span className="text-secondary italic">Genius.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200">
            A 25-acre sanctuary of architectural brilliance designed to inspire curiosity and nurture the leaders of the 21st century.
          </p>
        </div>
      </section>

      {/* Philosophy of Space */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Architecture of Mind</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Design as a <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Pedagogical tool.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, we believe that the environment is the "third teacher." Our campus is not merely a collection of buildings, but a living ecosystem designed to promote collaboration, innovation, and psychological well-being.
                </p>
                <p>
                  From ergonomically designed furniture to classrooms that harness natural ventilation and sunlight, every architectural decision is rooted in data-driven educational research.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary">25+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black mt-2">Acres of Lush Campus</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary">120+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black mt-2">Smart Learning Studios</span>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {corePillars.map((pillar, i) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className={`w-14 h-14 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <pillar.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{pillar.title}</h3>
                  <p className="text-black text-[13px] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Spotlight: The Digital Spine */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Digital Transformation</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">The Smart <span className="text-secondary not-italic">Sanctuary.</span></h2>
                 <p className="text-white/60 text-lg mb-10 leading-relaxed">
                   Our smart classrooms are equipped with 85-inch interactive 4K panels, acoustic treatment, and IoT-enabled climate control. We ensure that technology is an invisible enabler of brilliance, not a distraction.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white hover:text-primary transition-all duration-500 cursor-default">
                       <Monitor className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1">Interactive Panels</h4>
                          <p className="text-white/40 group-hover:text-black text-xs">Dynamic content delivery with touch-capacitive technology.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white hover:text-primary transition-all duration-500 cursor-default">
                       <Laptop className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1">1:1 Device Policy</h4>
                          <p className="text-white/40 group-hover:text-black text-xs">Dedicated cloud-integrated systems for senior students.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative p-8">
                    <div className="absolute inset-0 bg-white/5 rounded-[4rem] rotate-2"></div>
                    <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                       <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Students in Lab" />
                       <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer">
                          <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                             <Play fill="white" size={24} />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Safety & Logistics Grid */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Operations & Safety</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Uncompromising Care</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="reveal bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <Bus className="text-secondary mb-8" size={48} />
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Smart Transport</h3>
                <p className="text-black text-sm leading-relaxed mb-8">A fleet of AC-equipped buses with real-time GPS tracking and female attendants on every route.</p>
                <Link to="/infrastructure/transport" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary flex items-center group">
                   Route Details <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                </Link>
             </div>
             <div className="reveal delay-200 bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <Camera className="text-secondary mb-8" size={48} />
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">AI Surveillance</h3>
                <p className="text-black text-sm leading-relaxed mb-8">Over 500+ high-definition cameras monitoring entry, exit, and common areas with thermal sensors.</p>
                <Link to="/infrastructure/security" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary flex items-center group">
                   Safety Protocols <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                </Link>
             </div>
             <div className="reveal delay-400 bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <HeartPulse className="text-secondary mb-8" size={48} />
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Wellness Suite</h3>
                <p className="text-black text-sm leading-relaxed mb-8">A fully-staffed medical room with 24/7 ambulance standby and annual health monitoring for all.</p>
                <Link to="/infrastructure/wellness" className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-secondary flex items-center group">
                   Health Facilities <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" size={14} />
                </Link>
             </div>
          </div>
        </div>
      </section>

      {/* Sports & Fitness Spotlight */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-2/3">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Arena</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Olympic-Grade <br /> Athletic Hub.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed">
                   Physical vitality is the foundation of cognitive excellence. Our athletic hub features an indoor heated swimming pool, professional basketball courts, a FIFA-approved turf, and a specialized yoga pavilion.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/infrastructure/campus" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center group">
                       View Sports Complex <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="relative p-12 bg-secondary rounded-[3rem] text-center text-white overflow-hidden">
                    <Dumbbell className="text-primary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif font-bold mb-4 italic">Pro-Training</h3>
                    <p className="text-primary/60 text-[10px] font-black uppercase tracking-widest">National Level Coaches</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic">Experience the <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Blueprint.</span></h2>
          <p className="text-black max-w-xl mx-auto mb-12">Take a walk through the future of education. Book a guided campus visit today.</p>
          <div className="flex justify-center gap-6">
            <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
               Apply Now
            </Link>
            <Link to="/infrastructure/campus" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
               Photo Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InfrastructureOverview;
