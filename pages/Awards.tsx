
import React, { useEffect } from 'react';
import { 
  Trophy, Medal, Award, Star, 
  ShieldCheck, Globe, Zap, ArrowRight, 
  ChevronRight, Landmark, Quote, Sparkles,
  ExternalLink, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Awards: React.FC = () => {
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

  const awards = [
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
  ];

  const milestones = [
    { year: "2024", event: "National Level Robotics Champions - Inter-School STEM Meet." },
    { year: "2023", event: "Ranked in Top 5 for 100% Board Result Streak (10 Consecutive Years)." },
    { year: "2022", event: "Swachh Vidyalaya Puraskar (State Level) for Sanitation & Hygiene." },
    { year: "2021", event: "Outstanding Contribution to Community Outreach during the Pandemic." },
    { year: "2020", event: "Best Sports Infrastructure Award by the Directorate of PE." }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578948856697-db91d2366503?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Trophies and Awards" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Institutional Honors</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Awards & <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Honors.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            A testament to our unwavering commitment to excellence, integrity, and the pursuit of academic mastery.
          </p>
        </div>
      </section>

      {/* Featured Institutional Awards */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Recognized Quality</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">National <span className="italic">Benchmarks.</span></h2>
            <p className="text-black">KPS is consistently evaluated and ranked by premier educational bodies for its pedagogy, leadership, and infrastructure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, i) => (
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

      {/* The Timeline Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
             <div className="lg:w-1/2 reveal">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Triumph Trail</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic">Our Decade of <br /><span className="text-secondary not-italic">Distinction.</span></h2>
                <div className="space-y-12 relative">
                   <div className="absolute left-6 top-0 w-px h-full bg-white/10"></div>
                   {milestones.map((item, i) => (
                     <div key={i} className="flex gap-10 group relative">
                        <div className="w-12 h-12 rounded-full bg-secondary border-4 border-primary flex items-center justify-center text-primary font-black text-xs z-10 group-hover:scale-110 transition-transform">
                           {item.year.slice(2)}
                        </div>
                        <div className="flex-1 pt-2">
                           <h4 className="text-lg font-bold text-white/90 mb-1 group-hover:text-secondary transition-colors">{item.year}</h4>
                           <p className="text-white/40 text-sm leading-relaxed">{item.event}</p>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
             <div className="lg:w-1/2 reveal delay-400">
                <div className="relative p-12 bg-white rounded-[4rem] text-primary shadow-2xl overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-x-12 -translate-y-12"></div>
                   <Medal className="text-secondary mb-8 group-hover:rotate-12 transition-transform" size={64} strokeWidth={1.5} />
                   <h3 className="text-3xl font-serif font-bold mb-6 italic text-primary">Board Excellence Medal</h3>
                   <p className="text-black text-lg leading-relaxed mb-10">
                     Awarded by the <strong>Board of Secondary Education</strong> for maintaining a 100% first-class record for over a decade.
                   </p>
                   <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/10">
                      <Star className="text-secondary fill-secondary" size={24} />
                      <p className="text-xs font-black uppercase tracking-widest text-primary">Institutional Pride Factor: 10/10</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Accreditations and Certifications */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Quality Assurance</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Certified Excellence.</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { name: "CBSE Affiliated", desc: "Since 1998", icon: ShieldCheck },
               { name: "ISO 9001:2015", desc: "Quality Systems", icon: Landmark },
               { name: "NCERT Framework", desc: "Pedagogical Standard", icon: Sparkles },
               { name: "Eco-Friendly", desc: "IGBC Platinum", icon: Globe }
             ].map((cert, i) => (
               <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="bg-white p-10 rounded-[3rem] border border-gray-100 text-center hover:shadow-xl transition-all duration-500">
                     <cert.icon className="text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform" size={40} />
                     <h4 className="text-lg font-bold text-primary mb-1">{cert.name}</h4>
                     <p className="text-[10px] font-black uppercase tracking-widest text-black">{cert.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Personal Laurels Spotlight */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-gray-50 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-20 reveal">
              <div className="lg:w-2/3">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Student Spotlight</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Bringing Honor <br /> to the <span className="text-secondary">Crest.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed">
                   While we celebrate institutional awards, our true pride lies in the individual triumphs of our students. From winning the <strong>National Spelling Bee</strong> to securing <strong>Full-Bright Scholarships</strong>, KPSians are making their mark on every stage.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/achievements/results" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center group">
                       Academic Results <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                    </Link>
                    <Link to="/media/gallery" className="bg-white border-2 border-primary text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                       Victory Gallery
                    </Link>
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student with Trophy" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Invest in an education <br /> that <span className="text-secondary not-italic underline decoration-2 underline-offset-8">wins.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <button className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-3">
                 <Download size={16} /> Achievement Report 2024
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Awards;
