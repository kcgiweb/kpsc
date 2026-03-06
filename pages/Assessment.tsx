
import React, { useEffect } from 'react';
import { 
  CheckCircle2, Clock, Calendar, BarChart3, 
  Users, Trophy, MessageSquare, ClipboardCheck, 
  ArrowRight, ShieldCheck, GraduationCap, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Assessment: React.FC = () => {
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

  const components = [
    { title: "Periodic Tests", icon: Clock, desc: "Monthly assessments to track short-term concept retention and clarify doubts early." },
    { title: "Portfolio Evaluation", icon: ClipboardCheck, desc: "A collection of student work demonstrating growth, effort, and achievement over time." },
    { title: "Subject Enrichment", icon: Star, desc: "Activities like lab work, map reading, and projects that bring theory to life." },
    { title: "Term Exams", icon: Calendar, desc: "Comprehensive examinations conducted twice a year to evaluate overall academic performance." }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Premium Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Evaluation Background" 
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Assessment Framework</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100">
            Measuring <span className="text-secondary italic">Potential.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Beyond marks and grades, our assessment system is a diagnostic tool for continuous improvement and holistic growth.
          </p>
        </div>
      </section>

      {/* Philosophy of Evaluation */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Methodology</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Evaluation for <br /> Learning.</h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                   At Karnataka Public School, all evaluation processes follow the latest CBSE Assessment and Evaluation Practices aligned with the National Education Policy (NEP) 2020. Our assessment system is designed to ensure fair, transparent, and holistic evaluation of every learner, focusing on conceptual understanding, competency development, and real life application of knowledge.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-8">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] rotate-3"></div>
                  <div className="relative bg-white p-12 rounded-[3.5rem] shadow-2xl border border-gray-100">
                     <BarChart3 className="text-secondary mb-8" size={64} strokeWidth={1.5} />
                     <h3 className="text-2xl font-serif font-bold text-primary mb-6 italic">The 360° Report</h3>
                     <p className="text-black leading-relaxed mb-8">
                        Our <strong>Holistic Progress Card (HPC)</strong> captures not just academic scores, but also socio-emotional skills, creativity, and physical fitness levels.
                     </p>
                     <div className="w-full h-px bg-gray-100 mb-8"></div>
                     <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black">Accredited by</span>
                        <div className="font-black text-primary text-sm">CBSE / NCERT</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Assessment Structure */}
      <section className="py-24 bg-gray-50">
         <div className="container mx-auto px-6">
            <div className="space-y-20">
               {/* 1. Competency Based Assessment */}
               <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 reveal">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6">1. Competency Based Assessment (As per CBSE 2024–25 Guidelines)</h3>
                  <p className="text-black text-sm leading-relaxed mb-6">
                     CBSE has emphasized competency focused questions to discourage rote learning and promote analytical and problem solving skills.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="bg-primary/5 p-8 rounded-3xl">
                        <h4 className="font-bold text-primary mb-4">For Classes IX–X</h4>
                        <ul className="space-y-2 text-sm text-black/80">
                           <li>• 50% Competency focused questions (MCQs, case based, source based)</li>
                           <li>• 20% MCQs (Select response)</li>
                           <li>• 30% Constructed response (Short & long answers)</li>
                        </ul>
                     </div>
                     <div className="bg-secondary/5 p-8 rounded-3xl">
                        <h4 className="font-bold text-primary mb-4">For Classes XI–XII</h4>
                        <ul className="space-y-2 text-sm text-black/80">
                           <li>• 40% Competency focused questions</li>
                           <li>• 20% MCQs (Select response)</li>
                           <li>• 40% Constructed response type questions</li>
                        </ul>
                     </div>
                  </div>
               </div>

               {/* 2. CCE Approach */}
               <div className="flex flex-col lg:flex-row gap-12 reveal">
                  <div className="lg:w-1/2 bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                     <h3 className="text-2xl font-serif font-bold text-primary mb-6">2. Continuous & Comprehensive Evaluation (CCE)</h3>
                     <p className="text-black text-sm mb-6">Although updated over time, CBSE continues to emphasize ongoing assessment practices that support holistic development.</p>
                     
                     <h4 className="font-bold text-secondary text-sm uppercase tracking-widest mb-3">Formative Assessment</h4>
                     <p className="text-xs text-black/70 mb-6">Quizzes, projects, assignments, discussions, and presentations conducted throughout the year.</p>

                     <h4 className="font-bold text-secondary text-sm uppercase tracking-widest mb-3">Summative Assessment</h4>
                     <p className="text-xs text-black/70">End of term assessments and CBSE Board Examinations evaluate overall understanding.</p>
                  </div>
                  <div className="lg:w-1/2 bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                     <h3 className="text-2xl font-serif font-bold text-primary mb-6">3. Internal & External Assessments</h3>
                     <p className="text-black text-sm mb-6">CBSE mandates a balanced evaluation system:</p>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                           <div>
                              <strong className="text-primary block text-sm">Internal Assessment</strong>
                              <span className="text-xs text-black/70">Periodic tests, notebook submission, subject enrichment activities, and practical work.</span>
                           </div>
                        </li>
                        <li className="flex items-start gap-3">
                           <CheckCircle2 className="text-secondary shrink-0 mt-1" size={18} />
                           <div>
                              <strong className="text-primary block text-sm">External Assessment</strong>
                              <span className="text-xs text-black/70">CBSE conducted board exams for Classes X & XII ensure national level uniformity and fairness.</span>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>

               {/* 4 & 5. Practical & Holistic */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
                  <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                     <h3 className="text-2xl font-serif font-bold text-primary mb-6">4. Practical & Project Based Evaluation</h3>
                     <p className="text-black text-sm mb-6">For subjects like Science, Mathematics, Social Science, IT, and Languages, CBSE includes:</p>
                     <div className="flex flex-wrap gap-3">
                        {["Practical exams", "Lab activities", "Real world projects", "Portfolio assessment"].map((item, i) => (
                           <span key={i} className="bg-gray-100 px-4 py-2 rounded-lg text-xs font-bold text-primary">{item}</span>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
                     <h3 className="text-2xl font-serif font-bold text-primary mb-6">5. Holistic Assessment (NEP 2020)</h3>
                     <p className="text-black text-sm mb-6">CBSE encourages evaluating students on:</p>
                     <ul className="space-y-2">
                        {["Critical & creative thinking", "Problem solving skills", "Conceptual clarity", "Values, attitudes & life skills"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-xs font-bold text-primary">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Parent Teacher Meetings */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Collaborative Progress</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Parental <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Partnership.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <MessageSquare size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-primary mb-2">Quarterly PTMs</h4>
                      <p className="text-black text-sm">Dedicated sessions for one-on-one discussion between parents and mentors to align on the child's growth path.</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <ShieldCheck size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-primary mb-2">Transparency Portal</h4>
                      <p className="text-black text-sm">Our online portal allows parents to track attendance, grades, and behavioral feedback in real-time.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-b-[10px] border-secondary">
                  <img src="https://images.unsplash.com/photo-1577896851231-70ef1460370e?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Parent Teacher Interaction" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation & Excellence */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
             <div className="lg:w-2/3">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Board Preparedness</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Elite Performance <br /> in Grades 10 & 12.</h2>
                <p className="text-black text-lg mb-10 leading-relaxed">
                   For our senior students, the assessment system shifts gears towards competitive excellence. Weekly mock tests, specialized remedial workshops, and individual counselor sessions ensure that every student is board-ready.
                </p>
                <div className="flex flex-wrap gap-4">
                   <Link to="/achievements/results" className="bg-secondary text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all flex items-center group shadow-xl">
                      View Board Results <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                   </Link>
                </div>
             </div>
             <div className="lg:w-1/3">
                <div className="relative p-12 bg-primary rounded-[3rem] text-center text-white overflow-hidden">
                   <GraduationCap className="text-secondary mx-auto mb-6" size={64} strokeWidth={1.5} />
                   <h3 className="text-2xl font-serif font-bold mb-4 italic">Distinction</h3>
                   <p className="text-white text-[10px] font-black uppercase tracking-widest">A Legacy of Top Ranks</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Investing in your child's <br /> <span className="text-secondary italic">complete success.</span></h2>
          <div className="flex justify-center gap-6">
            <Link to="/admissions/process" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
               Apply for 2024-25
            </Link>
            <Link to="/academics/overview" className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
               Back to Overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Assessment;
