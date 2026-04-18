
import React, { useEffect } from 'react';
import { 
  Music, Palette, Mic2, Cpu, Theater, 
  Sparkles, Award, Star, Globe, 
  ChevronRight, ArrowRight, BookOpen, 
  Lightbulb, Zap, Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CoCurricular: React.FC = () => {
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

  const wins = [
    {
      title: "National Debate Champions",
      event: "Inter-School Oratory Summit 2023",
      desc: "Our senior team secured the First Prize among 50+ participating schools across India.",
      icon: Mic2,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "STEM Innovation Gold",
      event: "South India Science Fair 2024",
      desc: "Awarded for 'The Solar Purifier' project developed by our Grade 10 Robotics Club.",
      icon: Cpu,
      accent: "text-purple-500",
      bg: "bg-purple-50"
    },
    {
      title: "Excellence in Fine Arts",
      event: "State Level Kala Utsav",
      desc: "Recognized for the 'Best Traditional Mural' and 'Modern Sculpture' categories.",
      icon: Palette,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Orchestral Distinction",
      event: "Inter-Zonal Music Festival",
      desc: "The KPS Symphony was rated 'Distinction' for its rendition of Mozart's Symphony No. 40.",
      icon: Music,
      accent: "text-primary",
      bg: "bg-primary/5"
    }
  ];

  const clubs = [
    { name: "Debating Union", icon: Mic2 },
    { name: "Robotics Guild", icon: Cpu },
    { name: "Visual Arts Studio", icon: Palette },
    { name: "Dramatic Society", icon: Theater },
    { name: "Music Conservatory", icon: Music },
    { name: "Literary Circle", icon: BookOpen }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253361-bee1455d082c?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="School Cultural Performance" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">The Creative Pulse</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Beyond the <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Books.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Celebrating the artistic, rhetorical, and technical brilliance that defines the KPS spirit outside the traditional classroom.
          </p>
        </div>
      </section>

      {/* The Artistic Vision */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Expression</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Nurturing <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">The Renaissance Mind.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, co-curricular activities are not "extra"—they are essential. We believe that a complete education involves the training of the hand and the heart alongside the head.
                </p>
                <p>
                  Our students are encouraged to find their unique voice, whether it's through the stroke of a brush, the precision of code, or the power of a spoken argument. Our trophy cabinet reflects this diverse pursuit of passion.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div>
                    <span className="text-4xl font-black text-primary italic">25+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Active Hobby Clubs</p>
                 </div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">50+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Annual Laurels</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://images.unsplash.com/photo-1460518451285-cd7ba71123b2?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student Painting" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <Palette className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"Art is the signature of a civilized mind."</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame - Specific Wins */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Victory Chronicles</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Recent <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Milestones.</span></h2>
             <p className="text-black">Recognizing the exceptional achievements of our students in inter-school and national competitions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {wins.map((card, i) => (
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

      {/* Clubs & Societies Grid */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Engaged Learning</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">The Club <span className="text-secondary not-italic">Culture.</span></h2>
                 <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                   Student-led and faculty-mentored, our clubs provide a platform for experimentation and leadership. From the stage to the laboratory, KPSians are always creating.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    {clubs.map((club, i) => (
                      <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white transition-all duration-500 cursor-default">
                         <club.icon size={20} className="text-secondary" />
                         <span className="font-bold text-xs uppercase tracking-widest group-hover:text-primary transition-colors">{club.name}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-white p-12 text-primary">
                    <Quote className="text-secondary mb-8" size={64} strokeWidth={1} />
                    <p className="text-2xl font-serif italic text-primary leading-relaxed mb-10">
                      "Being part of the Robotics Guild changed how I look at problems. It's not just about building a machine; it's about engineering a solution for the future."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-primary font-black">NK</div>
                       <div>
                          <h5 className="font-bold text-primary italic">Naveen Kumar</h5>
                          <p className="text-[10px] font-black uppercase text-black tracking-widest">Club President, Grade 12</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Artistic Spotlight Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Spotlight</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Drama & <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Performing Arts.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Our school play is the highlight of the social calendar. We integrate theater into our curriculum to boost confidence, empathy, and public speaking skills across all age groups.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Theater className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">The KPS Auditoria</h4>
                          <p className="text-black group-hover:text-white/60 text-xs">State-of-the-art staging and acoustic facilities.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Globe className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">Global Festivals</h4>
                          <p className="text-black group-hover:text-white/60 text-xs">Participation in international youth theater summits.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary aspect-[4/5]">
                    <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student Theater" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Find your passion <br /> and <span className="text-secondary not-italic underline decoration-2 underline-offset-8">let it shine.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <Link to="/media/gallery" className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                 View Achievement Gallery
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default CoCurricular;
