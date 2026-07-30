import React, { useEffect } from 'react';

const MerittoPopupForm: React.FC = () => {
  useEffect(() => {
    // Check if script is already added
    const scriptId = 'meritto-popup-script';
    
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://in4cdn.npfs.co/js/widget/npfwpopup.js';
      script.async = true;
      script.onload = () => {
        // Initialize widget after script is loaded
        if (typeof (window as any).NpfWidgetsInit === 'function') {
          // The variable name from their docs (though it doesn't need to be saved globally in React)
          (window as any).npfWfce959b65782a3ff8705944e828a93e1 = new (window as any).NpfWidgetsInit({
            "widgetId": "fce959b65782a3ff8705944e828a93e1",
            "baseurl": "widgets.in4.nopaperforms.com",
            "formTitle": "Enquiry Form",
            "titleColor": "#FF0033",
            "backgroundColor": "#ddd",
            "iframeHeight": "500px",
            "buttonbgColor": "#4c79dc",
            "buttonTextColor": "#FFF",
          });
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already there, just initialize
      if (typeof (window as any).NpfWidgetsInit === 'function') {
        (window as any).npfWfce959b65782a3ff8705944e828a93e1 = new (window as any).NpfWidgetsInit({
          "widgetId": "fce959b65782a3ff8705944e828a93e1",
          "baseurl": "widgets.in4.nopaperforms.com",
          "formTitle": "Enquiry Form",
          "titleColor": "#FF0033",
          "backgroundColor": "#ddd",
          "iframeHeight": "500px",
          "buttonbgColor": "#4c79dc",
          "buttonTextColor": "#FFF",
        });
      }
    }
  }, []);

  return (
    <button 
      type="button" 
      className="npfWidgetButton npfWidget-fce959b65782a3ff8705944e828a93e1"
      style={{
        padding: '10px 20px',
        backgroundColor: '#4c79dc',
        color: '#FFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold'
      }}
    >
      Enquire Now!
    </button>
  );
};

export default MerittoPopupForm;
