
import React, { useEffect } from 'react';
import { Laptop, Code, Cpu, Database, Play, Globe, Sparkles, BookOpen, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LearningProgram: React.FC = () => {
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

  const features = [
    { title: "Coding & AI", desc: "Mandatory modules from Grade 4 onwards covering Python, Java, and Machine Learning basics.", icon: Code },
    { title: "Robotics Hub", desc: "Hands-on engineering using LEGO Mindstorms, Arduino, and 3D prototyping tools.", icon: Cpu },
    { title: "Adaptive Math", desc: "Data-driven learning platforms that adjust difficulty based on student proficiency.", icon: Database },
    { title: "VR History", desc: "Virtual Reality field trips to historical landmarks and deep-space simulations.", icon: Globe }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Students in a tech-enabled classroom" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/30"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Integrated Pedagogy</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
            Learning <br /> In <span className="text-secondary italic">Sync.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200">
            How our world-class infrastructure directly powers our academic programs.
          </p>
        </div>
      </section>

      {/* The Digital Native Philosophy */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The Methodology</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Blended <br /><span className="text-secondary italic">Excellence.</span></h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At KPS, technology is not an "extra" subject; it is the invisible enabler of our entire curriculum. We utilize a "Blended Learning" model that combines traditional teacher-led instruction with high-tech adaptive platforms.
                </p>
                <p>
                  Every student has access to a dedicated device, and our campus-wide Wi-Fi 6 network ensures that learning never hits a bottleneck.
                </p>
              </div>
              <div className="mt-12">
                 <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl flex items-center group">
                    View Tech Modules <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                 </button>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div key={i} className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-secondary mb-8 group-hover:bg-primary group-hover:text-white transition-all shadow-lg`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-black text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Integrated Lab Experience */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
               <div className="lg:w-1/2 reveal">
                  <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Hands-on Learning</h4>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 italic">Beyond the <br /><span className="text-secondary not-italic">Printed Page.</span></h2>
                  <p className="text-white text-lg mb-10 leading-relaxed font-medium">
                    Our infrastructure allows for "Inquiry-Based" science education. Students don't just read about chemical reactions; they simulate them on interactive panels before conducting them in NABL-certified labs.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="flex flex-col">
                        <span className="text-4xl font-black text-secondary italic">40+</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white mt-2">Annual Projects</span>
                     </div>
                     <div className="flex flex-col">
                        <span className="text-4xl font-black text-secondary italic">120h</span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white mt-2">Lab Hours/Year</span>
                     </div>
                  </div>
               </div>
               <div className="lg:w-1/2 reveal delay-400">
                  <div className="relative p-6">
                     <div className="absolute inset-0 bg-white/5 rounded-[4rem] rotate-2 border border-white/10"></div>
                     <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student in Science Lab" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Graduation Impact */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-2/3">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Global Outcomes</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Digital Citizenship.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed font-medium">
                   Our infrastructure-enabled learning program ensures that by the time a student graduates from KPS, they are not just academically proficient, but also digitally resilient and ethically grounded in the use of technology.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/academics/overview" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all flex items-center group shadow-xl">
                       Academic Overview <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="relative p-12 bg-secondary rounded-[3rem] text-center text-white overflow-hidden shadow-xl">
                    <GraduationCap className="text-primary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif font-bold mb-4 italic text-primary">Future Ready</h3>
                    <p className="text-primary text-[10px] font-black uppercase tracking-widest">Alumni in Top Global Tech</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 italic">Invest in your child's <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">digital future.</span></h2>
           <Link to="/admissions/process" className="bg-primary text-white px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
              Apply Now
           </Link>
        </div>
      </section>
    </main>
  );
};

export default LearningProgram;
