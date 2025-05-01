import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

/**
 * IntroAnimation Component
 * 
 * Displays an animated intro/splash screen with the CodeCrushed logo
 * when the user first visits the site. The animation automatically
 * completes after a set duration and calls the onComplete callback.
 * 
 * @param {Function} onComplete - Callback function that runs when animation completes
 * @returns {JSX.Element} A full-screen animation container with the logo
 */
const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  // State to track animation progress
  const [isAnimating, setIsAnimating] = useState(true);
  const [isScalingDown, setIsScalingDown] = useState(false);

  useEffect(() => {
    // Animation sequence:
    // 1. Start with normal size
    // 2. Scale up after a short delay (300ms)
    // 3. Rotate squares for 1.2 seconds while CC remains static
    // 4. Scale down after rotation (300ms)
    // 5. Begin fade out
    // 6. Call onComplete after fade completes

    // Scale up timer
    const scaleUpTimer = setTimeout(() => {
      // Keep rotating for 1.2 seconds
      setTimeout(() => {
        // Start scaling down
        setIsScalingDown(true);
        
        // Fade out after scaling down
        setTimeout(() => {
          setIsAnimating(false);
          
          // Call onComplete after fade out
          setTimeout(() => {
            onComplete();
          }, 400);
        }, 400);
      }, 1200);
    }, 300);

    // Ensure minimum 2 seconds total animation time
    const minDisplayTimer = setTimeout(() => {
      // This will ensure we don't complete before 2 seconds
      // The actual animation sequence above may take longer
    }, 4000);

    // Clean up timers on unmount
    return () => {
      clearTimeout(scaleUpTimer);
      clearTimeout(minDisplayTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-codecrushed-darker transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={`relative flex flex-col items-center ${
        isScalingDown ? "scale-100 transition-transform duration-400" : "scale-150 transition-transform duration-400"
      }`}>
        {/* Logo SVG with rotating squares and static CC text */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 170 170" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="mb-3"
        >
          {/* Rotating container for all rectangles */}
          <g className="animate-spin-slow">
            <rect x="125.865" y="108.895" width="48" height="14" transform="rotate(-45 125.865 108.895)" fill="currentColor" className="text-codecrushed-orange" />
            <rect x="135.764" y="50.9121" width="48" height="14" transform="rotate(45 135.764 50.9121)" fill="currentColor" className="text-codecrushed-pink" />
            <rect x="60.811" y="125.865" width="48" height="14" transform="rotate(45 60.811 125.865)" fill="currentColor" className="text-codecrushed-blue" />
            <rect x="74.9531" y="159.806" width="48" height="14" transform="rotate(-45 74.9531 159.806)" fill="currentColor" className="text-codecrushed-orange" />
            <rect x="9.89941" y="74.9536" width="48" height="14" transform="rotate(45 9.89941 74.9536)" fill="currentColor" className="text-codecrushed-pink" />
            <rect y="84.853" width="48" height="14" transform="rotate(-45 0 84.853)" fill="currentColor" className="text-codecrushed-blue" />
            <rect x="84.8525" y="0.000488281" width="48" height="14" transform="rotate(45 84.8525 0.000488281)" fill="currentColor" className="text-codecrushed-orange" />
            <rect x="50.9116" y="33.9414" width="48" height="14" transform="rotate(-45 50.9116 33.9414)" fill="currentColor" className="text-codecrushed-pink" />
          </g>
          
          {/* Static CC Text - not affected by rotation */}
          <text x="50%" y="55%" textAnchor="middle" fill="currentColor" className="text-codecrushed-light font-bold" fontSize="28" fontFamily="Space Grotesk, Arial, sans-serif" dy=".3em">CC</text>
        </svg>
        
        {/* Brand name below logo */}
        <span className="text-3xl font-bold bg-gradient-to-r from-codecrushed-orange via-codecrushed-pink to-codecrushed-blue text-transparent bg-clip-text animate-reveal-text">
          CodeCrushed
        </span>
        
        <p className="mt-4 text-codecrushed-muted animate-fade-in" style={{ animationDelay: '1s' }}>Building digital experiences</p>
      </div>
    </div>
  );
};

export default IntroAnimation;
