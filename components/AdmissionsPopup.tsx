import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { usePopup } from '../context/PopupContext';
import MerittoIframeForm from './MerittoIframeForm';

const AdmissionsPopup: React.FC = () => {
  const { isOpen, openPopup, closePopup } = usePopup();
  useEffect(() => {
    // Show popup after 10 seconds delay
    const timer = setTimeout(() => {
      openPopup();
    }, 10000);
    
    return () => clearTimeout(timer);
  }, [openPopup]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-lg relative overflow-hidden animate-zoom-in border-4 border-secondary/20">
        
        {/* Close Button */}
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all z-10"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Content Side */}
          <div className="w-full p-8 md:p-10">
            <div className="text-center mb-6">
              <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Admissions Open 2026-27</span>
              <h2 className="text-3xl font-serif font-bold text-primary mb-2">Join Our Legacy</h2>
              <p className="text-gray-500 text-sm">Fill out the form below to enquire about admissions.</p>
            </div>

            <div className="mt-4 min-h-[400px]">
              <MerittoIframeForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPopup;
