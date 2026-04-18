import React, { useEffect } from 'react';
import { 
  ImageIcon, Newspaper, MessageSquare, Footprints, 
  Play, ArrowRight, ChevronRight, Video, 
  Instagram, Facebook, Youtube, Share2, 
  Tv, Radio, Camera, Bookmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Media: React.FC = () => {
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

  const mediaHubs = [
    {
      title: "Visual Gallery",
      path: "/media/gallery",
      desc: "A rich tapestry of life at KPS—capturing sports, arts, and everyday brilliance.",
      icon: ImageIcon,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "News & Events",
      path: "/media/news",
      desc: "Latest announcements, academic milestones, and upcoming campus activities.",
      icon: Newspaper,
      accent: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Educational Blogs",
      path: "/media/blogs",
      desc: "Insights from our educators on pedagogy, parenting, and student well-being.",
      icon: MessageSquare,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "KPS Walkathon",
      path: "/media/walkathon",
      desc: "Our annual community outreach initiative promoting fitness and social awareness.",
      icon: Footprints,
      accent: "text-green-500",
      bg: "bg-green-50"
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="School Media and Events" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Communication & Presence</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Media at <span className="text-secondary not-italic underline decoration-4 underline-offset-8">KPS.</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Narrating the stories of growth, achievement, and community that define the Karnataka Public School legacy.
          </p>
        </div>
      </section>

      {/* The Storytelling Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Voice</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Capturing <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Excellence.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At KPS, every day is a story of discovery. Through our various media channels, we aim to provide parents, alumni, and the wider community a transparent window into the vibrant life of our students.
                </p>
                <p>
                  Whether it's through our high-definition gallery, our insightful educator blogs, or our nationally recognized community walkathons, we ensure our voice is one of integrity and inspiration.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-10">
                 <div>
                    <span className="text-4xl font-black text-primary italic">10k+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Annual Mentions</p>
                 </div>
                 <div className="w-px h-12 bg-gray-100"></div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">Global</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Digital Reach</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="School Cultural Event" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <Camera className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"Every frame tells a story of transformation."</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Hub Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Explore Content</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">The Media <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Blueprint.</span></h2>
             <p className="text-black">Dive into the various facets of our institutional storytelling and community engagement.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaHubs.map((card, i) => (
              <Link to={card.path} key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.accent} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                      <card.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h3>
                   <p className="text-black text-sm leading-relaxed mb-10 flex-grow">{card.desc}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:text-primary transition-colors">
                     View Section <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Spotlight */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Cinema of Learning</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">The KPS <span className="text-secondary not-italic">Showreel.</span></h2>
                 <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                   Witness the scale, the energy, and the passion that pulse through our campus every day. Our high-production values reflect our commitment to excellence in everything we do.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white transition-all duration-500 cursor-pointer">
                       <Tv size={24} className="text-secondary" />
                       <span className="font-bold text-sm tracking-widest uppercase group-hover:text-primary transition-colors">Corporate Film</span>
                    </div>
                    <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white transition-all duration-500 cursor-pointer">
                       <Radio size={24} className="text-secondary" />
                       <span className="font-bold text-sm tracking-widest uppercase group-hover:text-primary transition-colors">Podcast Series</span>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl group cursor-pointer border-8 border-white/5">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" alt="Video Placeholder" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-24 h-24 rounded-full bg-secondary text-white flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                          <Play fill="white" size={32} />
                       </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-white bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                       <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Now Playing</p>
                       <h4 className="font-bold text-sm">25 Years of Building Excellence</h4>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Social Media Grid Teaser */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-3xl mx-auto mb-20 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Connect with us</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Daily <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Conversations.</span></h2>
              <p className="text-black">Join our digital family for real-time updates, student features, and behind-the-scenes glimpses of campus life.</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { icon: Instagram, color: "text-[#E4405F]", label: "Instagram", val: "12k+" },
                { icon: Facebook, color: "text-[#1877F2]", label: "Facebook", val: "25k+" },
                { icon: Youtube, color: "text-[#FF0000]", label: "YouTube", val: "10k+" },
                { icon: Share2, color: "text-blue-400", label: "Twitter/X", val: "5k+" },
                { icon: Tv, color: "text-primary", label: "Media Portal", val: "Active" },
                { icon: Bookmark, color: "text-secondary", label: "News Feed", val: "Daily" }
              ].map((social, i) => (
                <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                   <div className="bg-gray-50 rounded-[2.5rem] p-8 h-full flex flex-col items-center text-center border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-500">
                      <social.icon size={32} className={`${social.color} mb-6 group-hover:scale-110 transition-transform`} />
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-2">{social.label}</h4>
                      <p className="text-lg font-black text-primary">{social.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Media Interaction Policy */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-2/3">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Policy & Relations</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Press & Public <br />Relations.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   For media enquiries, interview requests with the management, or high-resolution brand assets, please reach out to our communications department. We maintain an open-door policy for credible institutional reporting.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                       Media Kit Download
                    </button>
                    <Link to="/contact" className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                       Contact Press Office
                    </Link>
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="relative p-12 bg-secondary rounded-[3rem] text-center text-white overflow-hidden shadow-xl">
                    <Tv className="text-primary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif font-bold mb-4 italic text-primary">In the News</h3>
                    <p className="text-primary/60 text-[10px] font-black uppercase tracking-widest">Featured in 50+ Publications</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Be part of the <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">continuing story.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Admissions 2024-25
              </Link>
              <Link to="/media/news" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Recent News
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Media;