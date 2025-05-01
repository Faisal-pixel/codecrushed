
import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingLogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

/**
 * LoadingLogo Component
 * 
 * Displays an animated loading spinner using the CodeCrushed logo.
 * The animation includes rotation and pulsing effects for visual interest.
 * 
 * @param {string} size - Controls the size of the loading indicator (small, medium, large)
 * @param {string} className - Additional CSS classes
 * @returns {JSX.Element} An animated loading indicator using the CC logo
 */
const LoadingLogo: React.FC<LoadingLogoProps> = ({ size = 'medium', className }) => {
  // Determine size dimensions
  const dimensions = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {/* SVG Logo Icon with animation - squares rotate while CC remains static */}
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 170 170" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          dimensions[size],
          'filter drop-shadow-glow'
        )}
      >
        {/* Rotating rectangles */}
        <g className="animate-spin-slow">
          <rect x="125.865" y="108.895" width="48" height="14" transform="rotate(-45 125.865 108.895)" fill="currentColor" className="text-codecrushed-orange animate-pulse-subtle" style={{ animationDelay: '0ms' }} />
          <rect x="135.764" y="50.9121" width="48" height="14" transform="rotate(45 135.764 50.9121)" fill="currentColor" className="text-codecrushed-pink animate-pulse-subtle" style={{ animationDelay: '100ms' }} />
          <rect x="60.811" y="125.865" width="48" height="14" transform="rotate(45 60.811 125.865)" fill="currentColor" className="text-codecrushed-blue animate-pulse-subtle" style={{ animationDelay: '200ms' }} />
          <rect x="74.9531" y="159.806" width="48" height="14" transform="rotate(-45 74.9531 159.806)" fill="currentColor" className="text-codecrushed-orange animate-pulse-subtle" style={{ animationDelay: '300ms' }} />
          <rect x="9.89941" y="74.9536" width="48" height="14" transform="rotate(45 9.89941 74.9536)" fill="currentColor" className="text-codecrushed-pink animate-pulse-subtle" style={{ animationDelay: '400ms' }} />
          <rect y="84.853" width="48" height="14" transform="rotate(-45 0 84.853)" fill="currentColor" className="text-codecrushed-blue animate-pulse-subtle" style={{ animationDelay: '500ms' }} />
          <rect x="84.8525" y="0.000488281" width="48" height="14" transform="rotate(45 84.8525 0.000488281)" fill="currentColor" className="text-codecrushed-orange animate-pulse-subtle" style={{ animationDelay: '600ms' }} />
          <rect x="50.9116" y="33.9414" width="48" height="14" transform="rotate(-45 50.9116 33.9414)" fill="currentColor" className="text-codecrushed-pink animate-pulse-subtle" style={{ animationDelay: '700ms' }} />
        </g>
        
        {/* Static CC Text */}
        <text x="50%" y="55%" textAnchor="middle" fill="currentColor" className="text-codecrushed-light font-bold" fontSize="28" fontFamily="Space Grotesk, Arial, sans-serif" dy=".3em">CC</text>
      </svg>
      
      {/* Optional loading text */}
      <span className="mt-2 text-sm text-codecrushed-muted animate-pulse">Loading</span>
    </div>
  );
};

export default LoadingLogo;
