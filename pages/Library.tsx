
import React, { useEffect } from 'react';
import { Book, Globe, ShieldCheck, Clock, Layers, Users, Star, ArrowRight, Library as LibraryIcon, Search, Headphones } from 'lucide-react';

const Library: React.FC = () => {
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

  const sections = [
    { title: "Junior Reading Room", desc: "A colorful wonderland for grades Pre-K to 4 with storytelling corners and picture books.", icon: Star, bg: "bg-orange-50", color: "text-orange-500" },
    { title: "Research Wing", desc: "Academic journals, reference manuals, and quiet zones for senior students and faculty.", icon: LibraryIcon, bg: "bg-blue-50", color: "text-blue-500" },
    { title: "Digital Archives", desc: "Access to Kindle e-readers, Kindle for Schools, and international digital libraries.", icon: Globe, bg: "bg-purple-50", color: "text-purple-500" },
    { title: "Audio-Visual Lab", desc: "Equipped for podcasts, educational documentaries, and foreign language listening modules.", icon: Headphones, bg: "bg-green-50", color: "text-green-500" }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Sophisticated Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Library Interior" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">The Intellectual Sanctuary</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
            Library
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed font-medium reveal delay-100">
            The Library at Karnataka Public School is a vibrant, welcoming space designed to nurture a lifelong love for reading and learning. Thoughtfully curated and student friendly, it supports academic excellence, creativity, and independent exploration.
          </p>
        </div>
      </section>

      {/* Philosophy of Reading */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Vision</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">A Space for <br /> Knowledge & Imagination.</h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  Our school library houses a rich collection of books spanning fiction, non fiction, reference materials, encyclopedias, biographies, journals, and magazines. The selection caters to all age groups and enhances classroom learning by providing additional resources for research and project work.
                </p>
              </div>
              <div className="mt-12">
                 <div className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-colors">
                       <Search size={24} />
                    </div>
                    <div>
                       <h4 className="font-bold text-primary">Library OPAC</h4>
                       <p className="text-xs text-black">Search our collection online.</p>
                    </div>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-3"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary">
                     <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student Reading" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Library Ecosystem</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Key Features</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Diverse Book Collection", desc: "A wide range of titles in English, Kannada, and Hindi, covering literature, science, social studies, mathematics, general knowledge, and value education.", icon: Book },
              { title: "Digital & Reference Resources", desc: "Access to age appropriate digital content, reference books, dictionaries, atlases, and educational materials that help students deepen their understanding of concepts.", icon: Globe },
              { title: "Reading & Study Zones", desc: "Comfortable reading corners and quiet study areas encourage focus, imagination, and independent learning.", icon: Star },
              { title: "Library Periods", desc: "Dedicated library periods for all classes ensure that reading becomes a regular practice and part of each child’s weekly routine.", icon: Clock },
              { title: "Research & Project Support", desc: "Students can access materials needed for academic projects, experiments, competitions, and presentations.", icon: Layers },
              { title: "Guided by a Trained Librarian", desc: "A qualified librarian helps students select books, develop research skills, and cultivate good reading habits.", icon: Users }
            ].map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 h-full flex flex-col items-center text-center hover:shadow-2xl transition-all duration-500">
                   <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                   <p className="text-black text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies & Timings */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Operations</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10">Library Policy.</h2>
                 <div className="space-y-6">
                    {[
                       { label: "Operating Hours", val: "08:30 AM - 04:30 PM (Mon-Fri)", icon: Clock },
                       { label: "Borrowing Limit", val: "2 Books for 14 Days", icon: Book },
                       { label: "Digital Access", val: "Unlimited Campus-wide Wi-Fi", icon: Layers },
                       { label: "Code of Conduct", val: "Silent Zone Integrity", icon: ShieldCheck }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                         <row.icon className="text-secondary" size={24} />
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">{row.label}</p>
                            <p className="text-sm font-bold">{row.val}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="bg-white rounded-[4rem] p-12 lg:p-20 text-primary">
                    <h3 className="text-3xl font-serif font-bold mb-8 italic">Literary Events</h3>
                    <div className="space-y-8">
                       <div className="group cursor-pointer">
                          <h4 className="text-lg font-black uppercase tracking-widest text-secondary flex items-center">
                            The KPS Book Club <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                          </h4>
                          <p className="text-black text-sm mt-2">Monthly meets to discuss classics and contemporary releases.</p>
                       </div>
                       <div className="group cursor-pointer">
                          <h4 className="text-lg font-black uppercase tracking-widest text-secondary flex items-center">
                            Author Interactive <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                          </h4>
                          <p className="text-black text-sm mt-2">Regular guest sessions with renowned Indian and International authors.</p>
                       </div>
                       <div className="group cursor-pointer">
                          <h4 className="text-lg font-black uppercase tracking-widest text-secondary flex items-center">
                            Reading Challenge <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                          </h4>
                          <p className="text-black text-sm mt-2">Annual 100-book goal for foundational and preparatory students.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Sculpting minds through the <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">power of words.</span></h2>
          <div className="flex justify-center gap-6">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
               Contact Librarian
            </button>
            <button className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
               Back to Academics
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Library;
