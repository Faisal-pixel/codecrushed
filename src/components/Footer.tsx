
import React from 'react';
import Logo from './Logo';
import { Github, Linkedin, Twitter, Youtube, Heart } from 'lucide-react';

/**
 * Footer Component
 * 
 * Displays the site footer with logo, navigation links, social media icons,
 * and copyright information.
 * 
 * @returns {JSX.Element} The site footer section
 */
const Footer: React.FC = () => {
  // Get current year for copyright notice
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-10 relative overflow-hidden bg-codecrushed-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-8 border-t border-codecrushed-blue/20">
          {/* Column 1: Logo and tagline */}
          <div>
            <Logo />
            <p className="text-codecrushed-muted mt-4 max-w-xs">
              Crafting modern web experiences with passion and precision.
            </p>
          </div>
          
          {/* Column 2: Quick navigation links */}
          <div>
            <h3 className="text-codecrushed-light font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">Home</a>
              <a href="#about" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">About</a>
              <a href="#skills" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">Skills</a>
              <a href="#projects" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">Projects</a>
              <a href="#testimonials" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">Testimonials</a>
              <a href="#blog" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">Blog</a>
              <a href="#contact" className="text-codecrushed-muted hover:text-codecrushed-orange transition-colors duration-300">Contact</a>
            </div>
          </div>
          
          {/* Column 3: Social media links */}
          <div>
            <h3 className="text-codecrushed-light font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {/* Social media icons with platform-specific hover colors */}
              <a 
                href="https://github.com/Faisal-pixel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-codecrushed-muted hover:text-[#6e5494] transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/faisal-adams-omokugbo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-codecrushed-muted hover:text-[#0077b5] transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/code_crushed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-codecrushed-muted hover:text-[#1DA1F2] transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-codecrushed-muted hover:text-[#FF0000] transition-colors duration-300"
                aria-label="YouTube Channel"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="text-center text-codecrushed-muted text-sm pt-6 border-t border-codecrushed-blue/20">
          <p className="flex items-center justify-center">
            © {year} CodeCrushed. Made by 
            <span className="text-codecrushed-orange ml-1">Faisal Adams</span>
          </p>
          
          {/* Decorative background elements */}
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-codecrushed-orange opacity-5 rounded-full -mb-12 -mr-12 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-codecrushed-blue opacity-5 rounded-full -mb-16 -ml-16 blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
