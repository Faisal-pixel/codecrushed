import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ArrowRight, Play, Music, Headphones, ExternalLink } from 'lucide-react';
import me1 from "@/images/me/Faisal Adams.jpg"
import me2 from "@/images/me/profile.jpg"
import { useIsMobile } from '@/hooks/use-mobile';

const defautMeImages = [
  me1,
  me2
];

/**
 * HeroSection Component
 * 
 * The main landing section that first greets visitors.
 * Features animated text, introduction, and call-to-action buttons.
 * 
 * @returns {JSX.Element} A full-screen hero section with animated elements
 */
const HeroSection: React.FC = () => {
  // States for text animation and visibility
  const [showText, setShowText] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const period = 2000; // Pause duration between typing/deleting cycles
  const sectionRef = useRef<HTMLDivElement>(null);
  const [meImages, setMeImages] = useState(defautMeImages);
  const isMobile = useIsMobile();
  
  // State for controlling Spotify player state
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Text options for the typing animation
  const rotatingTexts = useMemo(() => [ 'Software Engineer',
  'Frontend Developer', 'Backend Engineer', 'React/NextJs Specialist', 'Problem Solver'
  ], []);
  
  useEffect(() => {
    /**
     * Controls the typewriter effect animation for rotating text
     * Handles both typing and deleting phases
     */
    const tick = () => {
      const i = loopNum % rotatingTexts.length;
      const fullText = rotatingTexts[i];
      const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
      
      setText(updatedText);
      
      if (isDeleting) {
        // Speed up deletion phase
        setDelta(prevDelta => prevDelta / 2);
      }
      
      if (!isDeleting && updatedText === fullText) {
        // Complete word typed - switch to deleting mode
        setIsDeleting(true);
        setDelta(period); // Pause before starting to delete
      } else if (isDeleting && updatedText === '') {
        // Word completely deleted - switch to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500); // Initial typing speed for new word
      }
    };
    
    // Set interval for typewriter animation
    const ticker = setInterval(() => {
      tick();
    }, delta);
    
    // Clean up interval on unmount
    return () => { clearInterval(ticker) };
  }, [text, delta, isDeleting, loopNum, rotatingTexts]);
  
  useEffect(() => {
    // Set up intersection observer to detect when hero section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger text animation when section is visible
          setShowText(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of section is visible
    );
    
    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Clean up observer on unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  /**
   * Handles the click on the play button
   * Opens Spotify in a new tab and toggles play state
   */
  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
    // Optional: Open Spotify link when user clicks play
    if (!isPlaying) {
      window.open('https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA', '_blank');
    }
  };
  
  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-codecrushed-darker via-codecrushed-dark to-codecrushed-darker"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 px-4 sm:px-0 text-center sm:text-left mx-auto sm:mx-0 w-full">
            <div className="space-y-2">
              {/* Greeting with fade-up animation */}
              <p className={`text-codecrushed-orange font-mono ${showText ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
                Hello there, I'm
              </p>
              
              {/* Name with fade-up animation */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${showText ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
                Faisal Adams
              </h1>
              
              {/* Role with typewriter effect and fade-up animation */}
              <div className={`h-12 mt-2 ${showText ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                <span className="text-codecrushed-muted text-xl sm:text-2xl">
                  I'm a <span className="text-codecrushed-blue">{text}</span>
                  <span className="animate-blink text-codecrushed-orange">|</span>
                </span>
              </div>
            </div>
            
            {/* Introduction text with fade-up animation */}
            <p className={`text-codecrushed-muted text-lg max-w-md mx-auto sm:mx-0 ${showText ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
              I craft engaging, scalable, and high-performance web solutions with React, Next.js, and modern web technologies. I am committed to delivering high-performance applications that are fast, accessible, and fully responsive across all devices. When I'm not coding, you'll probably find me listening to classical like Ray Charles - What'd I say.
            </p>
            
            {/* Call-to-action buttons with fade-up animation */}
            <div className={`flex flex-col sm:flex-row w-full sm:w-auto gap-4 ${showText ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
              <Button size="lg" className="bg-codecrushed-orange hover:bg-codecrushed-orange/90 text-black w-full sm:w-auto">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-codecrushed-blue text-codecrushed-blue hover:bg-codecrushed-blue/10 w-full sm:w-auto">
                Hire Me <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - Spotify Player Element */}
          <div className={`w-full h-full flex justify-center items-center ${showText ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated background gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-r from-codecrushed-orange to-codecrushed-pink rounded-full blur-3xl opacity-20 animate-float"></div>
              
              {/* Spotify-like player card */}
              <div className="glass-card p-8 relative z-10">
                {/* Music player container */}
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-codecrushed-darker flex flex-col items-center justify-center relative">
                  {/* Album art background with overlay */}
                  <div className="absolute inset-0 opacity-30 bg-cover bg-center" 
                       style={{ backgroundImage: "url('https://i.scdn.co/image/ab67616d0000b2734b2a42d1b5efbe0ec7dabcf1')" }}>
                  </div>
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-codecrushed-darker/70 to-codecrushed-darker/95"></div>
                  
                  {/* Song info */}
                  <div className="z-10 flex flex-col items-center text-center space-y-4">
                    <Music className="w-12 h-12 text-codecrushed-orange mb-2" />
                    <h3 className="text-xl font-bold text-codecrushed-light">What'd I Say (Live)</h3>
                    <p className="text-codecrushed-muted">Ray Charles</p>
                    
                    {/* Play button */}
                    <button 
                      onClick={handlePlayClick}
                      className="mt-6 w-16 h-16 rounded-full bg-codecrushed-orange flex items-center justify-center hover:scale-105 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-black" fill="black" />
                    </button>
                    
                    {/* Spotify link */}
                    <a 
                      href="https://open.spotify.com/track/4kbj5MwxO1bq9wjT5g9HaA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 flex items-center text-codecrushed-blue hover:text-codecrushed-orange transition-colors"
                    >
                      <span>Listen on Spotify</span>
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                {/* Decorative grid elements */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-md bg-codecrushed-blue/20 flex items-center justify-center animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className={`${typeof meImages[i] === "string" ? "w-full h-full" : "w-6 h-6"}  rounded-full flex justify-center items-center bg-codecrushed-blue/30`}>
                        {
                          typeof meImages[i] === "string" ? (
                            <img src={meImages[i]} alt={`Me ${i + 1}`} className="w-full h-full object-cover rounded-full" />
                          ) : (
                            <span className="text-codecrushed-blue text-lg font-bold">{i + 1}</span>
                          )
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
