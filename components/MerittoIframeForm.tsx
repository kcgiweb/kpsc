import React, { useEffect, useRef } from 'react';

const MerittoIframeForm: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear the container first
    containerRef.current.innerHTML = '';

    // 1. Create the div required by Meritto
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'npf_wgts';
    widgetDiv.setAttribute('data-height', '400px');
    widgetDiv.setAttribute('data-w', 'fce959b65782a3ff8705944e828a93e1');

    // 2. Create the script that initializes the widget
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://widgets.in4.nopaperforms.com/emwgts.js';

    // Append both to the container so they execute together
    containerRef.current.appendChild(widgetDiv);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-[400px]"></div>
  );
};

export default MerittoIframeForm;
