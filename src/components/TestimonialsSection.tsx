
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image?: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Mr Tomiwa",
      role: "Co-Founder",
      company: "Kastanos Coffee Shop",
      testimonial: "Faisal delivered an exceptional product that exceeded our expectations. His attention to detail and ability to understand our business needs resulted in a solution that truly elevates our user experience."
    },
    {
      id: 2,
      name: "Mr Raheem",
      role: "CEO",
      company: "Heem Walker",
      testimonial: "Working with Faisal was a pleasure from start to finish. He's not just a developer, but a strategic thinker who brings valuable insights to every project. Our conversion rates increased by 45% after implementing his recommendations."
    },
    {
      id: 3,
      name: "David Okunoye (Drex)",
      role: "Technical Lead",
      company: "Curaboard",
      testimonial: "Faisal's code quality is excellent. His work is clean, well-documented, and follows best practices. He quickly became an essential part of our team, solving complex challenges with efficient solutions."
    },
    {
      id: 4,
      name: "Ademide Ajose",
      role: "CEO",
      company: "Curaboard",
      testimonial: "The website Faisal built for us is not only beautiful but also performs incredibly well. Page load times decreased by 70%, and our SEO rankings have significantly improved. A true professional who delivers results."
    },
  ];

  const resetAutoplayTimer = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
    }
    
    if (isAutoPlaying) {
      autoPlayRef.current = setTimeout(() => {
        goToNext();
      }, 5000);
    }
  };

  useEffect(() => {
    resetAutoplayTimer();
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current);
      }
    };
  }, [activeIndex, isAutoPlaying]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-codecrushed-dark"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            <span className="text-codecrushed-orange">05.</span> Testimonials
          </h2>
          <p className="text-codecrushed-muted mt-4 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what others have to say about working with me.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div 
            className="overflow-hidden relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  ref={el => testimonialRefs.current[index] = el}
                  className="min-w-full px-4"
                >
                  <div className="glass-card p-8 md:p-10">
                    <Quote className="text-codecrushed-orange opacity-30 w-12 h-12 mb-4" />
                    
                    <p className="text-codecrushed-light text-lg md:text-xl mb-8 italic">
                      "{testimonial.testimonial}"
                    </p>
                    
                    <div className="flex items-center">
                      {testimonial.image ? (
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-codecrushed-blue/20 flex items-center justify-center text-codecrushed-blue font-bold mr-4">
                          {getInitials(testimonial.name)}
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-codecrushed-light font-bold">{testimonial.name}</h4>
                        <p className="text-codecrushed-muted text-sm">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToPrevious}
              className="rounded-full border-codecrushed-blue/30 text-codecrushed-blue hover:bg-codecrushed-blue/10 hover:text-codecrushed-blue"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-codecrushed-orange w-6' 
                      : 'bg-codecrushed-blue/30 hover:bg-codecrushed-blue/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={goToNext}
              className="rounded-full border-codecrushed-blue/30 text-codecrushed-blue hover:bg-codecrushed-blue/10 hover:text-codecrushed-blue"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
