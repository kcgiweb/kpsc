
import React, { useEffect } from 'react';
import { Quote, Sparkles, GraduationCap, Globe, Heart, ShieldCheck, ChevronRight, Mail, Phone, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrincipalsMessage: React.FC = () => {
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

  const priorities = [
    { title: "Academic Mastery", icon: BookOpen, desc: "Blending global curricula with local relevance." },
    { title: "Social Intelligence", icon: Heart, desc: "Fostering empathy and leadership in every heart." },
    { title: "Digital Fluency", icon: Sparkles, desc: "Ensuring every child is a tech-native innovator." },
    { title: "Safe Environment", icon: ShieldCheck, desc: "A sanctuary for physical and emotional growth." }
  ];

  return (
    <main className="bg-white">
      {/* Editorial Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Director's Message Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6">Executive Insight</h4>
            <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
              Letter from <br /> the <span className="text-secondary italic">Principal.</span>
            </h1>
            <div className="flex items-center space-x-4">
               <div className="w-12 h-px bg-white/30"></div>
               <span className="text-white text-xs font-bold uppercase tracking-widest">Leadership With Purpose</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile & Message */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Left Column: Image & Bio */}
            <div className="lg:w-1/3 reveal">
               <div className="sticky top-32">
                  <div className="relative">
                     <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] translate-x-4 translate-y-4 -rotate-2"></div>
                     <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                        <img 
                          src="https://res.cloudinary.com/dbkmzja6c/image/upload/v1772532645/ChatGPT_Image_Mar_3_2026_03_31_55_PM_cvwoed.png" 
                          className="w-full aspect-[4/5] object-cover" 
                          alt="Principal Portrait" 
                        />
                     </div>
                  </div>
                  <div className="mt-12 p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                     <h3 className="text-2xl font-serif font-bold text-primary mb-2">Principal</h3>
                     <p className="text-secondary font-black uppercase text-[10px] tracking-widest mb-6">Karnataka Public School</p>
                     <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-black hover:text-primary transition-colors cursor-pointer">
                           <Mail size={16} />
                           <span className="text-xs font-bold">ketkps@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3 text-black hover:text-primary transition-colors cursor-pointer">
                           <Phone size={16} />
                           <span className="text-xs font-bold">63668 68954</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column: The Message */}
            <div className="lg:w-2/3 reveal delay-300">
               <div className="max-w-3xl">
                  <Quote className="text-secondary/10 mb-8" size={80} />
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-12 leading-tight">
                    Message from the Principal
                  </h2>
                  
                  <div className="prose prose-lg text-black leading-relaxed font-medium space-y-8">
                     <p>
                        At Karnataka Public School, our work is guided by a clear and unwavering purpose: to shape young minds into thoughtful, capable, and responsible individuals. Education here is viewed as a continuous journey of growth—one that demands curiosity, discipline, empathy, and resilience from every learner.
                     </p>
                     
                     <p>
                        Our approach places strong emphasis on holistic development, ensuring that students grow not only in academic proficiency but also in character, creativity, communication, and life skills. Each classroom, activity, and interaction is thoughtfully designed to help students develop independence in thought and confidence in action.
                     </p>

                     <p>
                        The strength of this institution lies in its committed team of educators who bring expertise, dedication, and genuine passion for teaching. Their consistent efforts create an environment where students are encouraged to question, explore, and strive for excellence. Modern infrastructure, a CBSE aligned curriculum, and a values driven culture work together to lay a solid foundation for future readiness.
                     </p>

                     <p>
                        As Principal, my focus remains on maintaining high standards, nurturing a culture of respect and responsibility, and ensuring that each learner receives the guidance they need to reach their fullest potential. The partnership and support of parents continue to play an essential role in shaping the educational experience of our students.
                     </p>

                     <p>
                        Our collective goal is simple yet profound—to prepare young individuals who think deeply, act with integrity, and contribute positively to the world around them.
                     </p>
                  </div>

                  <div className="mt-20 pt-10 border-t border-gray-100">
                     <p className="text-black mb-2">Warm Regards,</p>
                     <p className="text-2xl font-poppins font-bold text-primary mb-2">Ms. Sneha Kavatekar</p>
                     <p className="text-secondary font-black uppercase text-[10px] tracking-widest">Principal,</p>
                     <p className="text-secondary font-black uppercase text-[10px] tracking-widest">Karnataka Public School</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="text-center max-w-2xl mx-auto mb-20 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">The KPS Manifesto</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Strategic Pillars</h2>
              <p className="text-black">A clear-eyed focus on the elements that ensure student success in the 21st century.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {priorities.map((item, i) => (
                <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                   <div className="bg-white p-10 rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-4 transition-all duration-500 h-full flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                         <item.icon size={32} />
                      </div>
                      <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                      <p className="text-black text-sm leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Footer Invite Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-secondary p-1 rounded-[4rem] shadow-2xl reveal">
             <div className="bg-primary rounded-[3.8rem] py-20 px-10 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 relative z-10">Discover Our <span className="text-secondary">Excellence.</span></h2>
                <p className="text-white text-lg mb-12 relative z-10 max-w-2xl mx-auto">
                   Step inside a world where potential meets opportunity. Our campus is open for visits.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                   <Link to="/admissions/process" className="bg-secondary text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl">
                      Admissions Open
                   </Link>
                   <Link to="/about/us" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white/20 transition-all">
                      Learn More
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrincipalsMessage;
