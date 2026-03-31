
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, Users, Trophy, ShieldCheck, 
  GraduationCap, MapPin, Calendar, Star, Play, 
  ChevronRight, Microscope, Laptop, Library as LibraryIcon, 
  Bus, Video, Radio, Quote, Award, Heart, Phone, Image as ImageIcon,
  Monitor, Camera, Dumbbell, School, Briefcase, Globe, ChevronLeft,
  MessageSquare, Book, Search, Music, Target, Bot, Lightbulb, BarChart3 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  const alumniScrollRef = useRef<HTMLDivElement>(null);
  const feedbackScrollRef = useRef<HTMLDivElement>(null);
  const [isAlumniPaused, setIsAlumniPaused] = useState(false);
  const [isFeedbackPaused, setIsFeedbackPaused] = useState(false);

  const categories = ['All', 'Campus', 'Events', 'Sports', 'Academic'];
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const bgPatternUrl = "https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png";

  const galleryItems = [
    { id: 1, category: 'Sports', title: 'Sports Day', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789518/SLA_9174_a4ekno.jpg' },
    { id: 2, category: 'Academic', title: 'Classroom Moments', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789517/SLA_9122_j7ls0e.jpg' },
    { id: 3, category: 'Events', title: 'Celebrations', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789515/SLA_9114_ebbrop.jpg' },
    { id: 4, category: 'Campus', title: 'School Grounds', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9068_oyqj10.jpg' },
    { id: 5, category: 'Academic', title: 'Arts & Crafts', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789517/SLA_9092_dnumlx.jpg' },
    { id: 6, category: 'Academic', title: 'Learning Together', url: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789514/SLA_9084_ysrthb.jpg' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth, scrollWidth } = ref.current;
      const scrollAmount = clientWidth / 2;
      let scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      if (scrollTo < 0) scrollTo = scrollWidth;
      if (scrollTo > scrollWidth - clientWidth) scrollTo = 0;

      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Reveal Observer for Scroll Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once it's revealed, stop observing it for performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Auto-scroll functions
    const autoScroll = (ref: React.RefObject<HTMLDivElement | null>, paused: boolean) => {
      if (paused) return null;
      return setInterval(() => {
        if (ref.current) {
          const { scrollLeft, clientWidth, scrollWidth } = ref.current;
          const maxScroll = scrollWidth - clientWidth;
          if (scrollLeft >= maxScroll - 5) {
            ref.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            ref.current.scrollTo({ left: scrollLeft + 320, behavior: 'smooth' });
          }
        }
      }, 3500);
    };

    const alumniInterval = autoScroll(alumniScrollRef, isAlumniPaused);
    const feedbackInterval = autoScroll(feedbackScrollRef, isFeedbackPaused);

    return () => {
      observer.disconnect();
      if (alumniInterval) clearInterval(alumniInterval);
      if (feedbackInterval) clearInterval(feedbackInterval);
    };
  }, [isAlumniPaused, isFeedbackPaused]);

  const alumniData = [
    { name: "Darshan K S", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200&h=200", school: "Karnataka Public School, Batch 2018", field: "Computer Science & Information Technology", uni: "Manipal Institute of Technology (MIT), Manipal University", loc: "Australia" },
    { name: "Shrujana A", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200", school: "Karnataka Public School, Batch 2022", field: "Economics & Commerce", uni: "Mount Carmel College", loc: "India" },
    { name: "Nida Fathima", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200", school: "Karnataka Public School, Batch 2007", field: "Engineering & Technology", uni: "RV College of Engineering (RVCE)", loc: "India" },
    { name: "Ashish Ahuja", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200", school: "Karnataka Public School, Batch 2020", field: "Engineering & Technology", uni: "Indian Institute of Technology, Kanpur (IIT Kanpur)", loc: "India" },
    { name: "Meera Nair", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200", school: "Karnataka Public School, Batch 2014", field: "Public Policy & Law", uni: "National Law School (NLSIU)", loc: "India" }
  ];

  const feedbackData = [
    { name: "Zaara Rumana", grade: "Class 10", image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772609370/Zara_Rumana_acryyr.jpg", text: "My school takes great pride in its vibrant sports culture, giving every student a chance to shine. Through regular competitions and excellent training, our sports program builds discipline, teamwork, and true sportsmanship.", topic: "Sports Culture" },
    { name: "Tejaswi Sagar", grade: "Class 9", image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772609369/Tejaswi_Sagar_xhej2f.jpg", text: "I love my school, Karnataka Public School, because it teaches me many new things every day. The teachers are kind and always help us. Our school has a good environment and fun activities. I feel happy and proud to study here because it is like my second home.", topic: "School Environment" },
    { name: "Sannidhi P", grade: "Grade 9", image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772609369/Sannidhi_aclukf.jpg", text: "My school is a supportive and inspiring place where I discovered my interests and strengths. The teachers and community help me grow both academically and personally.", topic: "Personal Growth" },
    { name: "Suraj", grade: "Grade IX", image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772609369/Suraj_ahfa2e.jpg", text: "My school is an auspicious place where we learn values, life lessons, experiences and many more. The school also provides holistic education and sporting facilities.", topic: "Holistic Education" },
    { name: "Vishishta", grade: "Class 10", image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772609369/Vishishta_nug14s.jpg", text: "The teachers are friendly to approach freely and lively classes are conducted", topic: "Friendly Faculty" },
    { name: "Bindu Shree", grade: "Grade X", image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772609368/Bindushree_vzu4tl.jpg", text: "My journey at this school has been truly transformative, shaping me into a confident and motivated individual. I am constantly inspired by our dedicated teachers who go the extra mile to make every lesson engaging and meaningful. The school provides a nurturing and inclusive environment where every student feels a genuine sense of belonging.", topic: "Student Transformation" }
  ];

  const awards = [
    {
      title: "India School Merit Award",
      org: "Education Today",
      year: "2023",
      desc: "Ranked No.1 in Co-Curricular Education among India’s Top CBSE Schools. This recognition highlights Karnataka Public School’s strong focus on holistic development through sports, arts, and extracurricular programs.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616851/IMG_9744_ivqkmh.jpg",
      bg: "bg-orange-50"
    },
    {
      title: "India School Merit Award",
      org: "Holistic Education",
      year: "2023",
      desc: "Recognized among India’s Top CBSE Schools for excellence in holistic education, emphasizing balanced growth through academics, creativity, and life-skills development.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616851/IMG_9746_xpniah.jpg",
      bg: "bg-blue-50"
    },
    {
      title: "Best Innovative Curriculum Practices",
      org: "MEGA",
      year: "2022",
      desc: "Awarded by Manipal Educational Global Alliance (MEGA) for implementing innovative teaching methods and modern curriculum strategies that enhance student engagement and practical learning.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616852/IMG_9749_zxmjth.jpg",
      bg: "bg-green-50"
    },
    {
      title: "ITC WOW Green Award",
      org: "ITC",
      year: "2025",
      desc: "Received the Appreciation Award for outstanding commitment to sustainability, promoting eco-friendly initiatives, recycling programs, and environmental awareness within the school community.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616852/IMG_9750_orgg6p.jpg",
      bg: "bg-yellow-50"
    },
    {
      title: "Inter-School Sports Competition",
      org: "Throwball (Girls)",
      year: "2025",
      desc: "The girls’ throwball team secured Runner-Up position, demonstrating strong teamwork, dedication, and sporting excellence.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616853/IMG_9751_ds06j9.jpg",
      bg: "bg-red-50"
    },
    {
      title: "Smash League Championship",
      org: "Winners",
      year: "2025",
      desc: "Karnataka Public School achieved First Place in the Smash League Championship, reflecting the school’s active participation and success in competitive sports.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616851/IMG_9753_npkxir.jpg",
      bg: "bg-purple-50"
    },
    {
      title: "Certificate of Achievement",
      org: "MEGA",
      year: "2022",
      desc: "Recognized by Manipal Educational Global Alliance for excellence in curriculum innovation and leadership in modern K-12 education practices.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616852/IMG_9755_tyfjqs.jpg",
      bg: "bg-indigo-50"
    },
    {
      title: "India’s Most Prominent Education Award",
      org: "Merit Awards & Market Research",
      year: "2017",
      desc: "Awarded as the Best CBSE School in Bangalore by Merit Awards & Market Research, acknowledging the institution’s outstanding academic performance and quality education.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616855/IMG_9756_e5vbyi.jpg",
      bg: "bg-pink-50"
    },
    {
      title: "Oxford Advantage Programme",
      org: "Oxford University Press",
      year: "2024",
      desc: "Karnataka Public School partnered with Oxford University Press to adopt the Oxford Advantage Programme, enhancing teaching quality with global educational resources.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616854/IMG_9758_wajy0u.jpg",
      bg: "bg-teal-50"
    },
    {
      title: "India’s Activities Excellence Award",
      org: "Education Today",
      year: "2025",
      desc: "Honored for excellence in extracurricular programs that support creativity, leadership, cultural activities, and student talent development.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616856/IMG_9760_dzx3c9.jpg",
      bg: "bg-cyan-50"
    },
    {
      title: "India K-12 Awards",
      org: "Bengaluru",
      year: "2025",
      desc: "Recognized for Excellence in Sustainable and Holistic Growth Programs, highlighting the school’s balanced approach to academics, innovation, and student well-being.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616856/IMG_9761_kkvbwn.jpg",
      bg: "bg-emerald-50"
    },
    {
      title: "Certificate of Achievement",
      org: "Education Today",
      year: "2023",
      desc: "Ranked among India’s Top CBSE Schools – Parameter Wise, achieving No.1 position in Co-Curricular Education.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772616889/IMG_9763_lafit2.jpg",
      bg: "bg-rose-50"
    },
    {
      title: "Inter-School Throwball Championship",
      org: "Winners",
      year: "2025",
      desc: "The girls’ throwball team secured First Place, showcasing the school’s commitment to sports excellence and student achievement.",
      image: "https://res.cloudinary.com/dbkmzja6c/image/upload/v1772617100/IMG_9764_k1la2t.jpg",
      bg: "bg-amber-50"
    }
  ];

  return (
    <main className="overflow-hidden relative bg-white">
      {/* Background Pattern Layer */}
      <div 
        className="fixed inset-0 z-0 opacity-10 pointer-events-none fixed-bg-pattern" 
        style={{ 
          backgroundImage: `url(${bgPatternUrl})`, 
          backgroundRepeat: 'repeat',
          backgroundSize: '500px'
        }} 
      />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden z-10">
        <div className="absolute inset-0">
          <video 
            src="https://res.cloudinary.com/dbkmzja6c/video/upload/v1774924763/IMG_3727_h3rux5.mov" 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
           <div className="w-px h-8 bg-white mb-2"></div>
           <span className="text-white text-[9px] uppercase font-bold tracking-widest">Scroll</span>
        </div>
      </section>

      {/* Scrolling Orange Ticker */}
      <div className="orange-ticker h-12 flex items-center relative z-20 shadow-2xl">
        <div className="animate-marquee flex items-center space-x-20 w-max px-10" style={{ animationDuration: '35s' }}>
          {[1,2,3,4].map(i => (
            <span key={i} className="text-xs font-black uppercase tracking-[0.3em] whitespace-nowrap">
              Admissions open for Academic Year 2024-25. Visit campus for details. • Awarded "Best Infrastructure" by Education World 2023. • Integrated Coaching for Grade 11-12 now available.
            </span>
          ))}
        </div>
      </div>

      {/* Action Grid - Sequential Reveal */}
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-8 perspective-3000">
              {[
                { title: 'Admission Process', desc: 'Take the first step to prepare your child for life. Click here to view the application procedure.', link: '/admissions/process', img: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772788505/download_dtakho.png', bg: 'bg-[#e3f2fd]', border: 'border-[#0d47a1]', text: 'text-[#1a237e]', accent: 'text-[#0d47a1]' },
                { title: 'The Curriculum', desc: 'Thematic or Integrated approach to studying. Introduced in 1995-96, the study is based on themes.', link: '/academics/curriculum', img: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772788666/download_2_ofwqnv.png', bg: 'bg-[#fbe9e7]', border: 'border-[#d84315]', text: 'text-[#bf360c]', accent: 'text-[#d84315]' },
                { title: 'Gallery', desc: 'Read and see articles and video clips on Karnataka Public School in the media & publications.', link: '/media/gallery', img: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789079/SLA_8805_mg8tx0.jpg', bg: 'bg-[#f1f8e9]', border: 'border-[#558b2f]', text: 'text-[#33691e]', accent: 'text-[#558b2f]' },
              ].map((card, i) => (
                <div key={i} className="reveal card-container flex flex-col h-full preserve-3d" style={{ transitionDelay: `${i * 150}ms` }}>
                  <div className={`${card.bg} rounded-[2.5rem] p-3 pb-0 border-b-[10px] ${card.border} card-3d-hover preserve-3d h-full shadow-2xl flex flex-col group transition-all duration-500`}>
                    <div className="p-3 preserve-3d translate-z-image">
                      <img src={card.img} className="w-full h-56 object-cover rounded-[2rem] shadow-lg group-hover:scale-105 transition-transform duration-700" alt={card.title} />
                    </div>
                    <div className="p-8 pt-4 text-center flex-grow preserve-3d">
                      <h3 className={`text-xl font-black ${card.text} mb-4 leading-tight translate-z-text`}>{card.title}</h3>
                      <p className={`${card.accent} text-[14px] leading-relaxed mb-6 flex-grow font-medium translate-z-text`}>{card.desc}</p>
                      <Link to={card.link} className={`inline-block ${card.accent} font-black text-md underline decoration-2 underline-offset-4 hover:text-primary transition-colors translate-z-text`}>Know More</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal lg:w-1/4 bg-white rounded-[2.5rem] p-8 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col" style={{ transitionDelay: '450ms' }}>
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-lg font-black text-primary uppercase tracking-[0.2em]">Events</h2>
                 <Link to="/media/news" className="text-[9px] text-secondary font-black uppercase tracking-[0.3em] hover:text-primary transition-colors">All</Link>
               </div>
               <div className="space-y-6 flex-grow">
                 {[
                   { title: 'Unit Assessments', cat: 'Academics' },
                   { title: 'Christmas Carnival', cat: 'Cultural' },
                   { title: 'Campus Reopens', cat: 'School' },
                   { title: 'Annual Sports Meet', cat: 'Sports' },
                 ].map((event, i) => (
                   <div key={i} className="flex gap-4 group cursor-pointer items-center">
                     <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border-b-4 border-secondary/20 group-hover:border-secondary transition-all flex items-center justify-center group-hover:-translate-y-1">
                        <Calendar size={14} className="text-black group-hover:text-secondary transition-colors" />
                     </div>
                     <div className="flex flex-col">
                       <h4 className="text-[13px] font-bold text-primary leading-tight group-hover:text-secondary transition-colors mb-0.5">{event.title}</h4>
                       <span className="text-[8px] font-black text-secondary uppercase tracking-[0.2em]">{event.cat}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Reveal */}
      <section className="reveal py-12 bg-primary text-white relative overflow-hidden shadow-2xl z-10">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 relative">
                 <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-2xl"></div>
                 <img src="https://res.cloudinary.com/dbkmzja6c/image/upload/v1772610801/IMG_9491_qmlbj5.jpg" className="rounded-[2rem] shadow-2xl relative z-10 w-full" alt="Director" />
                 <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-2xl z-20 hidden md:block max-w-sm">
                    <Quote className="text-secondary mb-3" size={24} />
                    <p className="text-black italic text-md leading-relaxed mb-3">"At KPS, we empower future thinkers, innovators, and leaders who will shape the global narrative."</p>
                    <h5 className="text-primary font-black uppercase text-[10px] tracking-widest">— Director's Message</h5>
                 </div>
              </div>
              <div className="lg:w-1/2">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Our Philosophy</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-[1.2]">A Tradition of <br /> Innovation.</h2>
                <div className="space-y-4 text-white/70 text-md leading-relaxed">
                   <p>Karnataka Public School is designed to nurture curiosity, confidence, and character. We blend strong academic foundations with values based learning, ensuring every child grows into a responsible and capable global citizen.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                   <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><Users size={24} /></div>
                      <span className="font-bold text-[11px] tracking-widest uppercase">Student Centric Learning</span>
                   </div>
                   <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><GraduationCap size={24} /></div>
                      <span className="font-bold text-[11px] tracking-widest uppercase">Qualified & Dedicated Staff</span>
                   </div>
                   <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><Heart size={24} /></div>
                      <span className="font-bold text-[11px] tracking-widest uppercase">Holistic Development</span>
                   </div>
                   <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary"><ShieldCheck size={24} /></div>
                      <span className="font-bold text-[11px] tracking-widest uppercase">Safe & Inclusive Environment</span>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* New Initiatives Section */}
      <section className="py-24 bg-gray-50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 reveal">
            <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Future Ready</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">New Initiatives</h2>
            <p className="text-xl text-black/70 font-medium">Transforming Education for Tomorrow!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sports Excellence for All",
                desc: "Dedicated teams in Cricket, Football, Throwball, Volleyball, Tennis & Taekwondo for both boys and girls — building strength, teamwork, and leadership.",
                icon: Trophy,
                color: "bg-orange-50 text-orange-600"
              },
              {
                title: "Focused & Result-Oriented Academics",
                desc: "Structured goals, strong mentorship, and measurable outcomes to ensure academic success.",
                icon: Target,
                color: "bg-blue-50 text-blue-600"
              },
              {
                title: "AI & STEM Innovation Lab",
                desc: "A future-ready AI & STEM Lab to nurture creativity, coding skills, innovation, and critical thinking.",
                icon: Bot,
                color: "bg-purple-50 text-purple-600"
              },
              {
                title: "Skill-Based Education",
                desc: "Introduction of skill subjects aligned with Central Board of Secondary Education (CBSE) to empower students with practical and career-oriented knowledge.",
                icon: Lightbulb,
                color: "bg-yellow-50 text-yellow-600"
              },
              {
                title: "Continuous Teacher Empowerment",
                desc: "Regular proficiency training for all educators as per CBSE guidelines to enhance teaching excellence.",
                icon: BookOpen,
                color: "bg-pink-50 text-pink-600"
              },
              {
                title: "Microsoft Elevate School",
                desc: "Complete Digital Transformation. All students and teachers will be integrated into the Microsoft ecosystem, using advanced digital tools for learning, collaboration, creativity, and communication.",
                icon: Monitor,
                color: "bg-cyan-50 text-cyan-600"
              },
              {
                title: "Smart ERP Communication Portal",
                desc: "Implementation of a modern ERP system for seamless communication with parents — real-time updates, student reports, attendance, circulars, and academic progress at your fingertips.",
                icon: BarChart3,
                color: "bg-green-50 text-green-600"
              }
            ].map((item, i, arr) => {
              const isMicrosoft = item.title === "Microsoft Elevate School";
              return (
                <div key={i} className={`reveal group relative bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border ${isMicrosoft ? 'border-secondary ring-4 ring-secondary/10 shadow-2xl scale-[1.02] z-10' : 'border-gray-100'} ${i === arr.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                  {isMicrosoft && (
                    <div className="absolute top-0 right-0 bg-secondary text-white text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-bl-2xl rounded-tr-[2rem]">
                      Featured
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon size={28} />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isMicrosoft ? 'text-secondary' : 'text-primary'}`}>{item.title}</h3>
                  <p className="text-black/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16 reveal">
             <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Infrastructure</h4>
             <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Facilities</h2>
             <p className="text-xl text-black/70 font-medium">Creating an environment for growth and exploration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              {
                title: "Science Laboratory",
                desc: "A fully equipped science lab that encourages exploration, experimentation, and hands on learning. Students actively engage in scientific inquiry under the guidance of trained educators.",
                icon: Microscope,
                color: "bg-teal-50 text-teal-600"
              },
              {
                title: "Library",
                desc: "A well stocked library with a diverse collection of storybooks, reference materials, and digital resources. It is a quiet and welcoming space that promotes reading habits and independent learning.",
                icon: LibraryIcon,
                color: "bg-indigo-50 text-indigo-600"
              },
              {
                title: "Playground",
                desc: "A large outdoor playground that supports physical fitness and team sports. Students enjoy regular games, sports coaching, and free play sessions to build strength, coordination, and sportsmanship.",
                icon: Trophy,
                color: "bg-orange-50 text-orange-600"
              },
              {
                title: "Assembly Area",
                desc: "A dedicated assembly area where students gather for morning prayer, celebrations, cultural activities, and important announcements—fostering unity, discipline, and school spirit.",
                icon: Users,
                color: "bg-rose-50 text-rose-600"
              },
              {
                title: "Play Area",
                desc: "A safe and child friendly play zone equipped with age appropriate equipment for young learners, encouraging exploration, fun, and motor skill development.",
                icon: Star,
                color: "bg-yellow-50 text-yellow-600"
              }
            ].map((facility, i) => (
               <div key={i} className="reveal group bg-gray-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`w-14 h-14 rounded-2xl ${facility.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                     <facility.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{facility.title}</h3>
                  <p className="text-black/70 leading-relaxed text-sm">{facility.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour Reveal */}
      <section className="reveal relative py-12 z-10">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-primary">Virtual Tour of KPS</h2>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[92%] lg:w-[88%] perspective-3000">
            <div className="bg-primary rounded-[2rem] p-6 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4)] border-b-[6px] border-secondary flex flex-wrap justify-between items-center gap-4">
              {[
                { label: 'Laboratories', Icon: Microscope },
                { label: 'Smart Classrooms', Icon: Monitor },
                { label: 'Sports Facilities', Icon: Dumbbell },
                { label: 'Computer Lab', Icon: Laptop },
                { label: 'Library', Icon: LibraryIcon },
                { label: 'GPS Transport', Icon: MapPin },
                { label: 'CCTV Surveillance', Icon: Camera },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center group cursor-pointer flex-1 min-w-[90px]">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary mb-3 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <item.Icon size={26} strokeWidth={2} />
                  </div>
                  <span className="text-white text-[9px] font-black uppercase tracking-wider text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Reveal */}
      <section className="py-10 relative z-10">
        <div className="container mx-auto px-6 pt-12 lg:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-3000">
            {[
              { title: 'Academics', desc: 'Every student, a unique story. Explore our diverse academics capturing personalized learning.', img: 'https://res.cloudinary.com/dbkmzja6c/image/upload/v1772610945/IMG_9673_dgy2vl.jpg', color: '#1a237e', accent: '#0d47a1', bg: '#e3f2fd', link: '/academics/overview' },
              { title: 'Facilities', desc: 'Imagine sparking your child\'s imagination in our bright and airy classrooms with interactive learning tools.', img: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772788624/download_1_choh38.png', color: '#bf360c', accent: '#d84315', bg: '#fbe9e7', link: '/infrastructure/overview' },
              { title: 'Picture Gallery', desc: 'Step into our world! Our picture gallery captures the spirit of learning and fun at KPS.', img: 'https://res.cloudinary.com/dwoh8qevy/image/upload/v1772789079/SLA_8937_kxomhs.jpg', color: '#33691e', accent: '#558b2f', bg: '#f1f8e9', link: '/media/gallery' }
            ].map((pillar, i) => (
              <div key={i} className="reveal card-container preserve-3d" style={{ transitionDelay: `${i * 200}ms` }}>
                <div className="rounded-[2.5rem] p-3 pb-0 border-b-[10px] card-3d-hover preserve-3d h-full shadow-2xl flex flex-col" style={{ backgroundColor: pillar.bg, borderColor: pillar.accent }}>
                  <div className="p-3 preserve-3d translate-z-image">
                    <img src={pillar.img} className="w-full h-56 object-cover rounded-[2rem] shadow-lg" alt={pillar.title} />
                  </div>
                  <div className="p-8 pt-4 text-center flex-grow preserve-3d">
                    <h3 className="text-xl font-black mb-4 translate-z-text" style={{ color: pillar.color }}>{pillar.title}</h3>
                    <p className="text-[14px] leading-relaxed mb-8 translate-z-text" style={{ color: pillar.accent }}>{pillar.desc}</p>
                    <Link to={pillar.link} className="inline-block font-black text-md underline decoration-2 underline-offset-4 hover:text-primary transition-colors translate-z-text" style={{ color: pillar.accent }}>Know More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Reveal */}
      <section className="reveal py-12 bg-primary relative overflow-hidden shadow-2xl z-10" onMouseEnter={() => setIsAlumniPaused(true)} onMouseLeave={() => setIsAlumniPaused(false)}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 text-white px-4">
            <div className="max-w-xl">
               <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-3">Our Legacy</h4>
               <h2 className="text-3xl md:text-5xl font-serif font-bold">Pride of KPS</h2>
            </div>
            <div className="flex space-x-3 mt-6 md:mt-0">
               <button onClick={() => scroll(alumniScrollRef, 'left')} className="w-9 h-9 rounded-full border-2 border-white/20 text-white flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all shadow-lg active:scale-95"><ChevronLeft size={16} /></button>
               <button onClick={() => scroll(alumniScrollRef, 'right')} className="w-9 h-9 rounded-full border-2 border-white/20 text-white flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all shadow-lg active:scale-95"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div ref={alumniScrollRef} className="flex overflow-x-auto gap-6 pb-6 px-4 no-scrollbar scroll-smooth">
            {alumniData.map((alum, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[1.5rem] p-5 shadow-2xl flex flex-col items-center group transition-all duration-500 hover:scale-[1.02]">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-gray-50 shadow-xl group-hover:border-secondary transition-colors">
                  <img src={alum.image} className="w-full h-full object-cover" alt={alum.name} />
                </div>
                <h3 className="text-lg font-black text-primary mb-3 text-center group-hover:text-secondary transition-colors">{alum.name}</h3>
                <div className="w-full h-px bg-gray-100 mb-4"></div>
                <div className="w-full space-y-3">
                  <div className="flex items-start space-x-2"><School className="text-secondary shrink-0 mt-0.5" size={14} /><p className="text-[10px] font-bold text-black leading-tight">{alum.school}</p></div>
                  <div className="flex items-start space-x-2"><Briefcase className="text-secondary shrink-0 mt-0.5" size={14} /><p className="text-[10px] font-bold text-black leading-tight">{alum.field}</p></div>
                  <div className="flex items-start space-x-2"><GraduationCap className="text-secondary shrink-0 mt-0.5" size={14} /><p className="text-[10px] font-bold text-black leading-tight">{alum.uni}</p></div>
                  <div className="flex items-start space-x-2"><MapPin className="text-secondary shrink-0 mt-0.5" size={14} /><p className="text-[10px] font-bold text-black leading-tight">{alum.loc}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Feedback Reveal */}
      <section className="reveal py-12 relative overflow-hidden z-10" onMouseEnter={() => setIsFeedbackPaused(true)} onMouseLeave={() => setIsFeedbackPaused(false)}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 px-4">
            <div className="max-w-xl">
               <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-3">Student Voices</h4>
               <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">What Our Students Say</h2>
            </div>
            <div className="flex space-x-3 mt-6 md:mt-0">
               <button onClick={() => scroll(feedbackScrollRef, 'left')} className="w-9 h-9 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-lg active:scale-95"><ChevronLeft size={16} /></button>
               <button onClick={() => scroll(feedbackScrollRef, 'right')} className="w-9 h-9 rounded-full border-2 border-primary/20 text-primary flex items-center justify-center hover:bg-secondary hover:text-white hover:border-secondary transition-all shadow-lg active:scale-95"><ChevronRight size={16} /></button>
            </div>
          </div>
          <div ref={feedbackScrollRef} className="flex overflow-x-auto gap-6 pb-6 px-4 no-scrollbar scroll-smooth">
            {feedbackData.map((feedback, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-[1.5rem] p-5 shadow-xl flex flex-col group transition-all duration-500 hover:scale-[1.02] border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shadow-md shrink-0">
                    <img src={feedback.image} className="w-full h-full object-cover" alt={feedback.name} />
                  </div>
                  <div>
                    <h3 className="text-md font-black text-primary group-hover:text-secondary transition-colors">{feedback.name}</h3>
                    <p className="text-[9px] font-bold text-black uppercase tracking-widest">{feedback.grade}</p>
                  </div>
                </div>
                <div className="relative mb-4 flex-grow">
                  <Quote className="text-secondary/10 absolute -top-2 -left-2" size={32} />
                  <p className="text-black font-medium italic leading-relaxed relative z-10 text-[13px]">"{feedback.text}"</p>
                </div>
                <div className="w-full h-px bg-gray-50 mb-3"></div>
                <div className="flex items-center space-x-3 text-secondary font-black text-[8px] uppercase tracking-widest">
                  <MessageSquare size={10} />
                  <span>Topic: {feedback.topic}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Reveal */}
      <section id="gallery" className="reveal py-12 relative overflow-hidden z-10">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-sans font-black text-primary mb-10">Explore <span className="text-secondary">KPS</span> Gallery</h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-4 py-1.5 rounded-lg font-bold text-[10px] tracking-wide transition-all duration-300 border ${activeFilter === cat ? 'bg-white text-secondary border-secondary shadow-sm scale-105' : 'bg-white text-black border-black/20 hover:border-secondary/30 hover:text-secondary'}`}>{cat}</button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item, i) => (
              <div key={item.id} className="reveal group relative cursor-pointer overflow-hidden rounded-[2rem] border-[1px] border-secondary p-1 bg-white shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-1" style={{ transitionDelay: `${i * 100}ms` }} onClick={() => setSelectedImage(item.url)}>
                <div className="aspect-[4/3] overflow-hidden rounded-[1.8rem]">
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <div className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/40"><Search size={16} /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Reveal */}
      <section id="contact" className="reveal py-12 relative z-10">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Contact Us</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Start Your Child's <br /><span className="text-secondary italic">Excellence</span> Journey.</h2>
                <div className="space-y-6">
                   <div className="flex items-start space-x-5 group">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-lg border-b-4 border-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all"><MapPin size={18} /></div>
                      <div>
                        <h5 className="font-black text-[9px] uppercase tracking-widest text-primary mb-1">Visit Us</h5>
                        <p className="text-black font-medium text-[13px]">22/1, Chokkanahalli, Hegde Nagar Main Road, Yelahanka Hobli Bengalur,
<br />Bengaluru, Karnataka 560064</p>
                      </div>
                   </div>
                   <div className="flex items-start space-x-5 group">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-lg border-b-4 border-secondary shrink-0 group-hover:bg-secondary group-hover:text-white transition-all"><Phone size={18} /></div>
                      <div>
                        <h5 className="font-black text-[9px] uppercase tracking-widest text-primary mb-1">Admissions Hotline</h5>
                        <p className="text-black font-medium text-[13px]">+91 9071887788 <br />+91 8310663628</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                 <div className="relative perspective-3000">
                   <div className="card-container preserve-3d max-w-lg ml-auto">
                     <div className="card-3d-hover preserve-3d"><ContactForm title="Quick Enquiry" /></div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50 overflow-hidden relative z-10">
        <div className="container mx-auto px-6 mb-12 text-center reveal">
           <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-4">Achievements</h4>
           <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary">Awards & Recognition</h2>
        </div>
        
        <div className="relative w-full overflow-hidden">
           <div className="flex animate-marquee space-x-8 w-max px-4 hover:[animation-play-state:paused]" style={{ animationDuration: '60s' }}>
              {/* Duplicate the awards list to create a seamless loop */}
              {[...awards, ...awards].map((award, i) => (
                 <div key={i} className="w-[350px] bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center text-center shrink-0 group hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-full h-48 mb-6 relative rounded-2xl overflow-hidden shadow-sm">
                       <img src={award.image} alt={award.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="mb-4 flex items-center justify-center gap-2">
                       <span className="bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">{award.year}</span>
                       <span className="text-[9px] font-black uppercase tracking-widest text-secondary">{award.org}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight">{award.title}</h3>
                    <p className="text-black/70 text-sm leading-relaxed">{award.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Affiliations & Approvals */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-12">Affiliations & Approvals</h2>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {/* CBSE */}
              <div className="flex flex-col items-center gap-4 group">
                 <img src="https://akshara.edu.in/wp-content/uploads/2025/02/cbse.png" alt="CBSE" className="h-20 object-contain" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary">CBSE Affiliated</p>
              </div>

              {/* Oxford Advantage */}
              <div className="flex flex-col items-center gap-4 group">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TLRAtTxr3yLGoSbZ1clTKEHcUXu3iHsBtA&s" alt="Oxford Advantage" className="h-20 object-contain" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Oxford Advantage</p>
              </div>

              {/* Microsoft Elevate */}
              <div className="flex flex-col items-center gap-4 group">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1280px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft Elevate" className="h-20 object-contain" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Microsoft Elevate</p>
              </div>

              {/* Karnataka Govt */}
              <div className="flex flex-col items-center gap-4 group">
                 <img src="https://images.seeklogo.com/logo-png/40/1/the-karnataka-government-kannada-logo-png_seeklogo-407164.png" alt="Karnataka Govt" className="h-20 object-contain" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary">Govt. Recognized</p>
              </div>

              {/* NCERT */}
              <div className="flex flex-col items-center gap-4 group">
                 <img src="https://play-lh.googleusercontent.com/Ko1gHoNh858dbIWxPmaKruzshKhMW6X3qz3gBiKwgz7njeba3b37AhUMWcwSv4kdW4E=w600-h300-pc0xffffff-pd" alt="NCERT" className="h-20 object-contain" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-secondary">NCERT Curriculum</p>
              </div>
           </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-300" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-zoom-in" alt="Full size" />
        </div>
      )}
    </main>
  );
};

export default Home;
