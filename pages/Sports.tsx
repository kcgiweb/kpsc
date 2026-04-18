
import React, { useEffect } from 'react';
import { 
  Trophy, Medal, Dumbbell, Target, 
  Zap, ArrowRight, ChevronRight, Award, 
  CheckCircle2, Globe, Star, Quote, 
  Sparkles, Users, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sports: React.FC = () => {
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

  const sportsWins = [
    {
      title: "State Football Champions",
      event: "Under-17 Karnataka Inter-School Cup 2024",
      desc: "The KPS Wolves secured the title with an unbeaten streak across 8 matches.",
      icon: Trophy,
      accent: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Olympic Gold - Swimming",
      event: "State Level Aquatics Meet 2023",
      desc: "Individual Gold and Silver medals in 100m Butterfly and 200m Freestyle categories.",
      icon: Medal,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Basketball Silver",
      event: "Regional Inter-Zone Tournament",
      desc: "Our Girls' Senior Team finished as runners-up among 32 participating schools.",
      icon: Target,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Athletics Overall Trophy",
      event: "District Sports Meet 2023",
      desc: "KPS was awarded the 'Overall Champions' trophy for the 3rd consecutive year.",
      icon: Award,
      accent: "text-primary",
      bg: "bg-primary/5"
    }
  ];

  const facilities = [
    { name: "FIFA-Grade Turf", icon: Sparkles },
    { name: "Indoor Aquatic Center", icon: Dumbbell },
    { name: "Professional Courts", icon: Target },
    { name: "Synthetic Track", icon: Zap },
    { name: "Yoga Pavilion", icon: Globe },
    { name: "Fitness Suite", icon: Award }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789515/SLA_9114_ebbrop.jpg" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="School Sports Action" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Physical Vitality</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            The KPS <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Wolves.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Building resilience, discipline, and teamwork through a world-class athletic program that champions growth over winning.
          </p>
        </div>
      </section>

      {/* The Arena of Excellence */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Philosophy</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Sports for <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Life.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, we believe that the playing field is the ultimate classroom for character. Our sports curriculum is designed to instill the values of grit, integrity, and collaborative leadership.
                </p>
                <p>
                  From grassroots training for foundational students to professional-level coaching for our school teams, we ensure that every child finds their rhythm on the field.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div>
                    <span className="text-4xl font-black text-primary italic">10+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Professional Coaches</p>
                 </div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">15+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Sports Disciplines</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9091_jqdbtq.jpg" className="w-full h-full object-cover" alt="Football Match" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <Dumbbell className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"Victory is in the effort, not just the score."</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame - Victory Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Triumph Log</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Milestones on <span className="text-secondary not-italic underline decoration-2 underline-offset-8">the Field.</span></h2>
             <p className="text-black">Celebrating the championship legacy of our students across state and national levels.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sportsWins.map((card, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                   <div className="flex items-start gap-8">
                      <div className={`w-20 h-20 rounded-3xl ${card.bg} ${card.accent} flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all shadow-lg`}>
                         <card.icon size={36} />
                      </div>
                      <div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2 block">{card.event}</span>
                         <h3 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h3>
                         <p className="text-black text-sm leading-relaxed">{card.desc}</p>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Infrastructure</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">World-Class <span className="text-secondary not-italic">Arenas.</span></h2>
                 <p className="text-white text-lg mb-10 leading-relaxed font-medium">
                   Our campus features professional-grade sports facilities that allow students to train in an environment that matches global standards.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {facilities.map((f, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white transition-all duration-500 cursor-default">
                         <f.icon size={20} className="text-secondary" />
                         <span className="font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">{f.name}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-white p-12 text-primary">
                    <Quote className="text-secondary mb-8" size={64} strokeWidth={1} />
                    <p className="text-2xl font-serif italic text-primary leading-relaxed mb-10">
                      "Training at KPS gave me the stamina and technique to compete at the national level. Our coaches are more than just trainers; they are life mentors."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-black">RH</div>
                       <div>
                          <h5 className="font-bold text-primary italic">Rohan Hegde</h5>
                          <p className="text-[10px] font-black uppercase text-black tracking-widest">National Swimmer, Batch 2023</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Training & Mentorship Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Mentorship</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Coached by <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">The Best.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Our coaching staff includes former national-level athletes and AFC/BCCI licensed trainers. We provide integrated sports training during school hours and specialized academies in the evening.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Users className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">Specialized Academies</h4>
                          <p className="text-black group-hover:text-white text-xs">After-school excellence centers for Cricket, Football, and Tennis.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Calendar className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">Integrated Schedule</h4>
                          <p className="text-black group-hover:text-white text-xs">Every student gets 120 minutes of outdoor play daily.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary aspect-[4/5]">
                    <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9068_oyqj10.jpg" className="w-full h-full object-cover" alt="School Basketball Court" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Empower your child's <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">athletic potential.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <Link to="/media/gallery" className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                 View Sports Gallery
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Sports;
