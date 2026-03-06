
import React, { useEffect } from 'react';
import { 
  Shirt, Shield, CheckCircle2, ShoppingBag, 
  Scissors, Palette, Info, Download, 
  ArrowRight, Sparkles, User, Footprints
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Uniform: React.FC = () => {
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

  const uniforms = [
    {
      title: "Foundational & Primary",
      grades: "Pre-K to Grade 4",
      items: [
        "Light Maroon check shirt with school logo.",
        "Steel grey shorts / pinafore.",
        "Grey socks with maroon bands.",
        "Black velcro shoes (for ease of use)."
      ],
      icon: Shirt,
      accent: "text-primary",
      bg: "bg-primary/5"
    },
    {
      title: "Middle & Senior",
      grades: "Grades 5 to 12",
      items: [
        "Light Maroon check shirt (half/full sleeve).",
        "Steel grey trousers / divided skirts.",
        "School tie and grey blazer (Winter/Events).",
        "Black leather shoes with laces."
      ],
      icon: Shield,
      accent: "text-secondary",
      bg: "bg-secondary/5"
    },
    {
      title: "Physical Education (PE)",
      grades: "All Grades (Wed/Sat)",
      items: [
        "House-specific T-shirt (Breathable fabric).",
        "White track pants with house stripes.",
        "White sports sneakers.",
        "School track jacket for winters."
      ],
      icon: Sparkles,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    }
  ];

  const houses = [
    { name: "Agni", color: "bg-red-600", desc: "House of Fire & Passion" },
    { name: "Prithvi", color: "bg-green-600", desc: "House of Earth & Stability" },
    { name: "Jal", color: "bg-blue-600", desc: "House of Water & Flow" },
    { name: "Vayu", color: "bg-yellow-500", desc: "House of Wind & Agility" }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="School Uniform and Identity" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Unity & Discipline</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            School <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Uniform.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200">
            Our uniform is a badge of pride, representing the equality and collective spirit of the KPS family.
          </p>
        </div>
      </section>

      {/* Uniform Details */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Dress Code</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">Identity in <span className="italic">Every Thread.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {uniforms.map((set, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-start relative overflow-hidden">
                  <div className={`w-16 h-16 rounded-2xl ${set.bg} ${set.accent} flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <set.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2 italic">{set.title}</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-8">{set.grades}</p>
                  
                  <ul className="space-y-4 mb-10 flex-grow">
                    {set.items.map((item, idx) => (
                      <li key={idx} className="flex gap-4 group/item">
                        <CheckCircle2 className="text-secondary shrink-0 group-hover/item:scale-110 transition-transform" size={18} />
                        <p className="text-black text-sm leading-relaxed font-medium">{item}</p>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="w-full pt-8 border-t border-gray-200">
                    <p className="text-[9px] font-black uppercase tracking-widest text-black">Standard fit mandatory</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* House System */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The House System</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Color of <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Camaraderie.</span></h2>
              <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                Students are assigned to one of our four houses, fostering healthy competition and teamwork during sports and co-curricular events.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {houses.map((house, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className={`w-10 h-10 rounded-full ${house.color} shadow-inner`}></div>
                    <div>
                      <h4 className="font-bold text-primary">{house.name}</h4>
                      <p className="text-[9px] font-black uppercase tracking-widest text-black">{house.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
              <div className="relative p-10 bg-white rounded-[4rem] shadow-2xl">
                 <Palette className="text-secondary mb-8" size={64} strokeWidth={1.5} />
                 <h3 className="text-3xl font-serif font-bold mb-6 text-primary italic">PE Schedule</h3>
                 <p className="text-black leading-relaxed mb-8">
                   House uniforms are worn on <strong>Wednesdays</strong> and <strong>Saturdays</strong> to facilitate physical training and assembly drills.
                 </p>
                 <div className="flex items-center gap-3 p-5 bg-primary/5 rounded-2xl border border-primary/10">
                    <Info className="text-primary" size={20} />
                    <p className="text-xs font-bold text-primary">Proper house kits are mandatory for inter-house events.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grooming Standards */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Aesthetics of Excellence</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic text-white leading-tight">Grooming <span className="text-secondary not-italic">Standards.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             {[
               { title: "Haircut", desc: "Short, clean haircut for boys. Girls must tie long hair in two braids with maroon bands.", icon: Scissors },
               { title: "Footwear", desc: "Polished shoes with specified grey/white socks. No fancy sneakers allowed.", icon: Footprints },
               { title: "Accessories", desc: "No jewelry, nail polish, or expensive watches. Only basic ear studs for girls.", icon: Sparkles },
               { title: "Uniform Cleanliness", desc: "Uniforms must be ironed and stain-free daily. Faded sets must be replaced.", icon: User }
             ].map((std, i) => (
               <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="flex flex-col items-center">
                     <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                        <std.icon size={28} />
                     </div>
                     <h4 className="text-xl font-bold mb-3">{std.title}</h4>
                     <p className="text-white text-[13px] leading-relaxed max-w-[200px] mx-auto">{std.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Procurement Hub */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-gray-50 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-1/2">
                 <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="School Uniform Shop" />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Vendor Information</h4>
                 <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-tight">Where to <span className="text-secondary">Procure.</span></h2>
                 <p className="text-black text-lg mb-8 leading-relaxed">
                   To maintain shade consistency and quality standards, the school has authorized select vendors to provide the official KPS uniform sets.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-secondary transition-colors">
                       <ShoppingBag className="text-secondary shrink-0" size={24} />
                       <div>
                          <h4 className="font-bold text-primary mb-1">On-Campus Uniform Store</h4>
                          <p className="text-black text-sm">Open: Mon-Fri (09:00 AM – 03:00 PM)</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-secondary transition-colors">
                       <ShoppingBag className="text-secondary shrink-0" size={24} />
                       <div>
                          <h4 className="font-bold text-primary mb-1">M/S Smart Dressers (External)</h4>
                          <p className="text-black text-sm">MG Road, Bangalore. (Phone: +91 99999 88888)</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Download Handbook */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Download className="text-secondary mb-8" size={64} strokeWidth={1.5} />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-10 italic">Uniform <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Visual Guide.</span></h2>
              <p className="text-black text-lg mb-12 max-w-2xl">
                Download our visual handbook for a complete lookbook of regular, PE, and winter uniforms for all grade levels.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center group">
                    Download Visual Guide PDF <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                 </button>
                 <Link to="/school/conduct" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                    View Code of Conduct
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">"A sharp appearance reflects <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">a sharp mind."</span></h2>
           <Link to="/school/timings" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
              Back to School Life
           </Link>
        </div>
      </section>
    </main>
  );
};

export default Uniform;
