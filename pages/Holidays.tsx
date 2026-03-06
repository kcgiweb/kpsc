
import React, { useEffect } from 'react';
import { Calendar, Download, Sun, Snowflake, Flag, Coffee, ChevronRight, Info } from 'lucide-react';

const Holidays: React.FC = () => {
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

  const majorBreaks = [
    { name: "Summer Vacation", dates: "April 15 - June 01", icon: Sun, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Winter Break", dates: "December 24 - January 03", icon: Snowflake, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Dussehra Holidays", dates: "October 11 - October 20", icon: Flag, color: "text-red-500", bg: "bg-red-50" }
  ];

  const holidaysList = [
    { 
      month: "June 2026", 
      events: [
        { date: "13", name: "Second Saturday", type: "Saturday" }, 
        { date: "26", name: "Muharram", type: "Friday" }
      ] 
    },
    { 
      month: "July 2026", 
      events: [
        { date: "11", name: "Second Saturday", type: "Saturday" }
      ] 
    },
    { 
      month: "August 2026", 
      events: [
        { date: "08", name: "Second Saturday", type: "Saturday" },
        { date: "21", name: "VaraMahaLakshmi", type: "Friday" },
        { date: "26", name: "Eid Milad", type: "Wednesday" }
      ] 
    },
    { 
      month: "September 2026", 
      events: [
        { date: "12", name: "Second Saturday", type: "Saturday" },
        { date: "14", name: "Ganesh Chaturthi", type: "Monday" }
      ] 
    },
    { 
      month: "October 2026", 
      events: [
        { date: "02", name: "Gandhi Jayanti", type: "Friday" },
        { date: "10", name: "Second Saturday/ Mahalaya Amavasya", type: "Saturday" },
        { date: "11-20", name: "Dussehra vacations", type: "Vacation" },
        { date: "26", name: "Valmiki Jayanti", type: "Monday" }
      ] 
    },
    { 
      month: "November 2026", 
      events: [
        { date: "01", name: "Kannada Rajyotsava", type: "Sunday" },
        { date: "09-10", name: "Diwali", type: "Mon & Tue" },
        { date: "14", name: "Second Saturday", type: "Saturday" },
        { date: "27", name: "Kanakadasa Jayanti", type: "Friday" }
      ] 
    },
    { 
      month: "December 2026", 
      events: [
        { date: "12", name: "Second Saturday", type: "Saturday" },
        { date: "24-03", name: "Winter Break", type: "Vacation" }
      ] 
    },
    { 
      month: "January 2027", 
      events: [
        { date: "09", name: "Second Saturday", type: "Saturday" },
        { date: "15", name: "Sankaranti", type: "Friday" }
      ] 
    },
    { 
      month: "February 2027", 
      events: [
        { date: "13", name: "Second Saturday", type: "Saturday" }
      ] 
    },
    { 
      month: "March 2027", 
      events: [
        { date: "06", name: "Maha Shivratri", type: "Saturday" },
        { date: "10", name: "Ramzan (Tentitive)", type: "Wednesday" },
        { date: "13", name: "Second Saturday", type: "Saturday" },
        { date: "22", name: "Holi", type: "Monday" },
        { date: "26", name: "Good Friday", type: "Friday" }
      ] 
    },
    { 
      month: "April 2027", 
      events: [
        { date: "08", name: "Ugadi", type: "Thursday" },
        { date: "10", name: "Second Saturday", type: "Saturday" }
      ] 
    }
  ];

  return (
    <main className="bg-white min-h-screen">
      {/* Editorial Hero */}
      <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('https://res.cloudinary.com/dwoh8qevy/image/upload/v1771234977/bg-pattern-fdl_v7qd2s.png')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Academic Timeline</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-6 reveal delay-100">Holiday <span className="text-secondary italic">Calendar.</span></h1>
          <p className="text-white/50 max-w-xl mx-auto text-sm reveal delay-200 uppercase tracking-widest font-black">Academic Session 2026 - 2027</p>
        </div>
      </section>

      {/* Major Breaks Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Seasonal Vacations</h2>
            <p className="text-black text-sm">Planning ahead for meaningful family time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {majorBreaks.map((item, i) => (
              <div key={i} className="reveal group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="bg-gray-50 border border-gray-100 p-10 rounded-[3rem] text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                  <p className="text-black font-black uppercase tracking-widest text-[10px]">{item.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full List Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-2/3 reveal">
               <h2 className="text-3xl font-serif font-bold text-primary mb-12 flex items-center">
                 <Calendar className="mr-4 text-secondary" size={28} /> List of Public Holidays
               </h2>
               <div className="space-y-6">
                 {holidaysList.map((month, i) => (
                   <div key={i} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                      <h4 className="text-secondary font-black uppercase tracking-widest text-xs mb-6 pb-2 border-b border-gray-50">{month.month}</h4>
                      <div className="space-y-4">
                        {month.events.map((ev, idx) => (
                          <div key={idx} className="flex items-center justify-between group">
                             <div className="flex items-center gap-6">
                                <span className="text-2xl font-serif font-bold text-primary italic w-10">{ev.date}</span>
                                <span className="text-black font-bold text-sm group-hover:text-secondary transition-colors">{ev.name}</span>
                             </div>
                             <span className="text-[9px] font-black uppercase tracking-widest text-black group-hover:text-primary transition-colors">{ev.type}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="lg:w-1/3 space-y-8 reveal delay-400">
               <div className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl translate-y-1/2 translate-x-1/2"></div>
                  <Download className="text-secondary mb-6" size={48} />
                  <h3 className="text-2xl font-serif font-bold mb-4">Academic Planner</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-8">
                    Download the complete month-wise planner including exam schedules, sports meets, and parent-teacher meetings.
                  </p>
                  <button className="w-full bg-secondary text-white py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-xl">
                    Download PDF (4.2MB)
                  </button>
               </div>

               <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                     <Info className="text-secondary" size={24} />
                     <h4 className="font-bold text-primary">Note to Parents</h4>
                  </div>
                  <ul className="space-y-4">
                     <li className="flex gap-3 items-start text-xs text-black">
                        <ChevronRight className="text-secondary shrink-0" size={14} />
                        Holidays are subject to change as per Government of Karnataka notifications.
                     </li>
                     <li className="flex gap-3 items-start text-xs text-black">
                        <ChevronRight className="text-secondary shrink-0" size={14} />
                        Attendance on National Festivals (Aug 15 & Jan 26) is mandatory for all students.
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 reveal">
          <h2 className="text-3xl font-serif font-bold text-primary mb-8 leading-tight italic">Planning your next <span className="text-secondary not-italic underline decoration-2 underline-offset-8">step?</span></h2>
          <div className="flex justify-center gap-6">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all">
               Visit Campus
            </button>
            <button className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
               Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Holidays;
