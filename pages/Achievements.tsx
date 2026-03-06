
import React, { useEffect } from 'react';
import { 
  Trophy, Medal, Star, Target, Zap, 
  ArrowRight, ChevronRight, Award, 
  GraduationCap, Music, Dumbbell, Globe,
  ShieldCheck, Quote, Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Achievements: React.FC = () => {
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

  const achievementHubs = [
    {
      title: "Awards & Honors",
      path: "/achievements/awards",
      desc: "Institutional recognitions and prestigious awards conferred upon KPS over the years.",
      icon: Trophy,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Academic Results",
      path: "/achievements/results",
      desc: "Comprehensive breakdown of Board results and competitive exam performance.",
      icon: GraduationCap,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Co-curricular Wins",
      path: "/achievements/co-curricular",
      desc: "Successes in performing arts, debating, robotics, and creative disciplines.",
      icon: Music,
      accent: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Sports Excellence",
      path: "/achievements/sports",
      desc: "Our championship legacy on the field across multiple athletic categories.",
      icon: Dumbbell,
      accent: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  const highlights = [
    { label: "State Championships", val: "15+", icon: Medal },
    { label: "National Awards", val: "08", icon: Award },
    { label: "Perfect 100s", val: "50+", icon: Star },
    { label: "Global Mentions", val: "12", icon: Globe },
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578948856697-db91d2366503?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Awards and Trophies" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">A Legacy of Triumph</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Pride of <span className="text-secondary not-italic underline decoration-4 underline-offset-8">KPS.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Celebrating the grit, talent, and unwavering pursuit of excellence that defines our student body and institution.
          </p>
        </div>
      </section>

      {/* The Pursuit of Excellence */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Standard</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Winning is a <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Habit.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, excellence is not a destination but a continuous journey. Our students are encouraged to push boundaries, embrace challenges, and redefine what is possible in every field they choose.
                </p>
                <p>
                  From state-level athletic podiums to national academic distinctions, the 'KPS Badge' has become synonymous with quality and determination. We provide the platform; our students provide the passion.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-10">
                 <div>
                    <span className="text-4xl font-black text-primary italic">#1</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Ranked Academic Wing</p>
                 </div>
                 <div className="w-px h-12 bg-gray-100"></div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">500+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Annual Trophies</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://images.unsplash.com/photo-1544922650-1499b8443316?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Successful Students" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <Trophy className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"Character is the foundation upon which all trophies are built."</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Recognition</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Awards & Accolades</h2>
             <p className="text-xl text-black/70 font-medium">Honoring our commitment to excellence in education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "India School Merit Award",
                org: "Education Today",
                year: "2023",
                desc: "Ranked No.1 in Co-Curricular Education among India’s Top CBSE Schools. This recognition highlights Karnataka Public School’s strong focus on holistic development through sports, arts, and extracurricular programs.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616851/IMG_9744_ivqkmh.jpg",
                bg: "bg-orange-50"
              },
              {
                title: "India School Merit Award",
                org: "Holistic Education",
                year: "2023",
                desc: "Recognized among India’s Top CBSE Schools for excellence in holistic education, emphasizing balanced growth through academics, creativity, and life-skills development.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616851/IMG_9746_xpniah.jpg",
                bg: "bg-blue-50"
              },
              {
                title: "Best Innovative Curriculum Practices",
                org: "MEGA",
                year: "2022",
                desc: "Awarded by Manipal Educational Global Alliance (MEGA) for implementing innovative teaching methods and modern curriculum strategies that enhance student engagement and practical learning.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616852/IMG_9749_zxmjth.jpg",
                bg: "bg-green-50"
              },
              {
                title: "ITC WOW Green Award",
                org: "ITC",
                year: "2025",
                desc: "Received the Appreciation Award for outstanding commitment to sustainability, promoting eco-friendly initiatives, recycling programs, and environmental awareness within the school community.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616852/IMG_9750_orgg6p.jpg",
                bg: "bg-yellow-50"
              },
              {
                title: "Inter-School Sports Competition",
                org: "Throwball (Girls)",
                year: "2025",
                desc: "The girls’ throwball team secured Runner-Up position, demonstrating strong teamwork, dedication, and sporting excellence.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616853/IMG_9751_ds06j9.jpg",
                bg: "bg-red-50"
              },
              {
                title: "Smash League Championship",
                org: "Winners",
                year: "2025",
                desc: "Karnataka Public School achieved First Place in the Smash League Championship, reflecting the school’s active participation and success in competitive sports.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616851/IMG_9753_npkxir.jpg",
                bg: "bg-purple-50"
              },
              {
                title: "Certificate of Achievement",
                org: "MEGA",
                year: "2022",
                desc: "Recognized by Manipal Educational Global Alliance for excellence in curriculum innovation and leadership in modern K-12 education practices.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616852/IMG_9755_tyfjqs.jpg",
                bg: "bg-indigo-50"
              },
              {
                title: "India’s Most Prominent Education Award",
                org: "Merit Awards & Market Research",
                year: "2017",
                desc: "Awarded as the Best CBSE School in Bangalore by Merit Awards & Market Research, acknowledging the institution’s outstanding academic performance and quality education.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616855/IMG_9756_e5vbyi.jpg",
                bg: "bg-pink-50"
              },
              {
                title: "Oxford Advantage Programme",
                org: "Oxford University Press",
                year: "2024",
                desc: "Karnataka Public School partnered with Oxford University Press to adopt the Oxford Advantage Programme, enhancing teaching quality with global educational resources.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616854/IMG_9758_wajy0u.jpg",
                bg: "bg-teal-50"
              },
              {
                title: "India’s Activities Excellence Award",
                org: "Education Today",
                year: "2025",
                desc: "Honored for excellence in extracurricular programs that support creativity, leadership, cultural activities, and student talent development.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616856/IMG_9760_dzx3c9.jpg",
                bg: "bg-cyan-50"
              },
              {
                title: "India K-12 Awards",
                org: "Bengaluru",
                year: "2025",
                desc: "Recognized for Excellence in Sustainable and Holistic Growth Programs, highlighting the school’s balanced approach to academics, innovation, and student well-being.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616856/IMG_9761_kkvbwn.jpg",
                bg: "bg-emerald-50"
              },
              {
                title: "Certificate of Achievement",
                org: "Education Today",
                year: "2023",
                desc: "Ranked among India’s Top CBSE Schools – Parameter Wise, achieving No.1 position in Co-Curricular Education.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616889/IMG_9763_lafit2.jpg",
                bg: "bg-rose-50"
              },
              {
                title: "Inter-School Throwball Championship",
                org: "Winners",
                year: "2025",
                desc: "The girls’ throwball team secured First Place, showcasing the school’s commitment to sports excellence and student achievement.",
                image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772617100/IMG_9764_k1la2t.jpg",
                bg: "bg-amber-50"
              }
            ].map((award, i) => (
              <div key={i} className="reveal group bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center">
                 <div className="w-full h-56 mb-6 relative rounded-2xl overflow-hidden shadow-sm">
                    <img src={award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <div className="mb-4 flex items-center justify-center gap-2">
                    <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">{award.year}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-secondary">{award.org}</span>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{award.title}</h3>
                 <p className="text-black/70 text-sm leading-relaxed">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Hub Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Milestone Directory</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Hall of <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Fame.</span></h2>
             <p className="text-black">Explore our diverse portfolio of accomplishments across academic, athletic, and cultural spheres.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievementHubs.map((card, i) => (
              <Link to={card.path} key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.accent} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                      <card.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h3>
                   <p className="text-black text-sm leading-relaxed mb-10 flex-grow">{card.desc}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:text-primary transition-colors">
                     Explore Milestones <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {highlights.map((stat, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 group-hover:bg-secondary transition-all">
                  <stat.icon size={32} className="text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2">{stat.val}</h3>
                <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Accomplishment Spotlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Spotlight</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Board Result <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Excellence.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   For the 10th consecutive year, Karnataka Public School has achieved a 100% pass percentage in CBSE Class 12 Boards, with over 65% of our students scoring above 90%.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <GraduationCap className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">100% Distinction</h4>
                          <p className="text-black group-hover:text-white/60 text-xs">A streak maintained through rigorous academic mentorship.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:bg-primary transition-all duration-500">
                       <Target className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-white transition-colors italic">Global Placements</h4>
                          <p className="text-black group-hover:text-white/60 text-xs">Our graduates are currently studying in Ivy League and IITs.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Graduation Day" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Cultural & Arts Recognition */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-primary rounded-[4rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden text-white flex flex-col lg:flex-row items-center gap-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Creative Laurels</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">The KPS <br /><span className="text-secondary not-italic">Stage.</span></h2>
                 <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                   Our students don't just excel in textbooks; they dominate the stage. From the National Debating Union to International Art Biennales, KPS talent is recognized globally.
                 </p>
                 <div className="flex items-center gap-6">
                    <div className="flex items-center space-x-3 text-secondary">
                       <Sparkles size={24} />
                       <span className="font-bold text-sm tracking-widest uppercase text-white">Innovation First</span>
                    </div>
                    <div className="flex items-center space-x-3 text-secondary">
                       <Globe size={24} />
                       <span className="font-bold text-sm tracking-widest uppercase text-white">Global Reach</span>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src="https://images.unsplash.com/photo-1514525253361-bee1455d082c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Cultural Success" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Be part of our <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">unfolding legacy.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <Link to="/media/gallery" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 View Recent Victories
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Achievements;
