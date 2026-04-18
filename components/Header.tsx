
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { NAVIGATION } from '../constants';
import { usePopup } from '../context/PopupContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { openPopup } = usePopup();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className={`hidden lg:flex bg-primary h-10 w-full fixed top-0 left-0 z-[60] text-white/80 items-center justify-between px-8 text-[11px] font-bold uppercase tracking-widest transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2"><Phone size={12} className="text-secondary" /> <span>9071887788</span></div>
          <div className="flex items-center space-x-2"><Mail size={12} className="text-secondary" /> <span>Info@kpscbse.edu.in</span></div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/share/1Hj2pKYsVa/" target="_blank" rel="noopener noreferrer"><Facebook size={14} className="hover:text-secondary cursor-pointer" /></a>
          <a href="https://www.instagram.com/kpscbse?igsh=ZnB5cm4ya2p6bXBt" target="_blank" rel="noopener noreferrer"><Instagram size={14} className="hover:text-secondary cursor-pointer" /></a>
          <a href="https://youtube.com/@kps_cbse?si=-KFwPAut3yTHvs1a" target="_blank" rel="noopener noreferrer"><Youtube size={14} className="hover:text-secondary cursor-pointer" /></a>
          <a href="https://www.linkedin.com/company/karnataka-public-school-kps/" target="_blank" rel="noopener noreferrer"><Linkedin size={14} className="hover:text-secondary cursor-pointer" /></a>
        </div>
      </div>

      <header className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-header py-2 shadow-xl top-0' : 'bg-transparent py-6 lg:top-10'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-64 h-20 flex items-center justify-start transition-transform group-hover:scale-105">
               <img src="/images/Kps Logo.png" alt="KPS Logo" className="w-full h-full object-contain object-left" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center space-x-2">
            {NAVIGATION.map((item) => (
              <div 
                key={item.path} 
                className="relative group px-4"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center space-x-1">
                  <Link 
                    to={item.path}
                    className={`py-2 text-[13px] font-bold uppercase tracking-widest transition-colors nav-item-border ${
                      scrolled ? 'text-black hover:text-primary' : 'text-white hover:text-secondary'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ChevronDown size={14} className={scrolled ? 'text-black' : 'text-white/60'} />
                  )}
                </div>

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] rounded-md border-t-4 border-secondary py-3 mt-0 transition-all animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-8 py-3 text-[11px] font-bold uppercase tracking-wider text-black hover:bg-gray-50 hover:text-primary transition-all border-b border-gray-50 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={openPopup}
              className="ml-6 bg-secondary text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary transition-all shadow-lg transform hover:-translate-y-1"
            >
               Apply Now
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden p-2 z-[80] relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-primary" size={32} />
            ) : (
              <Menu className={scrolled ? 'text-primary' : 'text-white'} size={32} />
            )}
          </button>
        </div>

      </header>

      {/* Mobile Nav Overlay */}
      <div className={`xl:hidden fixed inset-0 bg-white z-[70] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="flex flex-col min-h-screen pt-24 px-8 pb-10">
          {NAVIGATION.map((item) => (
            <div key={item.path} className="mb-6 border-b border-gray-100 pb-4 last:border-0">
              <Link 
                to={item.path} 
                className="font-black text-primary text-xl uppercase tracking-widest mb-2 block"
                onClick={() => !item.children && setIsOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 mt-2 space-y-3 border-l-2 border-secondary/20">
                  {item.children.map((child) => (
                    <Link 
                      key={child.path} 
                      to={child.path}
                      className="block text-gray-600 font-bold hover:text-secondary text-xs uppercase tracking-wider"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              openPopup();
            }}
            className="mt-6 w-full bg-secondary text-white text-center py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-primary transition-colors"
          >
            Admissions Open 24-25
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
