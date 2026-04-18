
import React, { useState, useEffect } from 'react';
import { 
  Search, ChevronDown, HelpCircle, MessageCircle, 
  Phone, Mail, ArrowRight, UserCheck, BookOpen, 
  Bus, ShieldCheck, CreditCard 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const Faqs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
  }, [searchQuery, activeCategory]);

  const categories = [
    { name: 'All', icon: HelpCircle },
    { name: 'Academics', icon: BookOpen },
    { name: 'Admissions', icon: UserCheck },
    { name: 'Safety', icon: ShieldCheck }
  ];

  const faqs: FAQ[] = [
    {
      category: 'Academics',
      question: "What curriculum does the school follow?",
      answer: "The school follows the curriculum prescribed by the Central Board of Secondary Education (CBSE), ensuring academic excellence and holistic development."
    },
    {
      category: 'Academics',
      question: "What grades are offered at the school?",
      answer: "We offer classes from Grade 1 to Grade 10."
    },
    {
      category: 'Academics',
      question: "Does the school provide sports facilities?",
      answer: "Yes. We encourage active participation in Cricket, Football, Throwball, Volleyball, Tennis, and Taekwondo for both boys and girls."
    },
    {
      category: 'Academics',
      question: "What co-curricular activities are available?",
      answer: "Students can participate in sports, cultural programs, clubs, competitions, leadership activities, and skill-based learning programs."
    },
    {
      category: 'Academics',
      question: "Does the school have modern learning facilities?",
      answer: "Yes. Our campus includes smart classrooms, well-equipped laboratories, a library, and an upcoming AI & STEM Innovation Lab."
    },
    {
      category: 'Academics',
      question: "Are teachers trained and certified?",
      answer: "All teachers undergo continuous proficiency training as per CBSE guidelines to ensure high-quality education."
    },
    {
      category: 'Academics',
      question: "Are skill-based subjects offered?",
      answer: "Yes. Skill subjects are introduced as per CBSE norms to equip students with practical and career-oriented competencies."
    },
    {
      category: 'Safety',
      question: "How does the school ensure student safety?",
      answer: "Student safety is our top priority. The campus is monitored, and strict safety protocols are followed at all times."
    },
    {
      category: 'Admissions',
      question: "How can parents apply for admission?",
      answer: "Parents can visit the school office or check the Admissions section on our website for detailed procedures and requirements."
    },
    {
      category: 'Admissions',
      question: "How does the school communicate with parents?",
      answer: "Regular parent-teacher meetings, circulars, and digital communication platforms ensure transparent and continuous updates."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Support Desk" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Support Center</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Help & <span className="text-secondary not-italic underline decoration-2 underline-offset-8">FAQs.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            Find quick answers to common queries or reach out to our dedicated support team for personalized assistance.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4">
               <div className="sticky top-32 space-y-8 reveal">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
                    <input 
                      type="text" 
                      placeholder="Search questions..." 
                      className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white border border-gray-100 shadow-sm focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all text-sm font-medium"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <div className="bg-white rounded-[2.5rem] p-8 border border-gray-50 shadow-sm">
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-6 px-2">Categories</h4>
                     <div className="space-y-2">
                        {categories.map((cat) => (
                           <button
                             key={cat.name}
                             onClick={() => { setActiveCategory(cat.name); setOpenIndex(0); }}
                             className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl transition-all group ${
                               activeCategory === cat.name 
                               ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                               : 'text-black hover:bg-gray-50'
                             }`}
                           >
                             <div className="flex items-center gap-4">
                                <cat.icon size={18} className={activeCategory === cat.name ? 'text-secondary' : 'text-black'} />
                                <span className="font-bold text-sm tracking-tight">{cat.name}</span>
                             </div>
                             <ChevronDown className={`transition-transform ${activeCategory === cat.name ? '-rotate-90 text-secondary' : 'text-black'}`} size={14} />
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="bg-secondary rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                     <MessageCircle className="mb-6 opacity-50" size={40} />
                     <h4 className="text-xl font-bold mb-4">Still need help?</h4>
                     <p className="text-white/80 text-xs leading-relaxed mb-8">Can't find the answer you're looking for? Our counselors are ready to help.</p>
                     <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        Chat with us <ArrowRight size={14} />
                     </Link>
                  </div>
               </div>
            </div>

            {/* FAQ List Area */}
            <div className="lg:w-3/4 reveal delay-300">
               <div className="mb-12">
                  <h2 className="text-4xl font-serif font-bold text-primary italic mb-2">
                    {activeCategory === 'All' ? 'Everything you need to know.' : `${activeCategory} Queries.`}
                  </h2>
                  <p className="text-black font-medium">Showing {filteredFaqs.length} results</p>
               </div>

               <div className="space-y-4">
                  {filteredFaqs.map((faq, i) => (
                    <div 
                      key={i} 
                      className={`bg-white rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${
                        openIndex === i ? 'border-secondary shadow-2xl' : 'border-gray-100 hover:border-secondary/30'
                      }`}
                    >
                      <button 
                        onClick={() => toggleAccordion(i)}
                        className="w-full flex items-center justify-between px-8 py-8 text-left"
                      >
                        <div className="flex items-center gap-6">
                           <span className="text-[10px] font-black text-secondary w-8 tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                           <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-black'}`}>
                             {faq.question}
                           </h3>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-secondary text-white rotate-180' : 'bg-gray-50 text-black'}`}>
                           <ChevronDown size={20} />
                        </div>
                      </button>
                      
                      <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="px-8 pb-10 ml-14">
                           <div className="w-full h-px bg-gray-50 mb-8"></div>
                           <p className="text-black text-lg leading-relaxed font-medium">
                             {faq.answer}
                           </p>
                           <div className="mt-8 flex items-center gap-3">
                              <span className="text-[9px] font-black uppercase tracking-widest text-black">Category:</span>
                              <span className="bg-primary/5 text-primary px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{faq.category}</span>
                           </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredFaqs.length === 0 && (
                    <div className="py-32 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                       <Search className="mx-auto text-black mb-8" size={80} />
                       <h3 className="text-2xl font-serif font-bold text-black">No results for "{searchQuery}"</h3>
                       <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-6 text-secondary font-black uppercase tracking-widest text-xs underline underline-offset-4">Reset filters</button>
                    </div>
                  )}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support Hotlines */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               {[
                 { label: "Admissions Office", val: "+91 87929 53189", icon: Phone },
                 { label: "General Enquiries", val: "ketkps@gmail.com", icon: Mail },
                 { label: "Transport Desk", val: "+91 98765 43210", icon: Bus }
               ].map((item, i) => (
                 <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="flex flex-col items-center text-center">
                       <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all shadow-xl">
                          <item.icon size={28} />
                       </div>
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">{item.label}</h4>
                       <p className="text-xl font-bold group-hover:text-secondary transition-colors">{item.val}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Footer Note */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Your child's success is our <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">highest priority.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Back to Admission Process
              </Link>
              <Link to="/about/us" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Learn more About Us
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Faqs;
