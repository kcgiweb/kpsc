
import React, { useEffect } from 'react';
import { 
  ClipboardList, UserPlus, MessageCircle, FileCheck, 
  CreditCard, CheckCircle2, Info, ArrowRight, 
  Calendar, FileText, UserCheck, ShieldCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Process: React.FC = () => {
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

  const steps = [
    {
      title: "Initial Enquiry",
      desc: "Fill out the online enquiry form or visit the campus to meet our admissions counselor.",
      icon: MessageCircle,
      tag: "Step 01"
    },
    {
      title: "Registration",
      desc: "Procure the prospectus and application form by paying the registration fee at the office.",
      icon: ClipboardList,
      tag: "Step 02"
    },
    {
      title: "Interaction",
      desc: "A friendly interaction with the child and parents to understand mutual expectations.",
      icon: UserPlus,
      tag: "Step 03"
    },
    {
      title: "Offer & Acceptance",
      desc: "Successful candidates are issued an admission offer letter via email or school portal.",
      icon: FileCheck,
      tag: "Step 04"
    },
    {
      title: "Finalization",
      desc: "Submit the required documents and complete the fee payment to confirm the seat.",
      icon: CreditCard,
      tag: "Step 05"
    }
  ];

  const ageCriteria = [
    { grade: "Nursery", age: "3 Years+", cutOff: "As of June 1st" },
    { grade: "LKG", age: "4 Years+", cutOff: "As of June 1st" },
    { grade: "UKG", age: "5 Years+", cutOff: "As of June 1st" },
    { grade: "Grade 1", age: "6 Years+", cutOff: "As of June 1st" }
  ];

  const documents = [
    "Attested copy of Birth Certificate",
    "Original Transfer Certificate (Grade 2 onwards)",
    "Passport size photographs (4 child, 2 each parent)",
    "Copy of Aadhaar Card (Child and Parents)",
    "Previous year's Report Card (Grade 2 onwards)",
    "Immunization record (Primary grades only)"
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1491843331657-205b7482c813?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="School corridor" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Begin the Journey</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Admission <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Process.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            A transparent and parent-friendly roadmap to joining the Karnataka Public School family.
          </p>
        </div>
      </section>

      {/* The Roadmap */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Five Steps to Excellence</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">The KPS <span className="italic">Roadmap.</span></h2>
          </div>

          <div className="relative">
            {/* Decorative Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {steps.map((step, i) => (
                <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center group-hover:-translate-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-secondary mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                      <step.icon size={28} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mb-3">{step.tag}</span>
                    <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-black text-[13px] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Age Criteria */}
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Entry Eligibility</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10 leading-tight italic">Age <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Criteria.</span></h2>
              
              <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Grade</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest">Minimum Age</th>
                      <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-right">Reference</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {ageCriteria.map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-5 font-black text-primary">{row.grade}</td>
                        <td className="px-8 py-5 text-black font-medium">{row.age}</td>
                        <td className="px-8 py-5 text-black text-[10px] font-bold text-right">{row.cutOff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start gap-4">
                <Info className="text-blue-500 shrink-0" size={20} />
                <p className="text-blue-700 text-xs font-medium leading-relaxed italic">
                  * For Grades 2 to 12, admission is based on the availability of seats and performance in the previous academic year.
                </p>
              </div>
            </div>

            {/* Document Checklist */}
            <div className="lg:w-1/2 reveal delay-400">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Essential Paperwork</h4>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-10 leading-tight italic">Document <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Checklist.</span></h2>
              
              <div className="grid grid-cols-1 gap-4">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm group hover:border-secondary transition-all">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <FileText size={20} />
                    </div>
                    <span className="text-black font-bold text-sm tracking-tight">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Spotlight */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Commitment to Fairness</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic text-white">Ethical <span className="text-secondary not-italic">Admissions.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <ShieldCheck size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Merit Based</h4>
                      <p className="text-white/40 text-sm">We maintain a strict merit-first policy, ensuring a diverse and talented student body.</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <UserCheck size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold mb-2">Inclusivity</h4>
                      <p className="text-white/40 text-sm">Our campus welcomes students from all backgrounds, fostering a rich multicultural environment.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="bg-white rounded-[4rem] p-12 lg:p-20 text-primary shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                  <Calendar className="text-secondary mb-8" size={64} strokeWidth={1.5} />
                  <h3 className="text-3xl font-serif font-bold mb-6 italic">Admission Cycle</h3>
                  <p className="text-black text-lg leading-relaxed mb-10 font-medium">
                    The principal intake happens in <strong>March and April</strong>. However, mid-term admissions are considered based on vacancies.
                  </p>
                  <div className="flex flex-col gap-3">
                     <div className="flex justify-between items-center py-3 border-b border-gray-100">
                        <span className="text-[10px] font-black uppercase text-black">Phase 1</span>
                        <span className="font-bold text-sm">November - January</span>
                     </div>
                     <div className="flex justify-between items-center py-3">
                        <span className="text-[10px] font-black uppercase text-black">Phase 2</span>
                        <span className="font-bold text-sm">February - April</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs and Contact */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Support & Queries</h4>
                 <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-tight">Got <span className="text-secondary">Questions?</span></h2>
                 <p className="text-black text-lg mb-10 leading-relaxed">
                   We understand that choosing the right school is a monumental decision. Our team is here to guide you through every nuance of the KPS experience.
                 </p>
                 
                 <div className="space-y-6 mb-12">
                   {[
                     "What is the average class size?",
                     "Is transport available for North Bangalore?",
                     "Does the school offer integrated NEET/JEE coaching?",
                     "Are there scholarship opportunities?"
                   ].map((q, i) => (
                     <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 group cursor-pointer hover:bg-primary transition-all">
                        <span className="text-black font-bold group-hover:text-white transition-colors">{q}</span>
                        <ArrowRight className="text-secondary group-hover:translate-x-2 transition-transform" size={18} />
                     </div>
                   ))}
                 </div>

                 <Link to="/admissions/faqs" className="inline-flex items-center bg-gray-100 text-primary px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                    View Full FAQ Library
                 </Link>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="sticky top-32">
                    <ContactForm title="Book a Campus Visit" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">The future of your child <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">starts here.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Download Prospectus
              </button>
              <Link to="/about/why-kps" className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                 Why Choose KPS?
              </Link>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Process;
