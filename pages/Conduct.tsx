
import React, { useEffect } from 'react';
import { 
  ShieldCheck, Scale, Users, Heart, Book, 
  Gavel, Smartphone, Globe, Info, CheckCircle2, 
  AlertCircle, Download, ChevronRight, ArrowRight 
} from 'lucide-react';

const Conduct: React.FC = () => {
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

  const corePillars = [
    { title: "Integrity", desc: "Upholding honesty in academics and interpersonal relationships.", icon: ShieldCheck, color: "text-primary", bg: "bg-primary/5" },
    { title: "Respect", desc: "Valuing diversity, personal space, and the dignity of every individual.", icon: Users, color: "text-secondary", bg: "bg-secondary/5" },
    { title: "Responsibility", desc: "Owning one's actions, property, and academic progress.", icon: Scale, color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Empathy", desc: "Nurturing a supportive environment free of bullying and exclusion.", icon: Heart, color: "text-red-500", bg: "bg-red-50" }
  ];

  const rules = [
    { category: "Campus Discipline", points: ["Mandatory use of English for communication.", "Zero tolerance for vandalism of school property.", "Proper decorum in the auditorium and laboratories."] },
    { category: "Attendance", points: ["Minimum 85% attendance required for promotion.", "Leave of absence must be pre-sanctioned via the school app.", "Punctuality for morning assembly is non-negotiable."] },
    { category: "Digital Ethics", points: ["Mobile phones strictly prohibited for students on campus.", "Ethical use of social media regarding school reputation.", "Cyber-bullying is treated as a severe offense."] }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1544717297-fa95b33979d7?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="School ethics and standards" 
          />
          <div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Ethics & Integrity</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Code of <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Conduct.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            Discipline is the bridge between goals and accomplishment. Our standards ensure a safe and productive sanctuary for every learner.
          </p>
        </div>
      </section>

      {/* Core Values Pillars */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The KPS Ethos</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Pillars of Character</h2>
            <p className="text-black">Our code is not a list of restrictions, but a commitment to excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillars.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rules Breakdown */}
      <section className="py-24 bg-gray-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {rules.map((rule, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="bg-white p-12 rounded-[4rem] shadow-xl border border-gray-100 h-full">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white">
                      <Book size={20} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary italic">{rule.category}</h3>
                  </div>
                  <ul className="space-y-6">
                    {rule.points.map((pt, idx) => (
                      <li key={idx} className="flex gap-4 group">
                        <CheckCircle2 className="text-secondary shrink-0 group-hover:scale-110 transition-transform" size={20} />
                        <p className="text-black text-sm leading-relaxed font-medium">{pt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disciplinary Policy */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Fairness & Justice</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-10 leading-tight italic">Our Restorative <br /><span className="text-secondary not-italic">Justice Approach.</span></h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                At KPS, we believe discipline should be educational rather than punitive. Our Disciplinary Committee works towards restoring harmony and helping students understand the impact of their choices.
              </p>
              <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <Gavel className="text-secondary" size={32} strokeWidth={1.5} />
                  <h4 className="text-xl font-bold italic">Due Process</h4>
                </div>
                <p className="text-white/40 text-sm leading-relaxed italic">
                  "Every disciplinary case is heard with impartiality. Students are given a fair chance to explain their perspective, and parents are kept informed at every stage of the resolution."
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
              <div className="grid grid-cols-1 gap-6">
                 {[
                   { title: "Verbal Warning", desc: "First-level correction for minor behavioral slips.", icon: Info },
                   { title: "Parent Conference", desc: "Meeting with HOD/Principal for recurring issues.", icon: Users },
                   { title: "Behavioral Probation", desc: "Formal monitoring period for severe infractions.", icon: AlertCircle }
                 ].map((step, i) => (
                   <div key={i} className="flex gap-6 p-8 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white hover:text-primary transition-all duration-500 group">
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                         <step.icon size={28} />
                      </div>
                      <div>
                         <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                         <p className="text-white/40 group-hover:text-black text-sm">{step.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cyber Safety / Tech Policy */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-gray-50 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-1/2">
                 <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Students using technology responsibly" />
                    <div className="absolute top-8 left-8">
                       <Smartphone className="text-white opacity-50" size={64} strokeWidth={1} />
                    </div>
                 </div>
              </div>
              <div className="lg:w-1/2">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Digital Citizenship</h4>
                 <h2 className="text-4xl font-serif font-bold text-primary mb-8 leading-tight">Navigating the <span className="text-secondary">Digital Frontier.</span></h2>
                 <p className="text-black text-lg mb-8 leading-relaxed">
                   As a tech-forward institution, we prioritize digital safety. Our students are taught to be 'Upstanders' rather than 'Bystanders' in the face of cyber misconduct.
                 </p>
                 <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-primary font-bold">
                       <CheckCircle2 className="text-secondary" size={18} /> No mobile phone usage on campus grounds.
                    </div>
                    <div className="flex items-center gap-3 text-primary font-bold">
                       <CheckCircle2 className="text-secondary" size={18} /> Respectful online interactions with faculty and peers.
                    </div>
                    <div className="flex items-center gap-3 text-primary font-bold">
                       <CheckCircle2 className="text-secondary" size={18} /> Adherence to the school's firewall and usage policies.
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Download Handbook */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <div className="max-w-4xl mx-auto flex flex-col items-center">
              <Download className="text-secondary mb-8" size={64} strokeWidth={1.5} />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-10 italic">Download the <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Student Handbook.</span></h2>
              <p className="text-black text-lg mb-12 max-w-2xl">
                The comprehensive guide to all school policies, disciplinary structures, and behavioral expectations.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                 <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center group">
                    Download Handbook PDF <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                 </button>
                 <button className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                    Anti-Bullying Cell
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Footer Invite */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Integrity is doing the right thing, <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">even when no one is watching.</span></h2>
           <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
              Back to School Life
           </button>
        </div>
      </section>
    </main>
  );
};

export default Conduct;
