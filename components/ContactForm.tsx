
import React from 'react';
import MerittoIframeForm from './MerittoIframeForm';

const ContactForm: React.FC<{ title?: string }> = ({ title = "Request Prospectus" }) => {
  return (
    <div className="bg-primary p-3 pb-5 rounded-[2.5rem] shadow-xl">
      <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-10 min-h-[500px]">
        <h3 className="text-2xl font-black text-primary mb-8">{title}</h3>
        <MerittoIframeForm />
      </div>
    </div>
  );
};

export default ContactForm;
