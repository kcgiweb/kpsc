
import React, { useEffect } from 'react';
import { Target, Eye, Rocket, ShieldCheck, Zap, Globe, Heart, Users, Compass, ChevronRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const VisionMission: React.FC = () => {
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

  const missions = [
    {
      title: "Quality Education",
      desc: "Deliver a balanced, engaging, and comprehensive curriculum that strengthens academic excellence, creativity, and conceptual understanding.",
      icon: BookOpen,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Holistic Development",
      desc: "Foster the intellectual, emotional, social, physical, and creative growth of every student, enabling them to become well rounded and resilient individuals.",
      icon: Heart,
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      title: "Lifelong Learning",
      desc: "Inspire curiosity, innovation, and an enduring love for learning through experiential, inquiry based, and activity oriented teaching approaches.",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "Strong Values",
      desc: "Instill respect, empathy, discipline, integrity, and responsibility, ensuring that students develop strong moral character and ethical judgment.",
      icon: ShieldCheck,
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    },
    {
      title: "Inclusive Environment",
      desc: "Provide a safe, supportive, and equitable learning atmosphere where every child feels valued, confident, and empowered to succeed.",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      title: "Community Collaboration",
      desc: "Strengthen partnerships with parents and the community to support learning, growth, and student well being.",
      icon: Globe,
      color: "text-cyan-600",
      bg: "bg-cyan-50"
    },
    {
      title: "Future Readiness",
      desc: "Equip learners with essential 21st century skills—critical thinking, communication, collaboration, digital literacy, problem solving, and leadership—to thrive in a global society.",
      icon: Rocket,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  const coreValues = [
    { title: "Inclusivity", icon: Users },
    { title: "Excellence", icon: Target },
    { title: "Innovation", icon: Zap },
    { title: "Global Mindset", icon: Globe }
  ];

  return (
    <main className="bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Students Collaborative Learning" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/60 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-xs mb-6">Our Roadmap</h4>
            <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-8 leading-tight">
              A Future-Ready <br /> <span className="text-secondary italic">Foundation.</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl">
              Defining the horizons of excellence and the paths we take to reach them. Our vision and mission are the heartbeat of Karnataka Public School.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background decorative blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
              <div className="lg:w-1/2 reveal">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-white mb-8 shadow-lg">
                  <Eye size={32} strokeWidth={2.5} />
                </div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tight">The Vision</h2>
                <div className="border-l-4 border-secondary pl-8 py-2">
                  <p className="text-xl md:text-2xl font-sans italic text-white/90 leading-relaxed">
                    "To inspire and empower every learner to become a confident, compassionate, and responsible global citizen. Karnataka Public School envisions a vibrant learning environment that nurtures curiosity, values diversity, promotes holistic development, and prepares students to excel with integrity and purpose in a rapidly evolving world."
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 reveal delay-200">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                   <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
                    alt="Students collaborating" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                   <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 shadow-sm">
               <Rocket size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 tracking-tight">Our Mission</h2>
            <p className="text-black/70 text-lg font-medium leading-relaxed">
              We don't just dream of excellence; we engineer it through specific, measurable, and value-driven missions that shape the leaders of tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
             {missions.map((mission, i) => (
               <div key={i} className="reveal group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col h-full hover:-translate-y-2">
                 <div className={`w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center ${mission.bg} ${mission.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                   <mission.icon size={28} />
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3">{mission.title}</h3>
                 <p className="text-black/60 leading-relaxed text-sm font-medium">{mission.desc}</p>
               </div>
             ))}
             {/* Decorative Image Card to fill the grid if needed or add visual interest */}
             <div className="reveal group relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[300px] md:col-span-2 lg:col-span-1 lg:row-span-2">
                <img 
                 src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
                 alt="Mission in action" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                   <h3 className="text-white text-2xl font-serif font-bold mb-2">Future Ready</h3>
                   <p className="text-white/80 text-sm">Empowering the next generation.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Objectives (Compass Section) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Values & Objectives</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10">The KPS Compass</h2>
                 <div className="grid grid-cols-2 gap-6">
                    {coreValues.map((val, i) => (
                      <div key={i} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:bg-primary transition-all duration-300">
                         <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-md group-hover:bg-secondary group-hover:text-white transition-all">
                            <val.icon size={20} />
                         </div>
                         <span className="font-bold text-sm tracking-wide text-black group-hover:text-white transition-colors">{val.title}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 space-y-6">
                    <div className="flex items-start space-x-4">
                       <ChevronRight className="text-secondary mt-1" size={18} />
                       <p className="text-black">Developing critical thinking skills through inquiry-based learning.</p>
                    </div>
                    <div className="flex items-start space-x-4">
                       <ChevronRight className="text-secondary mt-1" size={18} />
                       <p className="text-black">Cultivating an appreciation for arts, culture, and environmental stewardship.</p>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative p-8">
                    <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3"></div>
                    <div className="relative bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 text-center">
                       <Compass className="text-secondary mx-auto mb-8" size={64} strokeWidth={1.5} />
                       <h3 className="text-2xl font-serif font-bold text-primary mb-6">Holistic Orientation</h3>
                       <p className="text-black leading-relaxed italic">
                         "Our objectives are not just targets, but a living ecosystem that ensures every child finds their true north."
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Bottom Impact Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-secondary rounded-[4rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl text-center">
             <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 relative z-10">Start the Journey Today</h2>
             <p className="text-white/80 text-lg mb-12 relative z-10 max-w-2xl mx-auto">
               Ready to align your child's future with our vision of excellence? Join the KPS family.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <Link to="/admissions/process" className="bg-primary text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl">
                  Admission Process
                </Link>
                <Link to="/about/us" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                  About Our Legacy
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionMission;
