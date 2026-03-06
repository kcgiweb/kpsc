
import React from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const GenericPage: React.FC = () => {
  const { pathname } = useLocation();
  
  // Logic to determine content based on path
  const getPageInfo = () => {
    const parts = pathname.split('/').filter(Boolean);
    const category = parts[0] || 'Page';
    const subPage = parts[1] || '';
    
    const formattedTitle = (subPage || category).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    
    return {
      category: category.toUpperCase(),
      title: formattedTitle,
      heroImage: "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&q=80",
    };
  };

  const info = getPageInfo();

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <img src={info.heroImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <p className="text-secondary font-bold tracking-widest uppercase mb-4">{info.category}</p>
          <h1 className="text-5xl md:text-6xl font-serif font-bold">{info.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 space-y-8">
              <h2 className="text-3xl font-serif font-bold text-primary">Discover More About {info.title}</h2>
              <p className="text-black leading-relaxed text-lg">
                At Karnataka Public School, we are committed to providing transparency and detailed information about all aspects of our institution. This section provides a deep dive into {info.title.toLowerCase()}, highlighting how we maintain our standards of excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Key Detail {i}</h4>
                      <p className="text-sm text-black">Essential information regarding {info.title.toLowerCase()} and our implementation strategy.</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 p-8 rounded-3xl border-l-4 border-secondary">
                <h3 className="text-xl font-bold text-primary mb-4">Our Commitment</h3>
                <p className="text-black italic">
                  "Education is the most powerful weapon which you can use to change the world. At KPS, we ensure that every student is equipped with this weapon, honed with integrity and wisdom."
                </p>
              </div>

              <p className="text-black leading-relaxed">
                We believe in continuous improvement. Our {info.title.toLowerCase()} is reviewed annually by experts and stakeholders to ensure we stay ahead of educational trends while keeping our cultural roots intact.
              </p>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8 sticky top-32">
                <h4 className="text-xl font-bold text-primary mb-6">Explore Sections</h4>
                <ul className="space-y-4">
                  {['Overview', 'Recent Updates', 'Key Features', 'Related Documents'].map(item => (
                    <li key={item}>
                      <button className="flex items-center justify-between w-full group text-left">
                        <span className="text-black group-hover:text-primary group-hover:font-bold transition-all">{item}</span>
                        <ChevronRight size={16} className="text-black group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12">
                  <ContactForm title="Have Questions?" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GenericPage;
