
import React, { useEffect, useState } from 'react';
import SEO from '../components/SEO';
// Added Link to imports
import { Link } from 'react-router-dom';
import { Search, Filter, GraduationCap, Clock, BookOpen, Users, Mail, ChevronRight, Briefcase } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  dept: string;
  email: string;
}

const Faculty: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDept, setActiveDept] = useState('All Departments');

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
  }, [searchQuery, activeDept]);

  const departments = [
    'All Departments', 'Administration', 'Teaching Staff', 'Coordination', 'IT & Computer Science', 'Languages'
  ];

  const facultyData: FacultyMember[] = [
    // Teaching Staff
    { id: 7112, name: "Ms. Radha Vijay Kumar", designation: "Principal", dept: "Teaching Staff", email: "radha@kpscbse.edu.in" },
    { id: 7012, name: "Ms. Arshiya Subhana G A", designation: "Senior School Coordinator / TGT Science", dept: "Teaching Staff", email: "arshiya@kpscbse.edu.in" },
    { id: 7014, name: "Ms. Nandini Vijay", designation: "Middle School Coordinator / TGT English", dept: "Teaching Staff", email: "nandini@kpscbse.edu.in" },
    { id: 7047, name: "Ms. Pratiksha M Patil", designation: "Primary School Coordinator / TGT English", dept: "Teaching Staff", email: "pratiksha@kpscbse.edu.in" },
    { id: 7017, name: "Ms. Shobha Aujikar", designation: "IT Head / TGT IT/AI", dept: "Teaching Staff", email: "shobha@kpscbse.edu.in" },
    { id: 7018, name: "Ms. Sunanda S Medegar", designation: "Kannada HOD / TGT Social & Kannada", dept: "Teaching Staff", email: "sunanda@kpscbse.edu.in" },
    { id: 7100, name: "Ms. Sushma Tiwari", designation: "TGT Maths & Science", dept: "Teaching Staff", email: "sushma@kpscbse.edu.in" },
    { id: 7098, name: "Ms. Hajeera Anjum", designation: "TGT English", dept: "Teaching Staff", email: "hajeera@kpscbse.edu.in" },
    { id: 7101, name: "Ms. Khurath Afza Sn", designation: "TGT / Social", dept: "Teaching Staff", email: "khurath@kpscbse.edu.in" },
    { id: 7052, name: "Ms. Ashwini N M", designation: "TGT Kannada", dept: "Teaching Staff", email: "ashwini@kpscbse.edu.in" },
    { id: 7077, name: "Ms. Bindu Madhavi V", designation: "TGT Social Studies", dept: "Teaching Staff", email: "bindu@kpscbse.edu.in" },
    { id: 7079, name: "Ms. Supriya M R", designation: "PRT Kannada", dept: "Teaching Staff", email: "supriya@kpscbse.edu.in" },
    { id: 7082, name: "Ms. Jhansi Rani R", designation: "PRT Social Studies", dept: "Teaching Staff", email: "jhansi@kpscbse.edu.in" },
    { id: 7083, name: "Ms. Babita Chavan", designation: "TGT Hindi", dept: "Teaching Staff", email: "babita@kpscbse.edu.in" },
    { id: 7085, name: "Ms. Pooja Sharma", designation: "PRT Hindi", dept: "Teaching Staff", email: "pooja@kpscbse.edu.in" },
    { id: 7103, name: "Ms. Ramitha Cuduvally", designation: "PRT English", dept: "Teaching Staff", email: "ramitha@kpscbse.edu.in" },
    { id: 7102, name: "Ms. Pavithra N", designation: "PRT Mathematics", dept: "Teaching Staff", email: "pavithra@kpscbse.edu.in" },
    { id: 7104, name: "Ms. Chaitra Hegde", designation: "PRT", dept: "Teaching Staff", email: "chaitra@kpscbse.edu.in" },
    { id: 7011, name: "Mr. Nagaraj C", designation: "Physical Education Teacher", dept: "Teaching Staff", email: "nagaraj@kpscbse.edu.in" },
    { id: 7010, name: "Mr. Ashoka C", designation: "Physical Education Teacher", dept: "Teaching Staff", email: "ashoka@kpscbse.edu.in" },
    { id: 7062, name: "Ms. Vaishali M", designation: "PRT", dept: "Teaching Staff", email: "vaishali@kpscbse.edu.in" },
    { id: 7109, name: "Ms. Amrin K", designation: "PRT", dept: "Teaching Staff", email: "amrin@kpscbse.edu.in" },
    { id: 7111, name: "Ms. Sandhya Kumari", designation: "TGT Hindi", dept: "Teaching Staff", email: "sandhya@kpscbse.edu.in" },
    { id: 7106, name: "Ms. Divya Bonthu", designation: "IT", dept: "Teaching Staff", email: "divya@kpscbse.edu.in" },
    { id: 7107, name: "Ms. Preethi Radhakrishnan", designation: "PRT", dept: "Teaching Staff", email: "preethi@kpscbse.edu.in" },
    { id: 7108, name: "Kavita C. Patil", designation: "PRT Art & Craft", dept: "Teaching Staff", email: "kavita@kpscbse.edu.in" },
    
    // Non-Teaching Staff
    { id: 9027, name: "Mr. Prowdaraja M G", designation: "Accountant", dept: "Administration", email: "prowdaraja@kpscbse.edu.in" },
    { id: 9028, name: "Ms. Padamavathi Bai S", designation: "Admin Manager", dept: "Administration", email: "padamavathi@kpscbse.edu.in" },
    { id: 9029, name: "Ms. Bhavani S", designation: "ERP Associate", dept: "Administration", email: "bhavani@kpscbse.edu.in" },
    { id: 9030, name: "Ms. Nagarathna Bai", designation: "Stores In Charge", dept: "Administration", email: "nagarathna@kpscbse.edu.in" },
  ];

  const filteredFaculty = facultyData.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          f.designation.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = activeDept === 'All Departments' || f.dept === activeDept;
    return matchesSearch && matchesDept;
  });

  return (
    <main className="bg-[#fcfcfc] min-h-screen">
      <SEO title="Faculty" />
      {/* Premium Header - No Images */}
      <section className="bg-primary pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: `url('/images/homeGallery1.jpg')`, backgroundSize: '400px' }}></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-secondary font-black uppercase tracking-[0.5em] text-[10px] mb-6 reveal">Our Academic Strength</h4>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-black mb-6 reveal delay-100">Faculty <span className="text-secondary italic">Directory.</span></h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg reveal delay-200">A comprehensive listing of our world-class educators, their qualifications, and specialized domains.</p>
        </div>
      </section>

      {/* Directory Controls */}
      <section className="py-12 bg-white border-b border-gray-100 sticky top-[72px] z-30 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Department Filter Tabs */}
            <div className="flex overflow-x-auto pb-2 w-full lg:w-auto gap-2 no-scrollbar">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all border ${
                    activeDept === dept 
                    ? 'bg-secondary border-secondary text-white shadow-lg shadow-secondary/20' 
                    : 'bg-white border-gray-200 text-black hover:border-secondary hover:text-secondary'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={18} />
              <input 
                type="text" 
                placeholder="Search by name or degree..." 
                className="w-full pl-12 pr-6 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-4 focus:ring-secondary/10 focus:border-secondary transition-all text-sm font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="reveal bg-white rounded-[2.5rem] shadow-2xl shadow-primary/5 overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.2em] w-20 text-center">ID</th>
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.2em]">Faculty Name & Designation</th>
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.2em]">Department</th>
                    <th className="px-8 py-6 text-[11px] font-black uppercase tracking-[0.2em]">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredFaculty.length > 0 ? (
                    filteredFaculty.map((faculty, idx) => (
                      <tr 
                        key={faculty.id} 
                        className="group hover:bg-gray-50/50 transition-colors"
                      >
                        <td className="px-8 py-7 text-center">
                          <span className="text-black font-serif italic text-xl">#{faculty.id}</span>
                        </td>
                        <td className="px-8 py-7">
                          <div className="flex flex-col">
                            <span className="text-primary font-bold text-lg leading-none mb-2 group-hover:text-secondary transition-colors">{faculty.name}</span>
                            <div className="flex items-center space-x-2">
                              <Briefcase size={12} className="text-secondary" />
                              <span className="text-[10px] font-black uppercase tracking-widest text-black">{faculty.designation}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-7">
                          <span className="px-4 py-1.5 rounded-lg bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/5">
                            {faculty.dept}
                          </span>
                        </td>
                        <td className="px-8 py-7">
                          <div className="flex items-center space-x-3">
                            <Mail className="text-secondary shrink-0" size={18} />
                            <a href={`mailto:${faculty.email}`} className="text-black font-medium text-sm leading-relaxed hover:text-primary transition-colors">{faculty.email}</a>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-8 py-24 text-center">
                        <Users className="mx-auto text-black mb-6" size={64} />
                        <h3 className="text-2xl font-serif font-bold text-black">No Faculty Found</h3>
                        <p className="text-black text-sm mt-2">Try adjusting your search or department filter.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards Section */}
      <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-2 reveal">
              <h4 className="text-secondary font-black uppercase tracking-[0.4em] text-[10px] mb-4">Quality Assurance</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Elite Global Standards <br /> In Pedagogy.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex space-x-5">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0"><BookOpen size={24} /></div>
                   <div>
                      <h4 className="font-bold text-xl mb-2">Subject Expertise</h4>
                      <p className="text-white/50 text-xs leading-relaxed">Every educator is a specialist with deep domain knowledge and post-graduate qualifications.</p>
                   </div>
                </div>
                <div className="flex space-x-5">
                   <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary shrink-0"><Clock size={24} /></div>
                   <div>
                      <h4 className="font-bold text-xl mb-2">Ongoing Training</h4>
                      <p className="text-white/50 text-xs leading-relaxed">Faculty undergo mandatory 120+ hours of annual professional development from CBSE & IBO.</p>
                   </div>
                </div>
              </div>
            </div>
            <div className="reveal delay-400">
               <div className="p-10 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-md text-center">
                  <h3 className="text-secondary font-black text-5xl mb-4 italic">100%</h3>
                  <p className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-8">Certified Educators</p>
                  {/* Fixed: Added Link import above to resolve undefined reference */}
                  <Link to="/about/philosophy" className="inline-flex items-center text-secondary font-black text-[10px] uppercase tracking-widest hover:text-white transition-colors">
                    Learn Culture <ChevronRight size={14} className="ml-2" />
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center reveal">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8">Join the Academic Legacy</h2>
          <p className="text-black max-w-2xl mx-auto mb-12 text-lg">We are always scouting for high-caliber educators who are passionate about sculpting the leaders of tomorrow.</p>
          <div className="flex justify-center gap-6">
            <button className="bg-secondary text-white px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary transition-all shadow-xl">
              Apply as Faculty
            </button>
            {/* Fixed: Added Link import above to resolve undefined reference */}
            <Link to="/admissions/process" className="bg-gray-100 text-primary px-10 py-5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-gray-200 transition-all">
              Student Admission
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faculty;
