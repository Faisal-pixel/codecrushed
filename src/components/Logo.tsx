
import React from 'react';

/**
 * Logo Component
 * 
 * Renders the CodeCrushed logo with an SVG icon and text.
 * The logo uses a custom geometric pattern with a gradient text effect for the brand name.
 * 
 * @returns {JSX.Element} A div containing the logo SVG and the brand name
 */
const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      {/* SVG Logo Icon */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 170 170" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        <rect x="125.865" y="108.895" width="48" height="14" transform="rotate(-45 125.865 108.895)" fill="currentColor" className="text-codecrushed-orange" />
        <rect x="135.764" y="50.9121" width="48" height="14" transform="rotate(45 135.764 50.9121)" fill="currentColor" className="text-codecrushed-pink" />
        <rect x="60.811" y="125.865" width="48" height="14" transform="rotate(45 60.811 125.865)" fill="currentColor" className="text-codecrushed-blue" />
        <rect x="74.9531" y="159.806" width="48" height="14" transform="rotate(-45 74.9531 159.806)" fill="currentColor" className="text-codecrushed-orange" />
        <rect x="9.89941" y="74.9536" width="48" height="14" transform="rotate(45 9.89941 74.9536)" fill="currentColor" className="text-codecrushed-pink" />
        <rect y="84.853" width="48" height="14" transform="rotate(-45 0 84.853)" fill="currentColor" className="text-codecrushed-blue" />
        <rect x="84.8525" y="0.000488281" width="48" height="14" transform="rotate(45 84.8525 0.000488281)" fill="currentColor" className="text-codecrushed-orange" />
        <rect x="50.9116" y="33.9414" width="48" height="14" transform="rotate(-45 50.9116 33.9414)" fill="currentColor" className="text-codecrushed-pink" />
        
        {/* CC Text */}
        <text x="50%" y="55%" textAnchor="middle" fill="currentColor" className="text-codecrushed-light font-bold" fontSize="28" fontFamily="Space Grotesk, Arial, sans-serif" dy=".3em">CC</text>
      </svg>
      
      {/* Brand Name with Gradient Text Effect */}
      <span className="text-2xl font-bold bg-gradient-to-r from-codecrushed-orange via-codecrushed-pink to-codecrushed-blue text-transparent bg-clip-text">
        CodeCrushed
      </span>
    </div>
  );
};

export default Logo;
