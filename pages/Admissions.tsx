
import React, { useEffect } from 'react';
import { 
  ClipboardList, UserPlus, HelpCircle, FileCheck, 
  CreditCard, CheckCircle2, Info, ArrowRight, 
  Calendar, FileText, UserCheck, ShieldCheck,
  ChevronRight, Sparkles, Phone, MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { usePopup } from '../context/PopupContext';

const Admissions: React.FC = () => {
  const { openPopup } = usePopup();

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

  const admissionHubs = [
    {
      title: "Admission Process",
      path: "/admissions/process",
      desc: "A step-by-step roadmap from initial enquiry to final enrollment at KPS.",
      icon: ClipboardList,
      accent: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "Frequently Asked",
      path: "/admissions/faqs",
      desc: "Quick answers to common queries about curriculum, transport, and more.",
      icon: HelpCircle,
      accent: "text-red-500",
      bg: "bg-red-50"
    },
    {
      title: "Scholarship Policy",
      path: "/admissions/scholarships",
      desc: "Nurturing merit through financial aid for exceptional academic and sports talent.",
      icon: Sparkles,
      accent: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      title: "Campus Visit",
      path: "/contact",
      desc: "Schedule a guided tour to witness our world-class infrastructure in person.",
      icon: Calendar,
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
            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Students in KPS Playground" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Admissions 2024-25</h4>
          <h1 className="text-white text-6xl md:text-9xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Begin Your <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Legacy.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Join a sanctuary of growth where academic excellence meets holistic transformation. Secure your child's future today.
          </p>
          <div className="mt-12 flex justify-center gap-6 reveal delay-300">
             <button onClick={openPopup} className="bg-secondary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-2xl">
                Apply Now
             </button>
             <button onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white/20 transition-all">
                Quick Enquiry
             </button>
          </div>
        </div>
      </section>

      {/* The Admission Philosophy */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Commitment</h4>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight italic">Fairness in <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Every Seat.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, our admission process is designed to be transparent, merit-based, and child-centric. We seek learners who are curious, compassionate, and ready to contribute to a vibrant global community.
                </p>
                <p>
                  We don't just enroll students; we welcome families. Our council ensures that every applicant is given a fair opportunity to showcase their potential through a friendly interaction process.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div>
                    <span className="text-4xl font-black text-primary italic">100%</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Transparent Process</p>
                 </div>
                 <div>
                    <span className="text-4xl font-black text-primary italic">Global</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Diversity Standard</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3 border border-primary/10"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-b-[12px] border-secondary">
                     <img src="https://images.unsplash.com/photo-1523050853064-8521a30302b5?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student Admissions Interaction" />
                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white">
                        <UserPlus className="text-secondary mb-4" size={40} />
                        <p className="text-xl font-serif italic max-w-sm">"The first step towards a lifetime of excellence."</p>
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
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Admissions Gateway</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Enrollment <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Support.</span></h2>
             <p className="text-black">Everything you need to navigate the transition to Karnataka Public School with confidence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionHubs.map((card, i) => (
              <Link to={card.path} key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm h-full flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                   <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.accent} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                      <card.icon size={28} />
                   </div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-4">{card.title}</h3>
                   <p className="text-black text-sm leading-relaxed mb-10 flex-grow">{card.desc}</p>
                   <span className="text-[10px] font-black uppercase tracking-widest text-secondary flex items-center gap-2 group-hover:text-primary transition-colors">
                     View Details <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                   </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Cycle Banner */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Timelines</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">The Admission <span className="text-secondary not-italic">Cycle.</span></h2>
                 <p className="text-white text-lg mb-10 leading-relaxed font-medium">
                   We follow a structured intake calendar to ensure a smooth transition for all new learners. Early applications are recommended for the core intake months.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white transition-all duration-500">
                       <Calendar className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors italic">Core Intake</h4>
                          <p className="text-white group-hover:text-black text-xs">November to March for the June Session.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white transition-all duration-500">
                       <UserCheck className="text-secondary" size={32} />
                       <div>
                          <h4 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors italic">Mid-Session</h4>
                          <p className="text-white group-hover:text-black text-xs">Based on vacancy availability during October.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5 bg-white p-12 text-primary">
                    <h3 className="text-3xl font-serif font-bold mb-8 italic">Key Dates</h3>
                    <div className="space-y-6">
                       {[
                         { event: "Application Start", date: "Nov 01, 2023" },
                         { event: "Interaction Phase", date: "Jan - Mar 2024" },
                         { event: "Offer Issuance", date: "Within 7 Days of Interaction" },
                         { event: "Academic Start", date: "June 05, 2024" }
                       ].map((item, idx) => (
                         <div key={idx} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
                            <span className="font-bold text-sm uppercase tracking-wider">{item.event}</span>
                            <span className="text-secondary font-black text-xs">{item.date}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Quick Connect</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Request <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Information.</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Have a specific question or want to request a callback from our admissions lead? Fill out the form and we will get back to you within 24 business hours.
                 </p>
                 <div className="space-y-8">
                    <div className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-all">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-primary">Admissions Hotline</h4>
                          <p className="text-black font-black text-sm tracking-wider">+91 87929 53189</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                       <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center group-hover:bg-secondary transition-all">
                          <MessageCircle size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-primary">General Enquiry</h4>
                          <p className="text-black font-black text-sm tracking-wider underline">ketkps@gmail.com</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2 reveal delay-400">
                 <div className="sticky top-32">
                    <ContactForm title="Admissions Enquiry" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust & Accreditations */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-2/3">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Accredited Excellence</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">A Standard You <br />Can Trust.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Karnataka Public School is fully affiliated with the CBSE board and follows the NCERT framework, integrated with international pedagogical standards to ensure your child is ready for the world.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/about/why-kps" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                       Why Choose KPS?
                    </Link>
                    <Link to="/academics/curriculum" className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                       View Curriculum
                    </Link>
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="relative p-12 bg-secondary rounded-[3rem] text-center text-white overflow-hidden shadow-xl">
                    <ShieldCheck className="text-primary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif font-bold mb-4 italic text-primary">Certified</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest">ISO 9001:2015 Compliant</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Empower your child's <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">journey of excellence.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center group">
                 Start Application <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={16} />
              </Link>
              <Link to="/admissions/faqs" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                 Read Admissions FAQs
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
