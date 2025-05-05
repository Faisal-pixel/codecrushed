import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { ExternalLink, Github, X } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
  fullDescription?: string;
  challenges?: string;
  solutions?: string;
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Curaboard",
      description: "I worked on all things authentication SDK. Integrating the SDK with Shopify, Wix, and Ecwid. Curaboard is a platform that helps to track and organize all the items you want, from any store across the web",
      image: "https://i.imgur.com/vdcuT88.jpeg",
      tags: ["React", "Liquid", "Redux", "Real-time", "Velo - Wix"],
      liveLink: "https://www.curaboard.com/",
      githubLink: "#",
      fullDescription: "Curaboard is your personal shopping companion—a single place to track and organize all the items you want, from any store across the web. No more endless tabs or lost carts—just save products, revisit them when you’re ready, and share with friends in one seamless experience..",
      challenges: "One major challenge was embedding Curaboard into Wix and similar platforms, which restrict direct DOM access and traditional script injection. I also had to expose the widget's internal API to allow site owners to customize the experience, while dealing with platform-specific limitations, event communication issues, and maintaining secure cross-site behavior.",
      solutions: "To solve this, I used platform-friendly embedding techniques such as creating a custom site plugin that complies with each platform’s limitations. I exposed the widget’s props and public functions through a clean interface, allowing site owners to configure and react to events without touching the DOM. I also implemented scoped CSS and sandboxed logic to ensure compatibility and security across integrations"
    },
    {
      id: 2,
      title: "UniPath",
      description: "Developed an interactive navigation system for University of Lagos, implementing Dijkstra's algorithm to calculate optimal routes between two points",
      image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/671cbb5849f71a000800d0ca/screenshot_2024-10-26-09-51-43-0000.webp&fit=cover&h=500&q=40&w=800",
      tags: ["NextJS", "TailwindCSS", "Web3.js", "API Integration"],
      liveLink: "https://cute-marshmallow-e6ffa5.netlify.app/",
      githubLink: "https://github.com/Faisal-pixel/unilag-map-algo",
      fullDescription: "A web application that provides an interactive map of the University of Lagos campus, allowing users to find optimal routes between locations using Dijkstra's algorithm. The application utilizes modern web technologies to deliver a seamless user experience with responsive design.",
      challenges: "Implementing Dijkstra's algorithm efficiently, ensuring real-time updates on the map, and creating a user-friendly interface. Also adding a smooth animation for the pathfinding process.",
      solutions: "Researched online on Dijkstra's Algorithm really works and implemented it using JavaScript. Used React for the frontend to create a dynamic user interface, and integrated with a mapping API to display the campus layout. Optimized the algorithm for performance and responsiveness."
    },
    {
      id: 3,
      title: "Zakat Chain",
      description: "A full-featured web app to simplify your zakat payments and experience the seamless integration of web3 technology.",
      image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/65de19ea9d291500088e7797/screenshot_2024-02-27-17-21-21-0000.webp&fit=cover&h=500&q=40&w=800",
      tags: ["Next.js", "TailwindCSS", "Web3"],
      liveLink: "https://zakatchain.io/",
      githubLink: "https://github.com/ZakatChain-io/zakat-chain-main",
      fullDescription: "ZakatChain is a decentralized web application designed to streamline zakat payments by integrating Web3 technologies. It offers a transparent and secure platform where users can calculate, manage, and distribute their zakat contributions using blockchain. The application ensures that every transaction is recorded immutably, fostering trust and accountability in the zakat process.",
      challenges: "One of the main challenges I faced was integrating Web3 payment solutions into the application. As it was my first time working with blockchain technologies, understanding the intricacies of smart contracts, wallet integrations, and ensuring secure transactions was initially daunting.",
      solutions: "I implemented smart contracts to automate zakat calculations and distributions, ensuring transparency and efficiency. Additionally, I integrated wallet functionalities that allowed users to connect their crypto wallets seamlessly, facilitating straightforward zakat payments. Through rigorous testing and iteration, I ensured that the platform was both user-friendly and secure."
    },
    {
      id: 4,
      title: "Heem walker",
      description: "Built a fully functional e-commerce website when I worked with Heem walker with wordpress and a bit of threejs.",
      image: "https://i.imgur.com/A3X05Op.jpeg",
      tags: ["WordPress", "ThreeJS"],
      liveLink: "https://heemwalker.com/",
      githubLink: "https://github.com/ZakatChain-io/zakat-chain-main",
      fullDescription: "Heem Walker is a high-end apparel brand with a reputation for integrity, quality, and excellence in footwear and leather accessories. I built the e-commerce website which shifted heem walker from a physical store to an online store. The website is built with wordpress and a bit of threejs. It helped boost sales and reach a wider audience. Customers can order different variants of leather shoes and bags. The website is fully responsive and has a user-friendly interface.",
      challenges: "My biggest challenge was probably trying to figure out how to use wordpress and also having to learn threejs. I basically used threejs to create a 3D model of the shoes and bags. I also had to learn how to use woocommerce to set up the e-commerce part of the website.",
      // solutions: "I implemented smart contracts to automate zakat calculations and distributions, ensuring transparency and efficiency. Additionally, I integrated wallet functionalities that allowed users to connect their crypto wallets seamlessly, facilitating straightforward zakat payments. Through rigorous testing and iteration, I ensured that the platform was both user-friendly and secure."
    },
    {
      id: 4,
      title: "Study Lo-Fi Music Play",
      description: " A web app that plays lo-fi music to help you study and focus.",
      image: "https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/63d4e86f8a562b4f59e6a561/screenshot_2023-01-28-09-19-10-0000.png&fit=cover&h=500&q=40&w=800",
      tags: [ "TailwindCSS", "React"],
      liveLink: "https://faisal-react-music-player.netlify.app/",
      githubLink: "https://github.com/Faisal-pixel/Music-Player",
      fullDescription: "A web application that plays lo-fi music to help you study and focus. It features a simple interface with a play/pause button and a volume control slider.",
      challenges: "Integrating the audio player with a playlist of lo-fi tracks and ensuring smooth playback across different browsers. I also wanted to create a visually appealing interface that matched the lo-fi aesthetic.",
      solutions: "I used the Web Audio API to handle audio playback and created a custom playlist feature that allows users to shuffle and repeat tracks. For the UI, I utilized Tailwind CSS to create a responsive design that fits the lo-fi theme. I also implemented local storage to save user preferences for volume and playback state."
    },
    {
      id: 5,
      title: "Promptopia",
      description: "A community-driven AI prompt-sharing platform to explore, create, and share custom prompts for various AI models.",
      image: "https://i.imgur.com/pYAO389.png",
      tags: [ "NextJs", "NextAuth", "TailwindCSS", "MongoDB", "Mongoose"],
      liveLink: "https://share-prompts-zq8p.vercel.app/",
      githubLink: "https://github.com/Faisal-pixel/share-prompts",
      fullDescription: "Developed a full-stack web app where users can log in, post, edit, and discover creative AI prompts. Integrated NextAuth for secure authentication and MongoDB for persistent prompt storage..",
      challenges: "Handling secure user sessions and implementing a seamless CRUD system with real-time updates was initially complex.",
      solutions: "Used NextAuth for session management, MongoDB for efficient data handling, and dynamic routing for smooth user experience."
    },
    {
      id: 6,
      title: "Photon",
      description: "I worked on a photo generator site. It makes use of pexels api to generate photos based on input from the search box. Users can also generate more pictures using the generate more button.",
      image: "https://i.imgur.com/WmNIm5f.png",
      tags: [ "VanillaJS", "Async", "API", "CSS"],
      liveLink: "https://faisal-pixel.github.io/Photon-Project/",
      githubLink: "https://github.com/Faisal-pixel/Photon-Project",
      // fullDescription: "Developed a full-stack web app where users can log in, post, edit, and discover creative AI prompts. Integrated NextAuth for secure authentication and MongoDB for persistent prompt storage..",
      // challenges: "Handling secure user sessions and implementing a seamless CRUD system with real-time updates was initially complex.",
      // solutions: "Used NextAuth for session management, MongoDB for efficient data handling, and dynamic routing for smooth user experience."
    },
    {
      id: 7,
      title: "Todo List",
      description: "This is my first project. It is a very basic Todo app that utilisis local storage to store added todos so as to avoid loosing them.",
      image: "https://i.imgur.com/B6eUDeL.png",
      tags: [ "HTML", "CSS", "JavaScript"],
      liveLink: "https://faisal-pixel.github.io/Todo-App/",
      githubLink: "https://github.com/Faisal-pixel/Todo-App",
      // fullDescription: "Developed a full-stack web app where users can log in, post, edit, and discover creative AI prompts. Integrated NextAuth for secure authentication and MongoDB for persistent prompt storage..",
      // challenges: "Handling secure user sessions and implementing a seamless CRUD system with real-time updates was initially complex.",
      // solutions: "Used NextAuth for session management, MongoDB for efficient data handling, and dynamic routing for smooth user experience."
    },
  ];
  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-codecrushed-darker"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            <span className="text-codecrushed-orange">04.</span> My Projects
          </h2>
          <p className="text-codecrushed-muted mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and approach to problem-solving. There are about <span className='text-codecrushed-orange'>{projects.length}</span> projects listed here and counting 👍🏾
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden h-56">
                <div className="absolute inset-0 bg-gradient-to-t from-codecrushed-darker to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-codecrushed-light mb-2 group-hover:text-codecrushed-orange transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-codecrushed-muted text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
              
              <div className="p-6 pt-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-codecrushed-blue hover:text-codecrushed-orange transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-codecrushed-blue hover:text-codecrushed-orange transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-codecrushed-dark border-codecrushed-blue/30 max-h-[85vh] my-6">
            <DialogHeader>
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl text-codecrushed-light">
                  {selectedProject.title}
                </DialogTitle>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-codecrushed-muted hover:text-codecrushed-light"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <DialogDescription className="text-codecrushed-muted">
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            
            <ScrollArea className="h-[calc(85vh-200px)] pr-4">
              <div className="relative h-64 my-4 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-codecrushed-orange mb-2">Overview</h4>
                  <p className="text-codecrushed-light">
                    {selectedProject.fullDescription}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-codecrushed-orange mb-2">Challenges</h4>
                  <p className="text-codecrushed-light">
                    {selectedProject.challenges}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-codecrushed-orange mb-2">Solutions</h4>
                  <p className="text-codecrushed-light">
                    {selectedProject.solutions}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-2 pb-2">
                  <Button 
                    className="bg-codecrushed-blue hover:bg-codecrushed-blue/90"
                    onClick={() => window.open(selectedProject.liveLink, '_blank')}
                  >
                    Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-codecrushed-orange text-codecrushed-orange hover:bg-codecrushed-orange/10"
                    onClick={() => window.open(selectedProject.githubLink, '_blank')}
                  >
                    View Code <Github className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollArea>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
