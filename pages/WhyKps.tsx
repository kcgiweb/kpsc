
import React, { useEffect } from 'react';
import { ShieldCheck, Target, Zap, Globe, Heart, Award, CheckCircle, ArrowRight, Quote, Sparkles, Trophy, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyKps: React.FC = () => {
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

  const advantages = [
    {
      title: "Student Centric Learning",
      desc: "Engaging, activity based teaching that encourages creativity and critical thinking.",
      icon: CheckCircle,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Qualified & Dedicated Staff",
      desc: "Experienced educators who guide and mentor every student with care.",
      icon: Award,
      color: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Holistic Development",
      desc: "Focus on academics, sports, arts, and life skills for well rounded growth.",
      icon: Heart,
      color: "text-red-600",
      bg: "bg-red-50"
    },
    {
      title: "Safe & Inclusive Environment",
      desc: "A welcoming campus that prioritizes children's safety, well being, and equal opportunity.",
      icon: ShieldCheck,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Modern Infrastructure",
      desc: "Smart classrooms, labs, libraries, and sports facilities to support modern learning.",
      icon: Zap,
      color: "text-secondary",
      bg: "bg-secondary/5"
    },
    {
      title: "Values Based Education",
      desc: "Strong emphasis on character, ethics, and social responsibility.",
      icon: Target,
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <main className="bg-white">
      {/* High-Impact Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Students in KPS" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6">The Decisive Factor</h4>
            <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-8 leading-tight italic">
              Why <span className="text-secondary not-italic underline decoration-2 underline-offset-8">KPS?</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              Because education is not about filling a bucket, but lighting a fire. Discover the distinction that makes us unique.
            </p>
          </div>
        </div>
      </section>

      {/* The Pillars of Choice */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 reveal">
             <div className="max-w-xl">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Core Distinctions</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">Setting New <br />Benchmarks.</h2>
             </div>
             <p className="text-black max-w-sm text-sm lg:mb-2">We have redefined the schooling experience by focusing on impact over input.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(106,0,48,0.1)] hover:-translate-y-4 transition-all duration-500 h-full flex flex-col items-start relative overflow-hidden">
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-gray-50 rounded-full group-hover:scale-[3] transition-transform duration-700 pointer-events-none"></div>
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-primary mb-4 relative z-10">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The KPS Difference (Contrast Section) */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Comparison</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight">The KPS Path vs. <br />The Standard.</h2>
                 <div className="space-y-8">
                    {[
                      { label: "Learning Style", std: "Rote memorization", kps: "Inquiry-based application" },
                      { label: "Faculty", std: "Standard certification", kps: "Global mentors & Ph.D. scholars" },
                      { label: "Assessment", std: "High-stakes testing", kps: "Portfolio-based growth monitoring" },
                      { label: "Focus", std: "Purely academics", kps: "Holistic life-design mindset" }
                    ].map((row, i) => (
                      <div key={i} className="group">
                         <div className="flex items-center justify-between mb-4">
                            <h4 className="text-secondary font-black uppercase text-[10px] tracking-widest">{row.label}</h4>
                         </div>
                         <div className="flex items-center gap-8">
                            <div className="flex-1 text-white/40 text-xs italic">Traditional: {row.std}</div>
                            <div className="flex-1 text-white font-bold text-sm flex items-center gap-2">
                               <CheckCircle size={14} className="text-secondary" /> {row.kps}
                            </div>
                         </div>
                         <div className="w-full h-px bg-white/10 mt-6"></div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative p-8">
                    <div className="absolute inset-0 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-sm -rotate-2"></div>
                    <div className="relative p-12 text-center">
                       <Trophy className="text-secondary mx-auto mb-8" size={64} strokeWidth={1.5} />
                       <h3 className="text-3xl font-serif font-bold mb-6 italic">A Legacy of <span className="text-secondary not-italic">Firsts.</span></h3>
                       <p className="text-white/60 text-sm leading-relaxed mb-8">
                          First school in Bangalore to implement AI-driven personalized learning paths and full renewable energy integration.
                       </p>
                       <div className="flex justify-center gap-10">
                          <div>
                             <p className="text-2xl font-black text-white">#1</p>
                             <p className="text-[9px] font-black uppercase tracking-widest text-secondary">Academic Rank</p>
                          </div>
                          <div className="w-px h-10 bg-white/10"></div>
                          <div>
                             <p className="text-2xl font-black text-white">100%</p>
                             <p className="text-[9px] font-black uppercase tracking-widest text-secondary">Safety Rating</p>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
           <div className="max-w-5xl mx-auto bg-gray-50 rounded-[4rem] p-12 lg:p-24 text-center reveal">
              <Quote className="text-secondary mx-auto mb-10" size={48} />
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary italic leading-relaxed mb-12">
                "We scouted over 10 schools in North Bangalore, but the moment we saw the balance KPS maintains between high-tech facilities and traditional ethics, our decision was made. Our son isn't just learning Math; he's learning how to be a leader."
              </h2>
              <div className="flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-secondary p-1">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80" className="w-full h-full object-cover rounded-full" alt="Parent" />
                 </div>
                 <h4 className="text-primary font-black text-sm uppercase tracking-widest">Mrs. Shalini Iyer</h4>
                 <p className="text-black font-black text-sm uppercase tracking-widest mt-1">Parent of Grade 9 Student</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic">Ready to make the <span className="text-secondary not-italic underline decoration-2 underline-offset-8">choice?</span></h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
                Join a community that values your child's future as much as you do. Admissions for the Academic Year 2024-25 are closing soon.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <Link to="/admissions/process" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl flex items-center justify-center group">
                    Begin Application <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                 </Link>
                 <Link to="/infrastructure/campus" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all flex items-center justify-center">
                    Explore Campus
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default WhyKps;
