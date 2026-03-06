
import React, { useEffect } from 'react';
import { Sparkles, Brain, Compass, Users, Heart, BookOpen, Quote, Star, Anchor } from 'lucide-react';
import { Link } from 'react-router-dom';

const Philosophy: React.FC = () => {
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

  const beliefs = [
    { 
      title: "Child Centric Learning", 
      desc: "We place students at the heart of the learning process. Our approach encourages curiosity, exploration, and self expression. We believe children learn best when they feel valued, engaged, and supported in discovering knowledge on their own terms.", 
      icon: Users, 
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    { 
      title: "Holistic Development", 
      desc: "Education at our school goes beyond academics. We nurture the intellectual, emotional, social, physical, and creative dimensions of every learner. We aim to build balanced individuals who possess life skills, values, and resilience to thrive in any situation.", 
      icon: Heart, 
      accent: "text-red-500",
      bg: "bg-red-50"
    },
    { 
      title: "Learning Through Experience", 
      desc: "We emphasize experiential, activity based, and project based learning to ensure students understand concepts deeply and apply them in real life contexts. Hands on experiences, inquiry, and reflection form the foundation of our teaching practices.", 
      icon: Sparkles, 
      accent: "text-secondary",
      bg: "bg-secondary/5"
    },
    { 
      title: "Values Driven Education", 
      desc: "Character development is integral to our philosophy. We uphold values such as respect, integrity, empathy, discipline, and responsibility. We believe that education must help children grow into good human beings who contribute positively to society.", 
      icon: Star, 
      accent: "text-purple-500",
      bg: "bg-purple-50"
    },
    { 
      title: "Inclusive & Supportive Environment", 
      desc: "We are committed to providing a safe, inclusive, and nurturing atmosphere where every learner feels accepted and encouraged. Our philosophy embraces diversity and ensures equal opportunities for all students to participate, learn, and succeed.", 
      icon: Users, 
      accent: "text-green-500",
      bg: "bg-green-50"
    },
    { 
      title: "Partnership with Parents", 
      desc: "We view education as a collaborative journey between the school and families. By building strong partnerships with parents, we create a supportive ecosystem that fosters student growth and well being.", 
      icon: Heart, 
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    { 
      title: "Preparing Students for the Future", 
      desc: "Our philosophy aligns with global educational ideals that prioritize critical thinking, communication, creativity, collaboration, and digital literacy. We prepare students to adapt, innovate, and lead in a rapidly changing world.", 
      icon: Compass, 
      accent: "text-indigo-500",
      bg: "bg-indigo-50"
    }
  ];

  return (
    <main className="bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-105 animate-[zoom_20s_infinite_alternate]" 
            alt="Philosophy Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-xs mb-8">Our Soul</h4>
            <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-10 leading-tight">
              Believe. <span className="text-secondary italic">Achieve.</span> <br /> Succeed.
            </h1>
            <div className="max-w-2xl mx-auto">
              <Quote className="text-secondary/40 mx-auto mb-6" size={48} />
              <p className="text-white/90 text-xl md:text-2xl font-serif italic leading-relaxed">
                "The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover."
              </p>
              <p className="text-white/60 text-xs font-black uppercase tracking-widest mt-6">— Jean Piaget</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Core Purpose */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80" 
                  className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 w-full" 
                  alt="Students Learning" 
                />
                <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-[2rem] shadow-2xl z-20 hidden md:block">
                  <Sparkles className="text-secondary mb-3" size={32} />
                  <h5 className="text-white font-black uppercase text-[10px] tracking-widest">Innovation Award</h5>
                  <p className="text-white/70 text-xs mt-1">Leading in Creative Education</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-200">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Our Vision</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">The Art of <br />Learning.</h2>
              <div className="space-y-6">
                <p className="text-black text-lg leading-relaxed">
                  At Karnataka Public School, our educational philosophy is rooted in the belief that every child is unique, capable, and full of potential. We strive to create an environment where learning is joyful, meaningful, and empowering—shaping individuals who are confident, compassionate, and future ready.
                </p>
              </div>
              <div className="mt-12">
                <Link to="/about/vision-mission" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl group">
                  Explore Mission <Compass className="ml-3 group-hover:rotate-45 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Core Beliefs</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Foundations of Success</h2>
            <p className="text-black">Our educational model stands on these pillars that ensure the complete development of our students.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beliefs.map((item, i) => (
              <div key={i} className="reveal card-container" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-4 transition-all duration-500 h-full group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.bg} ${item.accent}`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-black text-primary mb-4 leading-tight">{item.title}</h3>
                  <p className="text-black leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy in Action */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
              <div className="lg:w-2/3 reveal">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Daily Impact</h4>
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Philosophy in <br /> Practice.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="text-secondary" size={20} />
                      <h5 className="font-bold text-lg">Personalized Paths</h5>
                    </div>
                    <p className="text-white/60 text-sm">Every student receives attention that matches their specific learning pace and style.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Star className="text-secondary" size={20} />
                      <h5 className="font-bold text-lg">Value Integration</h5>
                    </div>
                    <p className="text-white/60 text-sm">Ethics and character building are woven into every subject, from Math to Literature.</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 reveal delay-300">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                  <div className="flex flex-col items-center text-center">
                    <Users className="text-secondary mb-6" size={48} />
                    <h4 className="text-2xl font-serif font-bold mb-4">Join Our Community</h4>
                    <p className="text-white/60 text-sm mb-8">Be a part of an institution where your child's philosophy of life begins.</p>
                    <Link to="/admissions/process" className="bg-white text-primary px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-2xl">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 bg-white text-center">
         <div className="container mx-auto px-6 reveal">
            <h2 className="text-3xl md:text-5xl font-serif italic text-primary max-w-4xl mx-auto leading-relaxed">
              "We don't just teach students how to count; we teach them what counts."
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-12 rounded-full"></div>
         </div>
      </section>
    </main>
  );
};

export default Philosophy;
