
import React, { useEffect, useState } from 'react';
import { 
  Target, Zap, BookOpen, Layers, Lightbulb, Compass, 
  Award, Star, ArrowUpRight, GraduationCap, Globe, 
  Beaker, Calculator, Languages, Palette, ChevronDown, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

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
  }, [activeTab]);

  const stages = [
    { 
      title: "Foundational Phase", 
      level: "Pre-K to Grade 2", 
      focus: "Play, Inquiry & Social Discovery",
      desc: "Laying the seeds of curiosity through tactile learning and emotional intelligence exercises.",
      subjects: ["English Phonics", "Number Magic", "EVS (Nature)", "Art & Craft", "Physical Play"],
      icon: Lightbulb,
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    { 
      title: "Preparatory Phase", 
      level: "Grades 3 to 5", 
      focus: "Skill Development & Literacy",
      desc: "Focusing on core linguistic and mathematical fluency while introducing collaborative projects.",
      subjects: ["English", "Mathematics", "Science", "Social Science", "2nd Language", "ICT Basics"],
      icon: BookOpen,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    { 
      title: "Middle Mastery", 
      level: "Grades 6 to 8", 
      focus: "Analytical Thinking & STEM",
      desc: "Deep diving into scientific inquiry, history, and advanced computational logic.",
      subjects: ["Physics/Chem/Bio", "Algebra/Geometry", "3rd Language", "Coding", "Civics & Geography"],
      icon: Zap,
      color: "text-purple-500",
      bg: "bg-purple-50"
    },
    { 
      title: "Senior Excellence", 
      level: "Grades 9 to 12", 
      focus: "Leadership & Specialization",
      desc: "Rigorous preparation for board exams and global university admissions with career guidance.",
      subjects: ["CBSE Core Curriculum", "Stream-wise Electives", "AI & Robotics", "Business Studies", "Humanities"],
      icon: GraduationCap,
      color: "text-primary",
      bg: "bg-primary/5"
    }
  ];

  const seniorStreams = [
    { 
      name: "Science Stream", 
      desc: "For future engineers, doctors, and researchers.",
      options: ["Physics", "Chemistry", "Mathematics", "Biology / CS / Economics", "English Core"]
    },
    { 
      name: "Commerce Stream", 
      desc: "For aspiring business leaders and economists.",
      options: ["Accountancy", "Business Studies", "Economics", "Math / IP / PE", "English Core"]
    },
    { 
      name: "Humanities Stream", 
      desc: "For future diplomats, lawyers, and social scientists.",
      options: ["History", "Political Science", "Psychology / Sociology", "Economics", "English Core"]
    }
  ];

  return (
    <main className="bg-white">
      {/* Editorial Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover" 
            alt="Curriculum Hero" 
          />
          <div className="absolute inset-0 bg-primary/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Academic Framework</h4>
          <h1 className="text-white text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
            Curriculum <br /> with <span className="text-secondary italic">Conscience.</span>
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed font-medium reveal delay-100">
            At Karnataka Public School, our curriculum is aligned with the Central Board of Secondary Education (CBSE) guidelines and is designed to nurture academic excellence, holistic development, and real world readiness. We follow a balanced and child centered approach that encourages curiosity, conceptual understanding, and lifelong learning.
          </p>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Methodology</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Teaching Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Experiential & Activity Based Learning", desc: "Students learn through hands on activities, experiments, projects, and real-life applications to build deeper understanding and critical thinking.", icon: Beaker },
              { title: "Concept Mastery & Skill Development", desc: "Our teaching approach focuses on strong foundational concepts in all subjects while building essential skills such as communication, creativity, logical reasoning, and problem solving.", icon: Lightbulb },
              { title: "Blended Learning Methods", desc: "Interactive classrooms, digital tools, smart boards, and multimedia resources enrich classroom experiences and make learning engaging.", icon: Layers },
              { title: "Individual Attention", desc: "Teachers provide personalized support to ensure every child progresses confidently at their own pace.", icon: Users },
              { title: "Continuous Assessment", desc: "Regular assessments, assignments, and feedback help track student growth rather than rely solely on examinations.", icon: Target }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 reveal">
                <item.icon className="text-secondary mb-6" size={40} />
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Academic Structure</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">Subjects Offered</h2>
            <p className="text-black/60 mt-4 font-bold uppercase tracking-widest text-xs">(As per CBSE Guidelines)</p>
          </div>

          <div className="space-y-16">
            {/* Primary */}
            <div className="flex flex-col lg:flex-row gap-12 items-center reveal">
               <div className="lg:w-1/3">
                  <div className="bg-orange-50 p-10 rounded-[3rem] text-center">
                     <Lightbulb className="text-orange-500 mx-auto mb-6" size={48} />
                     <h3 className="text-2xl font-bold text-primary mb-2">Primary School</h3>
                     <p className="text-secondary font-black uppercase tracking-widest text-xs">Classes I–V</p>
                  </div>
               </div>
               <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {["English", "Mathematics", "Environmental Studies (EVS)", "Kannada / Hindi (Second Language)", "Computer Science / ICT", "General Knowledge", "Art & Craft", "Physical Education"].map((sub, i) => (
                        <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                           <div className="w-2 h-2 bg-orange-400 rounded-full mr-4"></div>
                           <span className="text-sm font-bold text-primary">{sub}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Middle */}
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center reveal">
               <div className="lg:w-1/3">
                  <div className="bg-blue-50 p-10 rounded-[3rem] text-center">
                     <BookOpen className="text-blue-500 mx-auto mb-6" size={48} />
                     <h3 className="text-2xl font-bold text-primary mb-2">Middle School</h3>
                     <p className="text-secondary font-black uppercase tracking-widest text-xs">Classes VI–VIII</p>
                  </div>
               </div>
               <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {["English", "Mathematics", "Science (Physics, Chemistry & Biology integrated)", "Social Science (History, Civics, Geography)", "Kannada / Hindi (Second Language)", "Computer Science / ICT", "Art Education", "Physical & Health Education"].map((sub, i) => (
                        <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                           <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                           <span className="text-sm font-bold text-primary">{sub}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Secondary */}
            <div className="flex flex-col lg:flex-row gap-12 items-center reveal">
               <div className="lg:w-1/3">
                  <div className="bg-purple-50 p-10 rounded-[3rem] text-center">
                     <GraduationCap className="text-purple-500 mx-auto mb-6" size={48} />
                     <h3 className="text-2xl font-bold text-primary mb-2">Secondary School</h3>
                     <p className="text-secondary font-black uppercase tracking-widest text-xs">Classes IX–X</p>
                  </div>
               </div>
               <div className="lg:w-2/3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     {["English (Language & Literature)", "Mathematics (Standard / Basic)", "Science (Physics, Chemistry, Biology)", "Social Science", "Kannada / Hindi (Second Language)", "Information Technology / Computer Applications", "Physical Education, Art & Co Scholastic Activities"].map((sub, i) => (
                        <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                           <div className="w-2 h-2 bg-purple-400 rounded-full mr-4"></div>
                           <span className="text-sm font-bold text-primary">{sub}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-secondary p-1 rounded-[4rem] shadow-2xl reveal">
            <div className="bg-white rounded-[3.8rem] py-20 px-10 text-center">
              <BookOpen className="text-secondary mx-auto mb-8" size={64} />
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight italic">Deep dive into our <span className="text-secondary not-italic underline decoration-2 underline-offset-8">syllabi.</span></h2>
              <p className="text-black text-lg max-w-2xl mx-auto mb-12">
                Download grade-specific curriculum maps and academic planning calendars for the current academic session.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-primary text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
                  Download Full Syllabus
                </button>
                <Link to="/academics/assessment" className="bg-gray-100 text-primary px-12 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all">
                  Evaluation Process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Curriculum;
