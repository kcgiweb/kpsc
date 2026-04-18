
import React, { useEffect, useState } from 'react';
import { 
  Search, Filter, ImageIcon, Camera, 
  X, Maximize2, Play, ChevronRight, 
  Download, Share2, Heart, Award
} from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
  }, [activeFilter]);

  const categories = ['All', 'Campus', 'Sports', 'Academic', 'Events', 'Arts'];

  const galleryItems = [
    { id: 1, category: 'Events', title: 'School Gathering', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789519/IMG_4245_mx8cqy.jpg' },
    { id: 2, category: 'Sports', title: 'Sports Action', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789518/SLA_9174_a4ekno.jpg' },
    { id: 3, category: 'Campus', title: 'Campus Life', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789518/SLA_9136_xpa05s.jpg' },
    { id: 4, category: 'Academic', title: 'Classroom Moments', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789517/SLA_9122_j7ls0e.jpg' },
    { id: 5, category: 'Arts', title: 'Creative Arts', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789517/SLA_9092_dnumlx.jpg' },
    { id: 6, category: 'Events', title: 'Celebrations', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789515/SLA_9114_ebbrop.jpg' },
    { id: 7, category: 'Sports', title: 'Team Spirit', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9091_jqdbtq.jpg' },
    { id: 8, category: 'Campus', title: 'School Grounds', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9068_oyqj10.jpg' },
    { id: 9, category: 'Academic', title: 'Learning Together', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9084_ysrthb.jpg' },
    { id: 10, category: 'Arts', title: 'Cultural Performance', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789513/SLA_9060_emvw7m.jpg' },
    { id: 11, category: 'Events', title: 'Special Occasion', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789511/SLA_9058_y5xdri.jpg' },
    { id: 12, category: 'Sports', title: 'Athletic Meet', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789510/SLA_9006_itrogh.jpg' },
    { id: 13, category: 'Campus', title: 'Student Activities', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789509/SLA_8735_uksvsy.jpg' },
    { id: 14, category: 'Academic', title: 'Knowledge Hub', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789509/SLA_8998_yygnwc.jpg' },
    { id: 15, category: 'Arts', title: 'Artistic Expression', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789508/SLA_8772_rgqdpt.jpg' },
    { id: 16, category: 'Events', title: 'Community Event', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789506/SLA_8705_ccmafe.jpg' },
    { id: 17, category: 'Sports', title: 'Game Day', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789505/SLA_8834_yhvcvo.jpg' },
    { id: 18, category: 'Campus', title: 'Our Campus', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789503/SLA_9081_qzfugt.jpg' },
    { id: 19, category: 'Academic', title: 'Study Session', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789504/IMG_4212_w2h410.jpg' },
    { id: 20, category: 'Arts', title: 'Creative Works', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789504/IMG_4195_goertc.jpg' },
    { id: 21, category: 'Events', title: 'Memorable Moments', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789503/SLA_8999_m4te5x.jpg' },
    { id: 22, category: 'Sports', title: 'Active Lifestyle', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789502/SLA_8773_fjhm78.jpg' },
    { id: 23, category: 'Campus', title: 'School Infrastructure', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789494/IMG_9717_uwdwbd.jpg' },
    { id: 24, category: 'Academic', title: 'Focus and Learn', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9599_idll72.jpg' },
    { id: 25, category: 'Arts', title: 'Performance Arts', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9579_niujfz.jpg' },
    { id: 26, category: 'Events', title: 'Annual Function', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9690_dpt0yx.jpg' },
    { id: 27, category: 'Sports', title: 'Sportsmanship', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9552_pjx5ir.jpg' },
    { id: 28, category: 'Campus', title: 'Green Campus', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789493/IMG_9668_ufygfd.jpg' },
    { id: 29, category: 'Academic', title: 'Academic Excellence', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789492/IMG_9484_r6cbb3.jpg' },
    { id: 30, category: 'Arts', title: 'Visual Arts', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789492/IMG_9467_sdl0cb.jpg' },
    { id: 31, category: 'Events', title: 'School Spirit', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789492/IMG_9595_eiqj6a.jpg' },
    { id: 32, category: 'Campus', title: 'Modern Facilities', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789079/SLA_8805_mg8tx0.jpg' },
    { id: 33, category: 'Academic', title: 'Future Leaders', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789079/SLA_8937_kxomhs.jpg' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Photography background" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Visual Archive</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Snapshots of <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Excellence.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            A window into the vibrant life at Karnataka Public School. Witness the joy of discovery and the spirit of competition.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center h-20 overflow-x-auto no-scrollbar gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border ${
                  activeFilter === cat 
                    ? 'bg-secondary border-secondary text-white shadow-xl shadow-secondary/20' 
                    : 'bg-white border-gray-200 text-black hover:border-secondary hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, i) => (
              <div 
                key={item.id} 
                className="reveal break-inside-avoid group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-lg bg-white transition-all duration-700 hover:shadow-2xl hover:-translate-y-2"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                onClick={() => setSelectedImage(item.url)}
              >
                <div className="relative overflow-hidden aspect-auto">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white mb-6 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <Maximize2 size={24} />
                    </div>
                    <h3 className="text-white font-serif font-bold text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                    <span className="text-secondary font-black uppercase text-[10px] tracking-[0.3em] translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="py-32 text-center">
              <Camera className="mx-auto text-black mb-8" size={64} />
              <h2 className="text-3xl font-serif font-bold text-black italic">No memories found in this category yet.</h2>
            </div>
          )}
        </div>
      </section>

      {/* Media Stats Banner */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: 'High Res Images', val: '5,000+', icon: Camera },
              { label: 'Event Videos', val: '200+', icon: Play },
              { label: 'Awards Won', val: '50+', icon: Award },
              { label: 'Memory Points', val: '25 Yrs', icon: Heart },
            ].map((stat, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6 group-hover:bg-secondary transition-all">
                  <stat.icon size={28} className="text-secondary group-hover:text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black mb-2">{stat.val}</h3>
                <p className="text-[10px] uppercase font-black tracking-widest text-white/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-secondary transition-all group">
            <X size={24} />
          </button>
          
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-zoom-in" 
            alt="Full size view" 
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-6 text-white/60">
             <button className="hover:text-secondary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <Download size={18} /> Download
             </button>
             <div className="w-px h-6 bg-white/10"></div>
             <button className="hover:text-secondary transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                <Share2 size={18} /> Share
             </button>
          </div>
        </div>
      )}

      {/* Social CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Relive the moments that <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">define us.</span></h2>
           <p className="text-black max-w-xl mx-auto mb-12">Follow our journey in real-time on our social handles for daily updates and live event coverage.</p>
           <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Follow on Instagram
              </button>
              <button className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Our YouTube Channel
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
