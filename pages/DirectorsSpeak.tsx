
import React, { useEffect } from 'react';
import { Quote, Award, BookOpen, Star, Linkedin, Mail, ShieldCheck, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DirectorsSpeak: React.FC = () => {
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

  const boardMembers = [
    { name: "Prof. Basavaraj Ramanal", role: "Chairman", image: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772447924/download_1_hopo91_wo2r1d.png" },
    { name: "Smt. Suvarna Basavaraj Ramnal", role: "Chairperson", image: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772447924/download_3_gzxfum_abause.png" },
    { name: "Mr. Pradeep Ramnal", role: "COO", image: "https://res.cloudinary.com/dwoh8qevy/image/upload/v1772447924/download_2_cbxmzc_r1837m.png" }
  ];

  return (
    <main className="bg-white">
      {/* Premium Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Management Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Our Stewardship</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-4 reveal delay-100">Director's <span className="text-secondary italic">Speak.</span></h1>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full reveal delay-200"></div>
        </div>
      </section>

      {/* Chairman's Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-2/5 reveal">
              <div className="relative p-4">
                <div className="absolute inset-0 border-[12px] border-secondary/10 rounded-[3rem] -rotate-3 translate-x-4"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(106,0,48,0.3)] group">
                      <img 
                        src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772447924/download_1_hopo91_wo2r1d.png" 
                        className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" 
                        alt="Chairman" 
                      />
                      <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-primary via-primary/40 to-transparent text-white">
                         <h3 className="text-3xl font-serif font-bold">Prof. Basavaraj Ramanal</h3>
                         <p className="text-secondary font-black uppercase text-[10px] tracking-widest mt-2">Chairman</p>
                      </div>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 reveal delay-200">
              <Quote className="text-secondary/20 mb-8" size={64} />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Message from the <br /> Chairman.</h2>
              <div className="space-y-6 text-black text-lg leading-relaxed mb-10">
                <p>
                  "It gives me immense pride and joy to welcome you to Karnataka Public School, an institution built on the foundation of quality education, strong values, and a commitment to holistic development. Our journey has always been guided by the belief that education is not merely about academic achievement, but about shaping responsible, thoughtful, and confident individuals who contribute meaningfully to society."
                </p>
                <p>
                  At Karnataka Public School, we strive to create an environment where every child feels inspired to explore, learn, and grow. Our dedicated team of educators works tirelessly to ensure that students receive a balanced education—one that sharpens their intellect, nurtures their talents, strengthens character, and prepares them for the challenges of the future.
                </p>
                <p>
                  We take pride in offering modern infrastructure, activity rich classrooms, and a curriculum aligned with CBSE standards. But more importantly, we take pride in the culture of care, respect, and collaboration that defines our school community.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                 <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1 min-w-[200px]">
                    <Award className="text-secondary" size={32} />
                    <div>
                       <h5 className="font-black text-primary text-sm uppercase">25 Years</h5>
                       <p className="text-xs text-black">Educational Legacy</p>
                    </div>
                 </div>
                 <div className="flex items-center space-x-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex-1 min-w-[200px]">
                    <TrendingUp className="text-secondary" size={32} />
                    <div>
                       <h5 className="font-black text-primary text-sm uppercase">Innovation</h5>
                       <p className="text-xs text-black">Forward-Looking Strategy</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairperson's Message */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-2/5 reveal">
               <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                  <img 
                    src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772447924/download_3_gzxfum_abause.png" 
                    className="rounded-[3rem] shadow-2xl relative z-10 w-full aspect-[3/4] object-cover" 
                    alt="Chairperson" 
                  />
                  <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 border border-gray-100">
                     <h3 className="text-2xl font-serif font-bold text-primary">Smt. Suvarna Basavaraj Ramnal</h3>
                     <p className="text-secondary font-black uppercase text-[10px] tracking-widest mt-1">Chairperson</p>
                  </div>
               </div>
            </div>
            <div className="lg:w-3/5 reveal delay-200">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Chairperson</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Empowering the <br />Individual Child.</h2>
              <div className="space-y-6 text-black text-lg leading-relaxed mb-10 italic">
                <p>
                  "Our academic blueprint is built on the foundation of personalized learning. We don't believe in a one-size-fits-all approach. Every student who walks through our gates brings a unique perspective and talent that we are honored to nurture."
                </p>
                <p>
                  From state-of-the-art labs to a vibrant sports culture, we ensure that KPS is a place where academic rigor meets holistic development. My door is always open to parents and students as we collaborate on this beautiful journey of education.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center space-x-3">
                    <ShieldCheck className="text-secondary" size={20} />
                    <span className="font-bold text-xs uppercase tracking-widest text-primary">Safety First</span>
                 </div>
                 <div className="flex items-center space-x-3">
                    <BookOpen className="text-secondary" size={20} />
                    <span className="font-bold text-xs uppercase tracking-widest text-primary">Inquiry-Based</span>
                 </div>
                 <div className="flex items-center space-x-3">
                    <Users className="text-secondary" size={20} />
                    <span className="font-bold text-xs uppercase tracking-widest text-primary">Community Focus</span>
                 </div>
                 <div className="flex items-center space-x-3">
                    <Star className="text-secondary" size={20} />
                    <span className="font-bold text-xs uppercase tracking-widest text-primary">Global Standards</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Governing Council */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Board of Directors</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">The Collective Wisdom</h2>
            <p className="text-black">Guiding KPS with strategic foresight and an unwavering commitment to educational excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {boardMembers.map((member, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-square shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                   <img src={member.image} className="w-full h-full object-cover transition-all duration-700" alt={member.name} />
                   <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-secondary transition-colors">{member.name}</h3>
                <p className="text-secondary font-black uppercase text-[10px] tracking-widest mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Banner */}
      <section className="py-24 bg-primary relative overflow-hidden text-white text-center">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10 reveal">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12">"Leadership is not a position or a title, <br /> it is action and example."</h2>
            <div className="flex flex-wrap justify-center gap-12">
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20"><ShieldCheck size={32} className="text-secondary" /></div>
                  <span className="font-black uppercase tracking-widest text-[10px]">Transparency</span>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20"><Users size={32} className="text-secondary" /></div>
                  <span className="font-black uppercase tracking-widest text-[10px]">Collaboration</span>
               </div>
               <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/20"><TrendingUp size={32} className="text-secondary" /></div>
                  <span className="font-black uppercase tracking-widest text-[10px]">Sustainability</span>
               </div>
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-secondary p-1 rounded-[4rem] shadow-2xl reveal">
             <div className="bg-white rounded-[3.8rem] py-16 px-10">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Partner with Us in Your <br /> Child's Success.</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                   <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                      Start Admission
                   </Link>
                   <Link to="/media/gallery" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
                      Virtual Gallery
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DirectorsSpeak;
