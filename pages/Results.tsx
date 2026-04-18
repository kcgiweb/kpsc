
import React, { useEffect } from 'react';
import { 
  GraduationCap, TrendingUp, Award, Star, 
  Users, BarChart3, Zap, ArrowRight, 
  ChevronRight, Quote, Sparkles, Target,
  CheckCircle2, Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Results: React.FC = () => {
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

  const boardStats = [
    { grade: "Class 12 (AISSCE)", pass: "100%", distinctions: "78%", above90: "45%" },
    { grade: "Class 10 (AISSE)", pass: "100%", distinctions: "82%", above90: "52%" }
  ];

  const toppers = [
    { name: "Aditi Sharma", stream: "Science", score: "98.4%", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Rohan Hegde", stream: "Commerce", score: "97.8%", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200" },
    { name: "Sanya Malhotra", stream: "Humanities", score: "98.1%", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200" }
  ];

  const competitiveExamStats = [
    { exam: "IIT-JEE Advanced", qualifiers: "18", color: "bg-blue-50", text: "text-blue-600" },
    { exam: "NEET (Medicine)", qualifiers: "24", color: "bg-red-50", text: "text-red-600" },
    { exam: "CLAT (Law)", qualifiers: "12", color: "bg-orange-50", text: "text-orange-600" },
    { exam: "CUET (Premier Unis)", qualifiers: "45", color: "bg-green-50", text: "text-green-600" }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover scale-100 animate-[zoom_20s_infinite_alternate]" 
            alt="Graduating Students" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Proven Excellence</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100 italic">
            Academic <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Results.</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">
            Celebrating a decade of consistent 100% board results and remarkable success in national competitive examinations.
          </p>
        </div>
      </section>

      {/* Board Result Snapshot */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The KPS Benchmark</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Consistently <br /><span className="text-secondary not-italic underline decoration-2 underline-offset-8">Distinguished.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed mb-10">
                <p>
                  Year after year, Karnataka Public School sets new records in the CBSE Board Examinations. Our focus on conceptual clarity, regular mock assessments, and personalized mentorship ensures that every student performs at their absolute peak.
                </p>
                <p>
                  In the 2023-24 academic session, KPS maintained its streak of 100% pass results, with a record number of students scoring 'Perfect 100s' in core subjects.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                 <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                    <span className="text-4xl font-black text-primary italic">10+</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Years of 100% Results</p>
                 </div>
                 <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                    <span className="text-4xl font-black text-primary italic">65%</span>
                    <p className="text-[9px] font-black uppercase tracking-widest text-black mt-2">Aggregate Distinction Rate</p>
                 </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="bg-primary rounded-[4rem] p-12 lg:p-20 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
                  <BarChart3 className="text-secondary mb-10" size={64} strokeWidth={1.5} />
                  <div className="space-y-12">
                     {boardStats.map((stat, i) => (
                       <div key={i} className="group">
                          <h4 className="text-xl font-bold mb-6 italic flex items-center gap-3">
                             <span className="w-8 h-px bg-secondary"></span> {stat.grade}
                          </h4>
                          <div className="grid grid-cols-3 gap-4">
                             <div>
                                <p className="text-2xl font-black text-secondary">{stat.pass}</p>
                                <p className="text-[9px] uppercase font-bold text-white/40 tracking-widest">Pass</p>
                             </div>
                             <div>
                                <p className="text-2xl font-black text-white">{stat.distinctions}</p>
                                <p className="text-[9px] uppercase font-bold text-white/40 tracking-widest">Distinction</p>
                             </div>
                             <div>
                                <p className="text-2xl font-black text-white">{stat.above90}</p>
                                <p className="text-[9px] uppercase font-bold text-white/40 tracking-widest">Above 90%</p>
                             </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame - Individual Toppers */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Wall of Brilliance</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Meet our <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Toppers.</span></h2>
             <p className="text-black">The faces behind the scores—recognizing the hard work and dedication of our academic stars.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppers.map((topper, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-white rounded-[3.5rem] p-4 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className="relative w-full h-80 rounded-[3rem] overflow-hidden mb-8">
                     <img src={topper.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={topper.name} />
                     <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                        <span className="bg-secondary text-white px-6 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-xl">
                           {topper.score}
                        </span>
                     </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2 italic">{topper.name}</h3>
                  <p className="text-black font-bold text-[10px] uppercase tracking-widest mb-6">{topper.stream} Stream</p>
                  <div className="mt-auto w-full pt-6 border-t border-gray-50 flex items-center justify-center gap-2">
                     <Sparkles className="text-secondary" size={14} />
                     <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Class of 2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Exam Success */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
              <div className="lg:w-1/2 reveal">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Beyond Schooling</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">National <span className="text-secondary not-italic">Placements.</span></h2>
                 <p className="text-white/60 text-lg mb-10 leading-relaxed font-medium">
                   Our integrated coaching programs for Grade 11 & 12 empower students to crack India's toughest entrance exams without the need for external tuition.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {competitiveExamStats.map((item, i) => (
                      <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500 group">
                         <div className={`w-12 h-12 rounded-xl ${item.color} ${item.text} flex items-center justify-center mb-6`}>
                            <Target size={24} />
                         </div>
                         <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{item.exam}</h4>
                         <p className="text-white/40 group-hover:text-black text-xs"><strong>{item.qualifiers}</strong> Students Qualified in 2024</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="lg:w-1/2 reveal delay-400">
                 <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5">
                    <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student in Graduation" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                       <Quote className="text-secondary mb-4" size={40} />
                       <p className="text-2xl font-serif italic max-w-sm">"The transition from KPS to IIT was seamless, thanks to the analytical rigor I was exposed to here."</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Comparative Analysis Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="bg-gray-50 rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 reveal">
              <div className="text-center max-w-2xl mx-auto mb-16">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Comparative Edge</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary italic">Setting the <span className="text-secondary not-italic">Standard.</span></h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div className="space-y-10">
                    <div>
                       <div className="flex justify-between items-center mb-4">
                          <span className="font-black text-primary uppercase text-[10px] tracking-widest">KPS Average Score</span>
                          <span className="text-secondary font-black">88.4%</span>
                       </div>
                       <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary w-[88%] animate-[progress_2s_ease-out]"></div>
                       </div>
                    </div>
                    <div>
                       <div className="flex justify-between items-center mb-4">
                          <span className="font-black text-primary uppercase text-[10px] tracking-widest">National Average (CBSE)</span>
                          <span className="text-black font-black">74.2%</span>
                       </div>
                       <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-black w-[74%] animate-[progress_2s_ease-out]"></div>
                       </div>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-secondary shrink-0" size={24} />
                       <p className="text-black font-medium leading-relaxed"><strong>100% of students</strong> in the last batch secured admissions into Tier-1 universities.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-secondary shrink-0" size={24} />
                       <p className="text-black font-medium leading-relaxed"><strong>Zero failures</strong> recorded since the school's board-level upgrade in 2012.</p>
                    </div>
                    <div className="flex items-start gap-4">
                       <CheckCircle2 className="text-secondary shrink-0" size={24} />
                       <p className="text-black font-medium leading-relaxed">Specialized <strong>counseling cell</strong> to help students navigate post-board anxiety.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic leading-tight">Empower your child to reach <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">new heights.</span></h2>
           <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                 Apply for Admission
              </Link>
              <button className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all flex items-center gap-3">
                 <Download size={16} /> Download Full 2024 Report
              </button>
           </div>
        </div>
      </section>
    </main>
  );
};

export default Results;
