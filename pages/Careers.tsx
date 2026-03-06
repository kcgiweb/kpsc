import React, { useEffect } from 'react';
import { Briefcase, Mail, MapPin, Clock, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
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

  const positions = [
    {
      title: "TGT - Maths",
      type: "Full Time",
      department: "Academics",
      description: "We are looking for an experienced and passionate Mathematics teacher for TGT level to join our academic team.",
      requirements: [
        "B.Ed / M.Sc in Mathematics",
        "Minimum 3 years of teaching experience",
        "Strong command over the subject",
        "Excellent communication skills"
      ]
    },
    {
      title: "TGT - Social Studies",
      type: "Full Time",
      department: "Academics",
      description: "Seeking a dedicated Social Studies teacher to inspire students and foster a love for history, geography, and civics.",
      requirements: [
        "B.Ed / M.A in History/Geography/Political Science",
        "Minimum 3 years of teaching experience",
        "Ability to make social sciences engaging",
        "Proficiency in English"
      ]
    },
    {
      title: "Music & Dance Teacher",
      type: "Full Time",
      department: "Co-Curricular",
      description: "Passionate Music & Dance teacher required to nurture the artistic talents of our students.",
      requirements: [
        "Degree/Diploma in Music/Dance",
        "Experience in training school students",
        "Knowledge of various dance forms/instruments",
        "Enthusiastic and creative approach"
      ]
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789502/SLA_8773_fjhm78.jpg" 
            className="w-full h-full object-cover" 
            alt="Careers at KPS" 
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/40 to-primary"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Join Our Team</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-8 leading-tight reveal delay-100 italic">
            Shape the <span className="text-secondary not-italic underline decoration-4 underline-offset-8">Future.</span>
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg reveal delay-200 font-medium">
            Be a part of a vibrant community dedicated to educational excellence and holistic growth.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Opportunities</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 italic">Current <span className="text-secondary not-italic underline decoration-2 underline-offset-8">Openings.</span></h2>
            <p className="text-black">Explore exciting career opportunities at Karnataka Public School.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positions.map((job, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary/5 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {job.type}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{job.title}</h3>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-4">{job.department}</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {job.description}
                </p>
                
                <div className="mb-8">
                  <h5 className="font-bold text-sm mb-3 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-secondary" /> Requirements:
                  </h5>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={`mailto:ketkps@gmail.com?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in applying for the ${job.title} position at Karnataka Public School.%0D%0A%0D%0APlease find my resume attached.%0D%0A%0D%0ARegards,%0D%0A[Your Name]`}
                  className="inline-flex items-center justify-center w-full bg-primary text-white py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-secondary transition-colors group-hover:shadow-lg"
                >
                  Apply via Email <ArrowRight size={14} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact for Careers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden reveal">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 italic">Don't see a suitable role?</h2>
              <p className="text-white/80 mb-10 text-lg">
                We are always looking for talented educators. Send your resume to our HR department for future consideration.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="mailto:Info@kpscbse.edu.in" className="flex items-center justify-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-secondary hover:text-white transition-all">
                  <Mail size={16} /> Info@kpscbse.edu.in
                </a>
                <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest">
                  <Phone size={16} /> +91 90718 87788
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Careers;
