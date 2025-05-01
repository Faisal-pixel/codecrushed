
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

/**
 * Navbar Component
 * 
 * Creates a responsive navigation bar with site links, logo, and theme toggle.
 * Includes mobile menu functionality and scroll-based styling.
 * 
 * @param {Function} toggleTheme - Function to switch between light/dark themes
 * @param {boolean} isDarkTheme - Current theme state (true = dark, false = light)
 * @returns {JSX.Element} A fixed position navigation bar
 */
const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  
  // State to track if user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // Navigation link definitions
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    // Function to handle scroll events and update navbar styling
    const handleScroll = () => {
      // Set scrolled state to true when page is scrolled down 50px or more
      setScrolled(window.scrollY > 50);
    };

    // Add scroll event listener with cleanup
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-codecrushed-darker/90 backdrop-blur-lg shadow-lg' // Compact navbar when scrolled
          : 'py-5 bg-transparent' // Expanded navbar at top of page
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Site Logo */}
          <Logo />
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-codecrushed-light/80 hover:text-codecrushed-orange transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="ml-2"
            >
              {isDarkTheme ? (
                <Sun className="h-5 w-5 text-codecrushed-orange" />
              ) : (
                <Moon className="h-5 w-5 text-codecrushed-orange" />
              )}
            </Button>
          </div>
          
          {/* Mobile Navigation Controls - Visible only on mobile */}
          <div className="flex md:hidden items-center">
            {/* Theme Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="mr-2"
            >
              {isDarkTheme ? (
                <Sun className="h-5 w-5 text-codecrushed-orange" />
              ) : (
                <Moon className="h-5 w-5 text-codecrushed-orange" />
              )}
            </Button>
            
            {/* Mobile Menu Toggle Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-codecrushed-light" />
              ) : (
                <Menu className="h-6 w-6 text-codecrushed-light" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown - Conditionally rendered */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-codecrushed-darker/95 backdrop-blur-lg border-t border-codecrushed-blue/20 animate-fade-in">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-codecrushed-light/80 hover:text-codecrushed-orange transition-colors duration-300"
                onClick={() => setIsOpen(false)} // Close menu when link is clicked
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
