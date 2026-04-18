
import React, { useEffect } from 'react';
import { 
  Clock, Sun, Coffee, Moon, Calendar, 
  MapPin, Phone, Users, CheckCircle2, 
  ArrowRight, Info, AlertTriangle 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Timings: React.FC = () => {
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

  const schoolSchedules = [
    { 
      phase: "Foundational", 
      grades: "Pre-K to Grade 2", 
      time: "08:30 AM – 12:30 PM", 
      desc: "Designed for shorter attention spans with ample play-based learning intervals.",
      icon: Sun,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    { 
      phase: "Preparatory & Middle", 
      grades: "Grades 3 to 8", 
      time: "08:30 AM – 03:15 PM", 
      desc: "Standard academic hours including specialized labs and sports blocks.",
      icon: Clock,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    { 
      phase: "Senior Secondary", 
      grades: "Grades 9 to 12", 
      time: "07:45 AM – 03:30 PM", 
      desc: "Extended hours for integrated coaching and advanced laboratory research.",
      icon: Moon,
      color: "text-primary",
      bg: "bg-primary/5"
    }
  ];

  const milestones = [
    { label: "Reporting Time", time: "08:15 AM", detail: "Students must be inside the campus." },
    { label: "Morning Assembly", time: "08:35 AM", detail: "Daily prayer, news, and special talks." },
    { label: "Short Break", time: "10:45 AM", detail: "15 minutes of rejuvenation and snacks." },
    { label: "Lunch Interval", time: "12:50 PM", detail: "40 minutes of nutritious dining and relaxation." }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Cinematic Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1495539406979-bf61750d38ad?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover animate-[zoom_20s_infinite_alternate]" 
            alt="School clock and corridor" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Operational Rhythm</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            A Day at <span className="text-secondary not-italic underline decoration-2 underline-offset-8">KPS.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            Precision in schedule ensures excellence in outcome. Explore our carefully structured phase-wise timings.
          </p>
        </div>
      </section>

      {/* Phase-wise Breakdown */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Academic Hours</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">Structured for <br /> <span className="italic">Maximized Potential.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schoolSchedules.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-start relative overflow-hidden group-hover:-translate-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-primary mb-2 italic">{item.phase}</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-8">{item.grades}</p>
                  <p className="text-2xl font-black text-primary mb-6">{item.time}</p>
                  <p className="text-black text-sm leading-relaxed mb-10">{item.desc}</p>
                  <div className="mt-auto pt-8 border-t border-gray-200 w-full flex items-center justify-between">
                     <span className="text-[9px] font-black uppercase tracking-widest text-black">Monday - Friday</span>
                     <CheckCircle2 className="text-secondary" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Milestones */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
               <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Daily Arc</h4>
               <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic">Key Moments of the <span className="text-secondary not-italic">Session.</span></h2>
               <div className="space-y-8">
                  {milestones.map((ms, i) => (
                    <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white transition-all duration-500 group">
                       <div className="flex items-center gap-6">
                          <div className="text-3xl font-serif font-black text-secondary italic w-24 group-hover:text-primary transition-colors">{ms.time}</div>
                          <div className="h-10 w-px bg-white/10 group-hover:bg-primary/10"></div>
                          <div>
                             <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{ms.label}</h4>
                             <p className="text-white/40 text-xs group-hover:text-black transition-colors">{ms.detail}</p>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="bg-white rounded-[4rem] p-12 lg:p-20 text-primary shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                  <Calendar className="text-secondary mb-8" size={64} strokeWidth={1.5} />
                  <h3 className="text-3xl font-serif font-bold mb-6 italic text-primary">Saturday Schedule</h3>
                  <p className="text-black text-lg leading-relaxed mb-10 font-medium">
                    The <strong>1st, 3rd, and 5th Saturdays</strong> are working days for Grades 3 to 12. 
                  </p>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                     <p className="text-[10px] font-black uppercase tracking-widest text-secondary mb-2">Saturday Hours</p>
                     <p className="text-xl font-black">08:30 AM – 12:30 PM</p>
                  </div>
                  <p className="mt-8 text-xs text-black italic">* Foundational Phase (Pre-K to Grade 2) has all Saturdays off.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Visitor Hours */}
      <section className="py-24 bg-white overflow-hidden">
         <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
               <div className="lg:w-1/2 reveal">
                  <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Administration</h4>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Office & <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Visitor Hours.</span></h2>
                  <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                    To maintain the academic sanctity of the campus, we request parents and visitors to strictly adhere to the following interaction hours.
                  </p>
                  <div className="space-y-6">
                     <div className="flex gap-6 group">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                           <Users size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-primary mb-2">Principal Interaction</h4>
                           <p className="text-black text-sm">By prior appointment only: 02:30 PM – 03:30 PM (Mon-Fri)</p>
                        </div>
                     </div>
                     <div className="flex gap-6 group">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                           <Phone size={28} />
                        </div>
                        <div>
                           <h4 className="text-xl font-bold text-primary mb-2">Administrative Office</h4>
                           <p className="text-black text-sm">Open for fee payments and enquiries: 08:00 AM – 04:30 PM</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 reveal delay-400">
                  <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary">
                     <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="School Administration Office" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final Note / Alert */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 reveal">
           <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 text-center flex flex-col items-center">
              <AlertTriangle className="text-secondary mb-8" size={64} />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 italic max-w-2xl leading-relaxed">
                 "Punctuality is the soul of business, but it's the 
                 <span className="text-secondary not-italic"> discipline of greatness </span> in education."
              </h2>
              <div className="w-24 h-1 bg-secondary mb-12 rounded-full"></div>
              <p className="text-black max-w-2xl mx-auto mb-12 text-lg">
                 Students arriving late more than 3 times in a term will be required to meet the 
                 Disciplinary Committee along with parents.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <Link to="/school/conduct" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                    View Code of Conduct
                 </Link>
                 <Link to="/academics/holidays" className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                    Holiday Calendar
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic">Ready to experience <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">the KPS lifestyle?</span></h2>
           <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
              Book a Campus Visit
           </button>
        </div>
      </section>
    </main>
  );
};

export default Timings;
