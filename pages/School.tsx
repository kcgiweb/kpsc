
import React, { useEffect } from 'react';
import { 
  Users, Clock, ShieldCheck, Shirt, 
  Package, Music, Trophy, Heart, 
  ArrowRight, ChevronRight, Palette, 
  Coffee, Star, Zap, School as SchoolIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

const School: React.FC = () => {
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

  const schoolHubs = [
    {
      title: "School Timings",
      path: "/school/timings",
      desc: "Structured daily routines designed to balance academic rigor with play and reflection.",
      icon: Clock,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Code of Conduct",
      path: "/school/conduct",
      desc: "Our ethical framework that nurtures mutual respect, integrity, and discipline.",
      icon: ShieldCheck,
      accent: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Uniform Policy",
      path: "/school/uniform",
      desc: "Our attire reflects our identity—a badge of pride and a symbol of collective equality.",
      icon: Shirt,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Student Kit",
      path: "/school/kit",
      desc: "Essential academic and digital tools provided to every learner for a seamless journey.",
      icon: Package,
      accent: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const studentLifeStats = [
    { label: "Active Student Clubs", value: "25+", icon: Star },
    { label: "Annual Events", value: "50+", icon: Trophy },
    { label: "Student Houses", value: "04", icon: Palette },
    { label: "Wellbeing Support", value: "24/7", icon: Heart },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9595_eiqj6a.jpg" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Students in School Courtyard" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">The Student Experience</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            School <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Life.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Beyond the classroom, KPS is a vibrant ecosystem where friendships are forged, characters are built, and dreams take flight.
          </p>
        </div>
      </section>

      {/* The Essence of KPS Life */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Community</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">A Home Away <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">From Home.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, school life is an intricate tapestry of academic pursuits and holistic development. We believe that every moment spent on campus is an opportunity for learning—whether it's the morning assembly, a collaborative lab session, or a friendly game on the field.
                </p>
                <p>
                  Our culture is rooted in kindness and defined by an unwavering pursuit of excellence. We nurture a safe, inclusive environment where every student feels seen, heard, and empowered.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-10">
                 <div>
                    <span className="text-4xl font-black text-primary italic">100%</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Safe Campus</p>
                 </div>
                 <div className="w-px h-12 bg-gray-100"></div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">25+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Hobby Clubs</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9690_dpt0yx.jpg" className="w-full h-full object-cover" alt="Cultural Event at School" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <Music className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"Character is built in the spaces between the bells."</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Hub Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Operations & Conduct</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">The KPS <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Standard.</span></h2>
             <p className="text-black">Essential information regarding the daily functioning and ethical guidelines of our institution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {schoolHubs.map((card, i) => (
              <Link to={card.path} key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.accent} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                      <card.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h3>
                   <p className="text-black text-sm leading-relaxed mb-10 flex-grow">{card.desc}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:text-primary transition-colors">
                     Explore Section <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {studentLifeStats.map((stat, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 group-hover:bg-secondary transition-all">
                  <stat.icon size={32} className="text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2">{stat.value}</h3>
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Clubs */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Engagement</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Clubs & <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Societies.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   From the Robotics Guild to the Debating Union, KPS offers a diverse range of over 25 clubs that allow students to pursue their passions beyond the standard curriculum.
                 </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Palette className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">The Arts Guild</h4>
                          <p className="text-black group-hover:text-white/60 text-xs">Visual arts, pottery, and contemporary dance programs.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Zap className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">Tech Pioneers</h4>
                          <p className="text-black group-hover:text-white/60 text-xs">AI research, coding marathons, and drone pilot training.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary">
                    <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9579_niujfz.jpg" className="w-full h-full object-cover" alt="Students Collaborative Project" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Dining & Social Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-primary rounded-[4rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden text-white flex flex-col lg:flex-row items-center gap-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Nutritional Wellness</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">The KPS <br /><span className="text-secondary not-italic">Cafeteria.</span></h2>
                 <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                   Our school dining hall serves nutritious, multi-cuisine meals planned by professional dieticians. We emphasize table manners and the social joy of communal eating.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-3 text-secondary">
                       <Coffee size={24} />
                       <span className="font-bold text-sm tracking-widest uppercase text-white">Organic Produce</span>
                    </div>
                    <div className="flex items-center space-x-3 text-secondary">
                       <SchoolIcon size={24} />
                       <span className="font-bold text-sm tracking-widest uppercase text-white">Hygienic Prep</span>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789506/SLA_8705_ccmafe.jpg" className="w-full h-full object-cover" alt="Student Dining" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Be part of our <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">vibrant community.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <Link to="/media/gallery" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 View Life in Pictures
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default School;
