
import React, { useEffect } from 'react';
import { 
  Package, BookOpen, Laptop, Dumbbell, 
  CheckCircle2, Info, ShoppingCart, Calendar, 
  ArrowRight, ShieldCheck, Sparkles, PencilRuler 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Kit: React.FC = () => {
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

  const kitCategories = [
    {
      title: "Academic Kit",
      desc: "Comprehensive set of NCERT textbooks, KPS custom notebooks, and specialized graph/map journals.",
      items: [
        "Full set of Grade-specific Textbooks.",
        "KPS Branded Hardbound Notebooks.",
        "Art & Sketch Journals (Grade 1-8).",
        "Laboratory Record Books (Grade 9-12)."
      ],
      icon: BookOpen,
      accent: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Tech & Digital Kit",
      desc: "The digital spine for the KPS learner, providing access to our high-tech academic ecosystem.",
      items: [
        "Personal Learning Device (iPad/Laptop).",
        "KPS LMS Access Credentials.",
        "Licensed Digital Content Library.",
        "Educational Software Bundle."
      ],
      icon: Laptop,
      accent: "text-secondary",
      bg: "bg-secondary/5"
    },
    {
      title: "Activity & Prep Kit",
      desc: "Tools for physical vitality, artistic expression, and scientific exploration.",
      items: [
        "Professional Grade Lab Coat & Specs.",
        "House-specific Sports Equipment.",
        "Personal Art Tool-kit.",
        "Mathematical Geometry Ensemble."
      ],
      icon: PencilRuler,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="School Supplies and Kits" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Equipped for Excellence</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            The KPS <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Kit.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200">
            Every tool required to transform potential into performance. Explore the comprehensive KPS student kit.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The KPS Bundle</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">All-in-One <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Readiness.</span></h2>
              <p className="text-black text-lg mb-8 leading-relaxed font-medium">
                To ensure a seamless start to the academic year, KPS provides a standardized 'Student Kit'. This bundle ensures that every child has access to high-quality, eco-friendly materials that align perfectly with our pedagogical needs.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 font-bold text-primary">
                   <ShieldCheck className="text-secondary" size={20} /> Standardized Quality across all grades.
                 </div>
                 <div className="flex items-center gap-3 font-bold text-primary">
                   <ShieldCheck className="text-secondary" size={20} /> Sustainable and Non-toxic materials.
                 </div>
                 <div className="flex items-center gap-3 font-bold text-primary">
                   <ShieldCheck className="text-secondary" size={20} /> Campus-integrated Tech ecosystem.
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
              <div className="relative p-8">
                 <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-2"></div>
                 <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student Kit Bag" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kit Categories Breakdown */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Kit Components</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight italic">Standard <span className="text-secondary not-italic">Equipage.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {kitCategories.map((kit, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-white p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-start">
                  <div className={`w-16 h-16 rounded-2xl ${kit.bg} ${kit.accent} flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <kit.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4 italic">{kit.title}</h3>
                  <p className="text-black text-sm leading-relaxed mb-10">{kit.desc}</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {kit.items.map((item, idx) => (
                      <li key={idx} className="flex gap-4 group/item">
                        <CheckCircle2 className="text-secondary shrink-0 group-hover/item:scale-110 transition-transform" size={18} />
                        <p className="text-black text-[13px] leading-relaxed font-bold">{item}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="w-full pt-8 border-t border-gray-200">
                    <p className="text-[9px] font-black uppercase tracking-widest text-black">Included in Annual Resource Fee</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Kit Detail (Callout) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Digital Backbone</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic">The Smart <span className="text-secondary not-italic">Device Policy.</span></h2>
              <p className="text-white text-lg mb-10 leading-relaxed font-medium">
                KPS is a 'Blended Learning' campus. Students from Grade 5 and above are issued a high-performance personal learning device pre-loaded with our Learning Management System (LMS) and filtered internet security.
              </p>
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <Sparkles className="text-secondary" size={32} strokeWidth={1.5} />
                  <h4 className="text-xl font-bold italic text-white">Cloud Integrated</h4>
                </div>
                <p className="text-white text-sm leading-relaxed italic">
                  "All assignments, assessments, and reference materials are synced in real-time. Students can learn from anywhere, ensuring continuity of education even outside campus hours."
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
              <div className="relative p-10 bg-white rounded-[4rem] text-primary shadow-2xl">
                 <Laptop className="text-secondary mb-8" size={64} strokeWidth={1.5} />
                 <h3 className="text-3xl font-serif font-bold mb-6 italic">Device Specifications</h3>
                 <div className="space-y-4 mb-10">
                   {[
                     "iPad Air / Microsoft Surface (Grade dependent).",
                     "Protective Rugged Case with School Logo.",
                     "KPS Custom Digital Stylus.",
                     "Canvas Carrying Sleeve."
                   ].map((spec, i) => (
                     <div key={i} className="flex items-center gap-3 font-bold text-sm">
                       <CheckCircle2 className="text-secondary" size={16} /> {spec}
                     </div>
                   ))}
                 </div>
                 <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary">Insurance & Security</p>
                    <p className="text-sm font-bold mt-2">Fully insured with school-monitored parental controls.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procurement / Collection Schedule */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="bg-gray-50 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-1/2">
                 <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student Resource Center" />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Collection Points</h4>
                 <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-tight">Procurement & <span className="text-secondary">Pickup.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed">
                   The Student Kit is distributed at the 'Resource Center' within the campus. Parents are requested to follow the time-slots assigned for their child's grade level.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-secondary transition-colors">
                       <Calendar className="text-secondary shrink-0" size={28} />
                       <div>
                          <h4 className="font-bold text-primary mb-1">Kit Distribution Week</h4>
                          <p className="text-black text-sm italic">May 15th – May 22nd (Pre-session week)</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-secondary transition-colors">
                       <ShoppingCart className="text-secondary shrink-0" size={28} />
                       <div>
                          <h4 className="font-bold text-primary mb-1">Top-up Resources</h4>
                          <p className="text-black text-sm italic">Available throughout the year at the School Tuck Shop.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Info className="text-secondary mb-8" size={64} strokeWidth={1.5} />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-10 italic">Important <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Notices.</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left w-full">
                 <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-lg font-bold text-primary mb-4">Labeling Policy</h4>
                    <p className="text-black text-sm leading-relaxed">To avoid loss or mixing, all items (including devices and track-suits) must be clearly labeled with the student's name and roll number using the provided permanent markers.</p>
                 </div>
                 <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                    <h4 className="text-lg font-bold text-primary mb-4">Sustainability</h4>
                    <p className="text-black text-sm leading-relaxed">KPS promotes zero-plastic campus. We encourage parents to reuse kit bags and stationary containers from previous years where possible.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Invite */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Prepared for the journey of <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">lifelong discovery.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/school/uniform" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 View School Uniform
              </Link>
              <Link to="/admissions/process" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Join the KPS Family
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Kit;
