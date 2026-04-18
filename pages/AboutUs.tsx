
import React, { useEffect } from 'react';
import { 
  Shield, Target, Lightbulb, Globe, Award, 
  Users, BookOpen, Heart, ArrowRight, 
  Sparkles, GraduationCap, Quote, Compass,
  ChevronRight, Landmark, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
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

  const stats = [
    { label: 'Years of Excellence', value: '20+', icon: Award },
    { label: 'Successful Alumni', value: '10,000+', icon: Users },
    { label: 'Expert Educators', value: '150+', icon: BookOpen },
    { label: 'Acre Green Estate', value: '2+', icon: Landmark },
  ];

  const values = [
    { title: 'Integrity', desc: 'Acting with honesty and strong moral principles in everything we do.', icon: Shield, color: '#1a237e', bg: 'bg-blue-50' },
    { title: 'Excellence', desc: 'Striving for the highest standards in academics, sports, and character.', icon: Target, color: '#6a0030', bg: 'bg-red-50' },
    { title: 'Innovation', desc: 'Embracing new ideas and technologies to enhance the learning experience.', icon: Lightbulb, color: '#bf360c', bg: 'bg-orange-50' },
    { title: 'Global Vision', desc: 'Preparing students to be responsible and contributing global citizens.', icon: Globe, color: '#1b5e20', bg: 'bg-green-50' },
  ];

  const explorationCards = [
    { title: "Philosophy", path: "/about/philosophy", icon: Sparkles, desc: "Our core beliefs and the 'KPS Way' of nurturing young minds." },
    { title: "Vision & Mission", path: "/about/vision-mission", icon: Compass, desc: "Defining our horizons and the strategic roadmap to reach them." },
    { title: "Our Faculty", path: "/about/faculty", icon: GraduationCap, desc: "Meet the world-class mentors who guide our students daily." },
    { title: "Management", path: "/about/management", icon: Users, desc: "The visionary leadership driving KPS towards global benchmarks." }
  ];

  return (
    <main className="bg-white">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789509/SLA_8998_yygnwc.jpg" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="School Hero" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Our Story</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Defining <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Excellence.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Karnataka Public School is a progressive, student centered institution committed to delivering high quality education rooted in strong values, academic excellence, and holistic development.
          </p>
        </div>
      </section>

      {/* The Legacy Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Who We Are</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Rooted in <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Excellence.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  Established in 2005, Karnataka Public School is a progressive institution committed to academic excellence and holistic development. Nestled on a spacious 2-acre campus, we provide a nurturing environment where every learner is encouraged to explore, discover, and grow.
                </p>
                <p>
                  Beyond textbooks, we integrate academics with co-curricular activities, sports, and values education to shape responsible future citizens. Our CBSE-aligned curriculum emphasizes experiential learning and critical thinking, ensuring students are equipped not just for exams, but for life.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-10">
                 <div>
                    <span className="text-4xl font-black text-primary italic">20+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Years of Impact</p>
                 </div>
                 <div className="w-px h-12 bg-gray-100"></div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">CBSE</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Top Ranked School</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
              <div className="relative p-8">
                 <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                 <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                    <img src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9552_pjx5ir.jpg" className="w-full h-full object-cover" alt="Main Building Legacy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                       <Quote className="text-secondary mb-4" size={40} fill="currentColor" />
                       <p className="text-xl font-serif italic max-w-sm">"We don't just teach for the tests; we teach for the decades ahead."</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
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

      {/* Explore Section Hub */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Deep Dive</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Know Us <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Better.</span></h2>
             <p className="text-black">Explore the different dimensions of our institution, from our core ethos to the leaders who shape it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {explorationCards.map((card, i) => (
              <Link to={card.path} key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                      <card.icon size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-4">{card.title}</h3>
                   <p className="text-black text-xs leading-relaxed mb-10 flex-grow">{card.desc}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2">
                     Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Values</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">The KPS <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Compass.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-gray-50 rounded-[3rem] p-12 h-full flex flex-col items-center text-center border border-gray-100 hover:shadow-2xl transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl ${value.bg} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                    <value.icon size={32} style={{ color: value.color }} className="group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-4">{value.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <Zap className="text-secondary mx-auto mb-8 animate-pulse" size={64} fill="currentColor" />
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Be part of our <span className="text-secondary not-italic underline decoration-2 underline-offset-8">continuing legacy.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Admissions 2026-27
              </Link>
              <Link to="/about/why-kps" className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                 Why KPS?
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
