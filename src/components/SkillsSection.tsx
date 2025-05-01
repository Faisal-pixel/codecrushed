import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface Skill {
  name: string;
  icon: string;
  description: string;
  category: 'frontend' | 'backend' | 'other';
}

const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAllSkills, setShowAllSkills] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const skills: Skill[] = [
    // Frontend
    { 
      name: 'React', 
      icon: '⚛️', 
      description: 'Building interactive UIs with React and its ecosystem including hooks, context API, and more.', 
      category: 'frontend' 
    },
    { 
      name: 'Next.js', 
      icon: '▲', 
      description: 'Creating server-rendered React applications with optimized performance and SEO.',
      category: 'frontend' 
    },
    {
      name: 'CSS',
      icon: '🎨',
      description: 'Structuring and styling web pages using cascading styles for layout and responsiveness.',
      category: 'frontend'
    },
    {
      name: 'SCSS',
      icon: '🧵',
      description: 'Extending CSS with variables, nesting, and mixins for maintainable stylesheets.',
      category: 'frontend'
    },
    {
      name: 'Framer Motion',
      icon: '🎞️',
      description: 'Animating React components with smooth transitions and interactive motion effects.',
      category: 'frontend'
    },
    { 
      name: 'Tailwind CSS', 
      icon: '🎨', 
      description: 'Utilizing utility-first CSS framework for rapid UI development with consistent design.',
      category: 'frontend' 
    },
    {
      name: 'Styled Components',
      icon: '💅',
      description: 'Styling React components with scoped, dynamic CSS using JavaScript.',
      category: 'frontend'
    },
    { 
      name: 'TypeScript', 
      icon: '📘', 
      description: 'Writing type-safe JavaScript code for better developer experience and fewer bugs.',
      category: 'frontend' 
    },
    { 
      name: 'ShadCN', 
      icon: '🧩', 
      description: 'Leveraging ShadCN components for accessible, customizable UI elements.',
      category: 'frontend' 
    },
    {
      name: 'JavaScript',
      icon: '🟨',
      description: 'Writing dynamic and functional web experiences using the core language of the web.',
      category: 'frontend'
    },
    
    // Backend
    { 
      name: 'Firebase', 
      icon: '🔥', 
      description: 'Using Firebase for authentication, real-time database, and cloud functions.',
      category: 'backend' 
    },
    {
      name: 'Supabase',
      icon: '🧪',
      description: 'Managing authentication, real-time data, and storage with an open-source Firebase alternative.',
      category: 'backend'
    },
    {
      name: 'PostgreSQL',
      icon: '🐘',
      description: 'Handling structured relational data with a robust SQL-based open-source database system.',
      category: 'backend'
    },
    {
      name: 'SQL',
      icon: '📊',
      description: 'Querying and manipulating data in relational databases with structured query language.',
      category: 'backend'
    },
    { 
      name: 'Node.js', 
      icon: '🟢', 
      description: 'Building scalable server-side applications with JavaScript runtime.',
      category: 'backend' 
    },
    {
      name: 'Express.js',
      icon: '🚂',
      description: 'Creating scalable server-side logic and APIs with Node.js and minimal boilerplate.',
      category: 'backend'
    },
    { 
      name: 'MongoDB', 
      icon: '🍃', 
      description: 'Working with MongoDB for flexible, scalable NoSQL database solutions.',
      category: 'backend' 
    },
    {
      name: 'EJS',
      icon: '📄',
      description: 'Rendering dynamic HTML templates using embedded JavaScript syntax.',
      category: 'backend'
    },
    
    // Others
    { 
      name: 'Git', 
      icon: '📝', 
      description: 'Version control and collaboration using Git and GitHub.',
      category: 'other' 
    },
    { 
      name: 'WordPress', 
      icon: '📰', 
      description: 'Creating and customizing WordPress sites with themes and plugins.',
      category: 'other' 
    },
    { 
      name: 'Web3', 
      icon: '🔗', 
      description: 'Developing decentralized applications with blockchain technologies.',
      category: 'other' 
    },
    { 
      name: 'Figma', 
      icon: '🎭', 
      description: 'Designing and prototyping user interfaces for web and mobile applications.',
      category: 'other' 
    },
    {
      name: 'APIs',
      icon: '🔌',
      description: 'Integrating applications and services through structured endpoints and data exchange.',
      category: 'other'
    },
    {
      name: 'Axios',
      icon: '📡',
      description: 'Handling HTTP requests and responses with a promise-based JavaScript client.',
      category: 'other'
    }
  ];

  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory) 
    : skills;

  // Limit to 8 skills if not showing all
  const visibleSkills = showAllSkills 
    ? filteredSkills 
    : filteredSkills.slice(0, 8);

  const handleSkillClick = (skillName: string) => {
    if (activeSkill === skillName) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skillName);
    }
  };

  const handleCategoryClick = (category: string | null) => {
    setActiveCategory(category);
    setActiveSkill(null);
    // Reset showAllSkills when changing categories
    setShowAllSkills(false);
  };

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  // Category buttons for mobile and desktop layouts
  const renderCategoryButtons = () => {
    const categories = [
      { id: null, label: 'All' },
      { id: 'frontend', label: 'Frontend' },
      { id: 'backend', label: 'Backend' },
      { id: 'other', label: 'Others' }
    ];

    // Blog-like tabs for mobile
    if (isMobile) {
      return (
        <div className="flex overflow-x-auto pb-2 mb-4 no-scrollbar">
          <div className="flex space-x-2 px-4 mx-auto">
            {categories.map(category => (
              <button
                key={category.id || 'all'}
                onClick={() => handleCategoryClick(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-codecrushed-orange text-black' 
                    : 'bg-codecrushed-blue/20 text-codecrushed-blue hover:bg-codecrushed-blue/30'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Original desktop layout
    return (
      <div className="flex justify-center mb-10">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category.id || 'all'}
              onClick={() => handleCategoryClick(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id 
                  ? 'bg-codecrushed-orange text-black' 
                  : 'bg-codecrushed-blue/20 text-codecrushed-blue hover:bg-codecrushed-blue/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-codecrushed-dark"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            <span className="text-codecrushed-orange">03.</span> Skills & Tech Stack
          </h2>
          <p className="text-codecrushed-muted mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools that I work with to build modern web applications. Click on any of them to see more details.
          </p>
        </div>
        
        {renderCategoryButtons()}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`tech-card cursor-pointer ${
                activeSkill === skill.name 
                  ? 'border-codecrushed-orange' 
                  : 'border-codecrushed-blue/20'
              }`}
              onClick={() => handleSkillClick(skill.name)}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-bold text-codecrushed-light">{skill.name}</h3>
              </div>
              
              {activeSkill === skill.name && (
                <motion.p 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-codecrushed-muted mt-2"
                >
                  {skill.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Show more/less skills button - adjusted for mobile */}
        {filteredSkills.length > 8 && (
          <div className="flex justify-center mt-10 px-4">
            <Button
              variant="outline"
              className="border-codecrushed-orange text-codecrushed-orange hover:bg-codecrushed-orange/10 hover:text-codecrushed-orange hover:border-codecrushed-orange group w-full sm:w-auto"
              onClick={toggleShowAllSkills}
            >
              {showAllSkills ? (
                <>
                  Show Less <ChevronUp className="ml-1 group-hover:text-codecrushed-orange" />
                </>
              ) : (
                <>
                  Show More Skills <ChevronDown className="ml-1 group-hover:text-codecrushed-orange" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
