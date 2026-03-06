
import React, { useEffect, useState } from 'react';
import { 
  Calendar, ArrowRight, Newspaper, Bell, 
  Download, FileText, ChevronRight, Share2, 
  Mail, Bookmark, Tag, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

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
  }, [activeTab, searchQuery]);

  const categories = ['All', 'Academics', 'Sports', 'Achievements', 'Campus Life'];

  const newsItems = [
    {
      id: 1,
      category: 'Academics',
      title: 'KPS Achieves 100% Distinction in CBSE Class 12 Board Results',
      date: 'May 12, 2024',
      excerpt: 'Once again, our students have demonstrated academic excellence with an incredible 100% distinction rate in the recently announced board results.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80',
      featured: true
    },
    {
      id: 2,
      category: 'Sports',
      title: 'Annual Inter-School Athletics Championship Highlights',
      date: 'April 28, 2024',
      excerpt: 'The KPS Wolves took home 12 Gold medals at the state-level athletics championship held at the Kanteerava Stadium.',
      image: 'https://images.unsplash.com/photo-1544922650-1499b8443316?auto=format&fit=crop&q=80',
      featured: false
    },
    {
      id: 3,
      category: 'Campus Life',
      title: 'Robotics Wing Unveils First Student-Built AI Assistant',
      date: 'April 15, 2024',
      excerpt: 'Our Grade 11 science students successfully programmed a campus-guide robot that uses generative AI to help visitors.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80',
      featured: false
    },
    {
      id: 4,
      category: 'Achievements',
      title: 'KPS Principal Honored with National Educator Award',
      date: 'March 22, 2024',
      excerpt: 'Mrs. Anjali Hegde was recognized for her innovative pedagogical reforms and contribution to holistic student development.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
      featured: false
    },
    {
      id: 5,
      category: 'Campus Life',
      title: 'Sustainable KPS: Full Solar Transition Completed',
      date: 'March 10, 2024',
      excerpt: 'The school successfully completed its transition to 100% renewable energy, setting a green benchmark for schools in India.',
      image: 'https://images.unsplash.com/photo-1592285338270-488b440b4ec2?auto=format&fit=crop&q=80',
      featured: false
    },
    {
      id: 6,
      category: 'Academics',
      title: 'Summer Enrichment Program 2024: Registration Open',
      date: 'February 25, 2024',
      excerpt: 'Applications are now being invited for our specialized summer workshops in Creative Writing, Coding, and Classical Music.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80',
      featured: false
    }
  ];

  const newsletters = [
    { month: 'April 2024', name: 'The KPS Chronicle - Spring Edition', size: '2.4 MB' },
    { month: 'March 2024', name: 'The KPS Chronicle - Founders Special', size: '3.1 MB' },
    { month: 'February 2024', name: 'The KPS Chronicle - Tech & Innovation', size: '2.8 MB' },
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const featuredItem = newsItems.find(item => item.featured);

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Newspaper background" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Stay Informed</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            News & <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Events.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200">
            Capturing the milestones, achievements, and vibrant daily life of the KPS community.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      {featuredItem && activeTab === 'All' && !searchQuery && (
        <section className="py-20 -mt-20 relative z-20">
          <div className="container mx-auto px-6">
            <div className="reveal bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
              <div className="lg:w-1/2">
                <img src={featuredItem.image} className="w-full h-full object-cover" alt="Featured News" />
              </div>
              <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-secondary text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{featuredItem.category}</span>
                  <span className="text-black font-bold text-[10px] uppercase tracking-widest">{featuredItem.date}</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-8 leading-tight">{featuredItem.title}</h2>
                <p className="text-black text-lg leading-relaxed mb-10">{featuredItem.excerpt}</p>
                <Link to="#" className="inline-flex items-center text-primary font-black uppercase tracking-[0.2em] text-xs hover:text-secondary transition-colors group">
                  Read Full Story <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search Bar */}
      <section className="sticky top-[72px] z-30 bg-white border-b border-gray-100 shadow-sm py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex overflow-x-auto pb-2 w-full lg:w-auto gap-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border whitespace-nowrap ${
                    activeTab === cat 
                      ? 'bg-secondary border-secondary text-white shadow-xl shadow-secondary/20' 
                      : 'bg-white border-gray-200 text-black hover:border-secondary hover:text-secondary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full pl-12 pr-6 py-3 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all text-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredNews.map((news, i) => (
              <div 
                key={news.id} 
                className="reveal group bg-white rounded-[3rem] border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
                style={{ transitionDelay: `${(i % 3) * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={news.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={news.title} />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-primary shadow-lg">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center gap-3 text-black text-[10px] font-bold uppercase tracking-widest mb-4">
                    <Calendar size={12} /> {news.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6 group-hover:text-secondary transition-colors line-clamp-2">{news.title}</h3>
                  <p className="text-black text-sm leading-relaxed mb-8 line-clamp-3">{news.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Link to="#" className="text-primary font-black uppercase tracking-[0.2em] text-[10px] hover:text-secondary transition-colors">
                      Read More
                    </Link>
                    <div className="flex gap-4">
                      <button className="text-black hover:text-secondary transition-colors"><Share2 size={16} /></button>
                      <button className="text-black hover:text-secondary transition-colors"><Bookmark size={16} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="py-32 text-center reveal">
               <Newspaper className="mx-auto text-black mb-8" size={64} />
               <h3 className="text-2xl font-serif font-bold text-black italic">No news found for this criteria.</h3>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Monthly Digest</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-10 italic">The KPS <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Chronicle.</span></h2>
              <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                Our official newsletter, "The KPS Chronicle," captures the month's highlights, student creative writing pieces, and important academic notifications.
              </p>
              <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl max-w-md">
                 <h4 className="text-xl font-bold text-primary mb-6">Subscribe to Digital Copy</h4>
                 <form className="flex flex-col gap-4">
                    <input 
                      type="email" 
                      placeholder="Parent's email address" 
                      className="px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-secondary/10 transition-all text-sm font-medium"
                    />
                    <button className="bg-primary text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg flex items-center justify-center gap-3 group">
                       Sign Me Up <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                 </form>
              </div>
            </div>

            <div className="lg:w-1/2 reveal delay-400">
               <div className="space-y-6 w-full">
                  {newsletters.map((nl, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-secondary hover:shadow-xl transition-all duration-500 flex items-center justify-between">
                       <div className="flex items-center gap-6">
                          <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                             <FileText size={24} />
                          </div>
                          <div>
                             <p className="text-[9px] font-black uppercase tracking-widest text-secondary mb-1">{nl.month}</p>
                             <h4 className="font-bold text-primary text-lg">{nl.name}</h4>
                          </div>
                       </div>
                       <button className="flex flex-col items-center group/btn">
                          <div className="w-10 h-10 rounded-full border-2 border-gray-100 flex items-center justify-center text-black group-hover:border-secondary group-hover:text-secondary transition-colors">
                             <Download size={18} />
                          </div>
                          <span className="text-[8px] font-black uppercase tracking-widest text-black group-hover:text-secondary mt-2">{nl.size}</span>
                       </button>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Grid Callout */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 italic">Join the <span className="text-secondary">Conversation.</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[
                 { label: "Instagram", handle: "@kps_bangalore", val: "12k+" },
                 { label: "Facebook", handle: "kpsbangalore", val: "25k+" },
                 { label: "X (Twitter)", handle: "@kps_official", val: "5k+" },
                 { label: "YouTube", handle: "KPS Media Lab", val: "10k+" }
               ].map((stat, i) => (
                 <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                    <h3 className="text-4xl md:text-5xl font-black text-secondary mb-2">{stat.val}</h3>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-4">{stat.label}</p>
                    <p className="text-xs font-bold text-white group-hover:text-white transition-colors">{stat.handle}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Relive the moments that <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">define our legacy.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/media/gallery" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Photo Gallery
              </Link>
              <button className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 In the Media
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default News;
