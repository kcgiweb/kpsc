
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ChevronRight, Linkedin } from 'lucide-react';
import { NAVIGATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-48 h-16 flex items-center justify-start transition-transform group-hover:scale-105">
                 <img src="https://res.cloudinary.com/dbkmzja6c/image/upload/v1772604287/cropped-cropped-ksp_tx3va5.webp" alt="KPS Logo" className="w-full h-full object-contain object-left" />
              </div>
            </Link>
            <p className="text-black text-sm leading-loose">
              Karnataka Public School Bangalore (KPS) is a premier CBSE School in Bangalore that ensures that your children excel in life.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 group">
                 <MapPin className="text-secondary shrink-0 mt-1" size={20} />
                 <span className="text-black text-sm leading-relaxed group-hover:text-primary transition-colors">
                   P.O. Box No. 6455, MG Road, <br />
                   Bangalore, Karnataka - 560001
                 </span>
              </div>
              <div className="flex items-start space-x-4 group">
                 <Phone className="text-secondary shrink-0 mt-1" size={20} />
                 <span className="text-black text-sm leading-relaxed group-hover:text-primary transition-colors">
                   9071887788, 8310663628, <br />
                   080 29736819
                 </span>
              </div>
            </div>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/share/1Hj2pKYsVa/" },
                { Icon: Instagram, link: "https://www.instagram.com/kpscbse?igsh=ZnB5cm4ya2p6bXBt" },
                { Icon: Youtube, link: "https://youtube.com/@kps_cbse?si=-KFwPAut3yTHvs1a" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/karnataka-public-school-kps/" }
              ].map(({ Icon, link }, i) => (
                <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all text-black">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-10 text-primary flex items-center">
              <span className="w-2 h-8 bg-secondary mr-4"></span> About Us
            </h4>
            <ul className="space-y-4">
              {['Philosophy', 'Vision & Mission', 'Management Speak', 'Director’s Message', 'Faculty', 'Why KPS?', 'Careers'].map(item => (
                <li key={item}>
                  <Link to={item === 'Careers' ? '/careers' : `/about/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-black text-xs font-bold uppercase tracking-wider hover:text-secondary flex items-center transition-all">
                    <ChevronRight size={14} className="mr-2 text-black" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-10 text-primary flex items-center">
              <span className="w-2 h-8 bg-secondary mr-4"></span> Academics
            </h4>
            <ul className="space-y-4">
              {['Curriculum', 'Assessment', 'Holiday Calendar', 'Campus Infrastructure'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-black text-xs font-bold uppercase tracking-wider hover:text-secondary flex items-center transition-all">
                    <ChevronRight size={14} className="mr-2 text-black" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-serif font-bold mt-12 mb-8 text-primary flex items-center">
              <span className="w-2 h-8 bg-secondary mr-4"></span> The School
            </h4>
            <ul className="space-y-4">
              {['Overview & Timings', 'Code of Conduct', 'Uniform', 'Gallery'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-black text-xs font-bold uppercase tracking-wider hover:text-secondary flex items-center transition-all">
                    <ChevronRight size={14} className="mr-2 text-black" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-xl font-serif font-bold mb-10 text-primary flex items-center">
              <span className="w-2 h-8 bg-secondary mr-4"></span> Admissions
            </h4>
            <ul className="space-y-4">
              {['Admission Process', 'FAQs'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-black text-xs font-bold uppercase tracking-wider hover:text-secondary flex items-center transition-all">
                    <ChevronRight size={14} className="mr-2 text-black" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-serif font-bold mt-12 mb-8 text-primary flex items-center">
              <span className="w-2 h-8 bg-secondary mr-4"></span> Achievements
            </h4>
            <ul className="space-y-4">
              {['Results', 'Co-curricular', 'Sports'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-black text-xs font-bold uppercase tracking-wider hover:text-secondary flex items-center transition-all">
                    <ChevronRight size={14} className="mr-2 text-black" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>


        <div className="mt-20 pt-8 border-t border-gray-100 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black text-[11px] font-medium">
            &copy; {new Date().getFullYear()} Karnataka Public School. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-black text-[11px] hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-black text-[11px] hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
