
import React, { useEffect } from 'react';
import { BookOpen, Target, Sparkles, Brain, Microscope, Globe, Music, Laptop, GraduationCap, ChevronRight, ArrowRight, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicsOverview: React.FC = () => {
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

  const pillars = [
    { title: "Conceptual Mastery", icon: Brain, desc: "We focus on 'The Why' behind every 'How', ensuring students understand the root of every concept.", color: "text-blue-500", bg: "bg-blue-50" },
    { title: "Experiential Learning", icon: Sparkles, desc: "Academic concepts are brought to life through hands-on projects, field trips, and real-world simulations.", color: "text-orange-500", bg: "bg-orange-50" },
    { title: "Global Perspective", icon: Globe, desc: "Our curriculum prepares students for international challenges by integrating global case studies.", color: "text-green-500", bg: "bg-green-50" },
    { title: "Personalized Growth", icon: Target, desc: "Small class sizes allow our faculty to tailor instruction to each child's unique learning pace.", color: "text-primary", bg: "bg-primary/5" }
  ];

  const departments = [
    { name: "STEM Excellence", icon: Microscope, outcome: "Fostering analytical rigor and a passion for scientific discovery." },
    { name: "Humanities & Law", icon: BookOpen, outcome: "Building empathy, historical context, and strong rhetorical skills." },
    { name: "Tech & Coding", icon: Laptop, outcome: "Ensuring digital fluency and computational logic from early years." },
    { name: "Creative Arts", icon: Music, outcome: "Nurturing the aesthetic senses and creative expression through diverse media." }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Students in a bright classroom" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/50 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">The KPS Blueprint</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-6 reveal delay-100">
            Academics <span className="text-secondary italic">Overview.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200">
            A harmonious blend of tradition and innovation, designed to sculpt the thinkers, innovators, and leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Our Approach</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Where Learning <br /> Meets Passion.</h2>
              <div className="space-y-6 text-black text-lg leading-relaxed">
                <p>
                  At Karnataka Public School, we follow the CBSE (Central Board of Secondary Education) curriculum, known for its rigorous academic standards and comprehensive approach. Our curriculum is designed to provide a strong foundation in core subjects while encouraging students to explore their interests and develop critical thinking skills.
                </p>
                <p>
                  We believe that learning should be an active and engaging process. Our educators use a variety of teaching methodologies, including activity based learning, project based learning, and experiential learning, to make concepts come alive and ensure deep understanding.
                </p>
                <p>
                  Our academic program is complemented by a wide range of co curricular activities, sports, and values education, ensuring the holistic development of every student. We strive to create a nurturing environment where students feel empowered to reach their full potential and become lifelong learners.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">15:1</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">Student-Teacher Ratio</span>
                </div>
                <div className="w-px h-12 bg-gray-100"></div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black text-primary">100%</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">CBSE Excellence</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <pillar.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{pillar.title}</h3>
                  <p className="text-black text-[13px] leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Academic Domains</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Subject Specializations</h2>
            <p className="text-white">Our departments are led by subject matter experts who bring years of research and pedagogical experience to the classroom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, i) => (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-[3rem] h-full flex flex-col items-center text-center group hover:bg-white hover:border-white transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-secondary mb-8 group-hover:bg-primary/5 transition-all">
                    <dept.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary mb-4 transition-colors">{dept.name}</h3>
                  <p className="text-white group-hover:text-black text-sm leading-relaxed">{dept.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
            <div className="lg:w-1/2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Innovation</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Digital-Native <br /> Learning.</h2>
              <div className="space-y-8">
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Laptop size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-primary mb-2">Smart Classrooms</h4>
                      <p className="text-black text-sm">Interactive panels and high-speed campus-wide connectivity make learning immersive and collaborative.</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Brain size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-primary mb-2">AI-Integrated Feedback</h4>
                      <p className="text-black text-sm">We use adaptive learning platforms to track student progress and provide data-driven insights to parents.</p>
                   </div>
                </div>
                <div className="flex gap-6 group">
                   <div className="shrink-0 w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Lightbulb size={28} />
                   </div>
                   <div>
                      <h4 className="text-xl font-bold text-primary mb-2">STEM & Robotics Lab</h4>
                      <p className="text-black text-sm">Hands-on exposure to coding, 3D printing, and mechanical engineering from Grade 4 onwards.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal delay-400">
               <div className="relative p-6">
                  <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-3"></div>
                  <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl">
                     <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Student using tablet" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graduation Pathway */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
           <div className="bg-white rounded-[4rem] p-12 lg:p-24 shadow-2xl shadow-primary/5 flex flex-col lg:flex-row items-center gap-16 reveal">
              <div className="lg:w-2/3">
                 <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Success Path</h4>
                 <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Ready for the World.</h2>
                 <p className="text-black text-lg mb-10 leading-relaxed">
                   Our academic framework is meticulously aligned with the CBSE board, supplemented by competitive exam coaching (IIT-JEE, NEET, CLAT) for senior students, ensuring they are prepared for the most prestigious universities in India and abroad.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Link to="/academics/curriculum" className="bg-secondary text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all flex items-center group">
                       View Curriculum <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                    <Link to="/achievements/results" className="bg-gray-100 text-primary px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
                       Board Results
                    </Link>
                 </div>
              </div>
              <div className="lg:w-1/3">
                 <div className="relative p-12 bg-primary rounded-[3rem] text-center text-white overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <GraduationCap className="text-secondary mx-auto mb-6" size={64} strokeWidth={1.5} />
                    <h3 className="text-2xl font-serif font-bold mb-4 italic">10,000+</h3>
                    <p className="text-white/60 text-xs font-black uppercase tracking-widest">Global Alumni Base</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Nurturing curiosity into <br /> <span className="text-secondary not-italic underline decoration-2 underline-offset-8">excellence.</span></h2>
          <p className="text-black max-w-xl mx-auto mb-12">Admissions for the 2024-25 academic year are currently open for all grades. Secure your child's seat in an ecosystem of growth.</p>
          <div className="flex justify-center gap-6">
            <Link to="/admissions/process" className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
               Apply Now
            </Link>
            <Link to="/about/why-kps" className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
               Why Choose KPS?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AcademicsOverview;
