import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import IntroAnimation from '@/components/IntroAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Index Component - Main Page
 * 
 * This is the primary landing page component that organizes all sections of the portfolio.
 * It manages the intro animation, theme toggling, and sections display.
 * 
 * @returns {JSX.Element} The complete portfolio page structure
 */
const Index = () => {
  // State for controlling the intro animation visibility
  const [showIntro, setShowIntro] = useState(true);
  
  // State for managing dark/light theme preference
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  // Hook for displaying toast notifications
  const { toast } = useToast();

  useEffect(() => {
    // // Check if user has visited before to determine if intro animation should show
    // const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
    
    // if (hasVisitedBefore) {
    //   // Skip intro animation for returning visitors
    //   setShowIntro(false);
    // } else {
    //   // Set flag for first-time visitors
    //   localStorage.setItem('hasVisitedBefore', 'true');
    // }

    // Easter egg: Konami code implementation
    // (Up, Up, Down, Down, Left, Right, Left, Right, B, A)
    let keysPressed: string[] = [];
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add the pressed key to the array
      keysPressed.push(e.key);
      // Keep only the last 10 keys (konami code length)
      keysPressed = keysPressed.slice(-10);
      
      // Check if the keys match the Konami code
      if (keysPressed.join('') === konamiCode.join('')) {
        // Display success toast when Konami code is entered
        toast({
          title: "🎮 You found a secret!",
          description: "You've unlocked the Konami code. Very impressive!",
          variant: "default",
        });
        
        // Add spin animation to the entire page
        document.documentElement.classList.add('animate-spin');
        setTimeout(() => {
          document.documentElement.classList.remove('animate-spin');
        }, 1000);
      }
    };
    
    // Add and remove event listener for keydown events
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toast]);

  /**
   * Toggles between dark and light theme
   * Updates both state and DOM classes
   */
  const toggleTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    setIsDarkTheme(!isDarkTheme);
  };

  /**
   * Callback function when intro animation completes
   */
  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen">
      {/* Show intro animation only when state is true */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      
      {/* Main content - only shown after intro animation completes */}
      {!showIntro && (
        <>
          <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <HeroSection />
          <TimelineSection />
          <SkillsSection />
          <ProjectsSection />
          <TestimonialsSection />
          <BlogSection />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
