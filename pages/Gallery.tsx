
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
    { id: 1, category: 'Campus', title: 'Main Administration Block', url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80' },
    { id: 2, category: 'Academic', title: 'Modern Library Wing', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80' },
    { id: 3, category: 'Sports', title: 'Olympic Basketball Court', url: 'https://images.unsplash.com/photo-1544922650-1499b8443316?auto=format&fit=crop&q=80' },
    { id: 4, category: 'Events', title: 'Annual Cultural Festival', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80' },
    { id: 5, category: 'Campus', title: 'The Zen Gardens', url: 'https://images.unsplash.com/photo-1592285338270-488b440b4ec2?auto=format&fit=crop&q=80' },
    { id: 6, category: 'Academic', title: 'Advanced Robotics Lab', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80' },
    { id: 7, category: 'Arts', title: 'Music Conservatory', url: 'https://images.unsplash.com/photo-1514525253361-bee1455d082c?auto=format&fit=crop&q=80' },
    { id: 8, category: 'Sports', title: 'Swimming Pavilion', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80' },
    { id: 9, category: 'Events', title: 'Founders Day Parade', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80' },
    { id: 10, category: 'Academic', title: 'The Smart Classroom', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80' },
    { id: 11, category: 'Arts', title: 'Visual Arts Studio', url: 'https://images.unsplash.com/photo-1460518451285-cd7ba71123b2?auto=format&fit=crop&q=80' },
    { id: 12, category: 'Campus', title: 'Evening Campus View', url: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80' },
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
