import React from 'react';
import FadeIn from './FadeIn';


const Symbol = () => {
  return (
    
    <div className="flex justify-center items-center mt-10"> {/* Adjusted height using TailwindCSS */}
    
      <FadeIn duration={1.5} initial={{ opacity: 0, x: 0 }}> {/* Shortened initial x distance */}
        <div className="text-6xl font-bold text-white transform hover:scale-105 transition-transform duration-300">COROLE</div> {/* TailwindCSS for styling, using inherit color */}
      </FadeIn>
      
    </div>
    
  );
}

export default Symbol;

