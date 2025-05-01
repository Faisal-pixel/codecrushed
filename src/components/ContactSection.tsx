
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  MessageSquare, 
  Send, 
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github className="h-6 w-6" />, 
      url: 'https://github.com/Faisal-pixel', 
      color: 'hover:text-[#6e5494]' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="h-6 w-6" />, 
      url: 'https://www.linkedin.com/in/faisal-adams-omokugbo/', 
      color: 'hover:text-[#0077b5]' 
    },
    { 
      name: 'Twitter', 
      icon: <Twitter className="h-6 w-6" />, 
      url: 'https://x.com/code_crushed', 
      color: 'hover:text-[#1DA1F2]' 
    },
    { 
      name: 'YouTube', 
      icon: <Youtube className="h-6 w-6" />, 
      url: 'https://youtube.com', 
      color: 'hover:text-[#FF0000]' 
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-codecrushed-dark"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            <span className="text-codecrushed-orange">07.</span> Get In Touch
          </h2>
          <p className="text-codecrushed-muted mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-codecrushed-light mb-6 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-codecrushed-orange" />
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-codecrushed-light mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-codecrushed-darker border-codecrushed-blue/20 focus:border-codecrushed-blue"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-codecrushed-light mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="bg-codecrushed-darker border-codecrushed-blue/20 focus:border-codecrushed-blue"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-codecrushed-light mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  className="bg-codecrushed-darker border-codecrushed-blue/20 focus:border-codecrushed-blue resize-none"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
              </div>
              
              <Button 
                type="submit" 
                className={`w-full transition-all duration-300 ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-codecrushed-orange hover:bg-codecrushed-orange/90 text-black'
                }`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    Sending...
                    <svg className="animate-spin ml-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    Message Sent
                    <CheckCircle className="ml-2 h-4 w-4" />
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
          
          <div className="glass-card p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-codecrushed-light mb-6">
                Connect With Me
              </h3>
              
              <p className="text-codecrushed-muted mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                {socialLinks.map(link => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-codecrushed-darker transition-all duration-300 ${link.color} hover:scale-110`}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-codecrushed-blue/10 rounded-lg p-6 border border-codecrushed-blue/20">
              <h4 className="text-codecrushed-light font-bold mb-3">
                Read my articles
              </h4>
              <p className="text-codecrushed-muted mb-4">
                Check out my technical blogs and tutorials on Medium and Hashnode.
              </p>
              <div className="flex space-x-3">
                <a 
                  href="https://medium.com/@codecrushed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-codecrushed-darker rounded-md text-codecrushed-light hover:bg-codecrushed-blue/20 transition-colors duration-300"
                >
                  Medium
                </a>
                <a 
                  href="https://code-crushed.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-codecrushed-darker rounded-md text-codecrushed-light hover:bg-codecrushed-blue/20 transition-colors duration-300"
                >
                  Hashnode
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
