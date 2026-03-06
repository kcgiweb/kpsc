
import React, { useEffect } from 'react';
import { 
  BookOpen, Target, Sparkles, Brain, 
  Microscope, Globe, GraduationCap, ArrowRight, 
  ChevronRight, Calendar, Library as LibraryIcon, 
  Layers, Quote, Beaker, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Academics: React.FC = () => {
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

  const academicHubs = [
    {
      title: "The Curriculum",
      path: "/academics/curriculum",
      desc: "An integrated approach to learning that balances NCERT rigor with global life skills.",
      icon: Layers,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Assessment",
      path: "/academics/assessment",
      desc: "Continuous and comprehensive evaluation focused on identifying and nurturing potential.",
      icon: Target,
      accent: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Holiday Calendar",
      path: "/academics/holidays",
      desc: "Plan your child's session with our comprehensive calendar of breaks and events.",
      icon: Calendar,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "The Library",
      path: "/academics/library",
      desc: "A vast intellectual sanctuary with over 50,000 volumes and digital archives.",
      icon: LibraryIcon,
      accent: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const statistics = [
    { val: "100%", label: "CBSE Result Streak", icon: GraduationCap },
    { val: "15:1", label: "Student-Teacher Ratio", icon: Brain },
    { val: "25+", label: "STEM Excellence Hubs", icon: Microscope },
    { val: "10k+", label: "Global Alumni Network", icon: Globe }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789517/SLA_9092_dnumlx.jpg" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Students Studying" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Center of Excellence</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Academics at <span className="text-secondary not-italic underline decoration-4 underline-offset-8">KPS.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Where academic rigor meets creative inquiry, crafting the intellectual foundation for global leadership.
          </p>
        </div>
      </section>

      {/* The Academic Vision */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Methodology</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Sculpting <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Young Minds.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  Academics at KPS is an evolving landscape. We don't just follow a curriculum; we curate a learning journey. Our pedagogical framework is built on the pillars of critical thinking, collaborative problem-solving, and emotional intelligence.
                </p>
                <p>
                  From the foundational play-based years to the specialized senior secondary years, every phase is designed to challenge the intellect while respecting the individuality of every child.
                </p>
              </div>
              <div className="mt-12">
                 <Link to="/academics/overview" className="inline-flex items-center text-primary font-black uppercase tracking-[0.2em] text-xs hover:text-secondary transition-colors group">
                    Detailed Academic Overview <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                 </Link>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9084_ysrthb.jpg" className="w-full h-full object-cover" alt="Student in Tech Lab" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <Beaker className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"Learning is an active pursuit of truth and discovery."</p>
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
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Explore Academics</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">The KPS <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Blueprint.</span></h2>
             <p className="text-black">Dive into the various dimensions of our academic environment, from syllabus to resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {academicHubs.map((card, i) => (
              <Link to={card.path} key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.accent} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                      <card.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h3>
                   <p className="text-black text-sm leading-relaxed mb-10 flex-grow">{card.desc}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:text-primary transition-colors">
                     View Section <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
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
            {statistics.map((stat, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 group-hover:bg-secondary transition-all">
                  <stat.icon size={32} className="text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2">{stat.val}</h3>
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Teaser */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-primary rounded-[4rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden text-white flex flex-col lg:flex-row items-center gap-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Academic Mentorship</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">World-Class <br /><span className="text-secondary not-italic">Educators.</span></h2>
                 <p className="text-white text-lg mb-10 leading-relaxed font-medium">
                   Our faculty is composed of decorated scholars and pedagogical experts committed to one goal: the success of your child. 120+ hours of annual training ensures they stay at the cutting edge of education.
                 </p>
                 <Link to="/about/faculty" className="inline-flex items-center bg-white text-primary px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl">
                    Meet the Faculty
                 </Link>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1544717297-fa95b33979d7?auto=format&fit=crop&q=80" className="rounded-[2.5rem] shadow-2xl aspect-square object-cover" alt="Faculty 1" />
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" className="rounded-[2.5rem] shadow-2xl aspect-square object-cover mt-8" alt="Faculty 2" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Global Results Spotlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Proven Excellence</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Board Results <br />& <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Beyond.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Year after year, KPS students achieve 100% distinction in CBSE Class 10 & 12 boards. More importantly, they secure placements in top universities across India, UK, USA, and Singapore.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Zap className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">Competitive Edge</h4>
                          <p className="text-black group-hover:text-white text-xs">Integrated JEE/NEET/CLAT coaching for seniors.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative p-10 bg-gray-50 rounded-[4rem] border border-gray-100">
                    <Quote className="text-secondary/10 absolute top-10 left-10" size={120} />
                    <p className="text-2xl font-serif italic text-primary leading-relaxed relative z-10 mb-10">
                      "KPS provided me with the analytical tools to succeed at IIT. The foundation I received here in Grade 8 was the turning point of my academic life."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">AS</div>
                       <div>
                          <h5 className="font-bold text-primary">Ashish Sharma</h5>
                          <p className="text-[10px] font-black uppercase text-black tracking-widest">Alumnus, Batch 2020</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Begin the journey of <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">intellectual discovery.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <Link to="/about/why-kps" className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                 Why KPS Academics?
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;
