
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
}

const BlogSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Embracing the Quirks: JavaScript is Weird",
      excerpt: "There are so many things that make JavaScript weird. In this article, I will be introducing to a series I started, where I explore the different interesting things about JavaScript, breaking it down so that you can understand.",
      category: "Frontend",
      date: "Aug 5, 2023",
      readTime: "5 min read",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1691271288068/79446051-2a85-4ea1-b57a-6aec8905d063.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://code-crushed.hashnode.dev/title-embracing-the-quirks-javascript-is-weird"
    },
    {
      id: 2,
      title: "Demystifying the JavaScript Engine: The Magic Behind Making Computers Understand JavaScript.",
      excerpt: "Virtually everyone that has used Javascript has heard of the v8 engine. If you haven’t, don’t fret, I will explain it in this write-up",
      category: "Frontend",
      date: "Aug 5, 2023",
      readTime: "5 min read",
      image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1691271288068/79446051-2a85-4ea1-b57a-6aec8905d063.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      url: "https://code-crushed.hashnode.dev/demystifying-the-javascript-engine-the-magic-behind-making-computers-understand-javascript"
    },
    {
      id: 3,
      title: "Getting Started with Web3 Development",
      excerpt: "A comprehensive guide to beginning your journey into Web3 development with Ethereum and blockchain technologies.",
      category: "Web3",
      date: "June 22, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000",
      url: "#"
    },
    {
      id: 3,
      title: "State Management in React: Context API vs. Redux",
      excerpt: "Comparing different state management approaches in React applications and when to use each one.",
      category: "Frontend",
      date: "July 10, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000",
      url: "#"
    },
    {
      id: 4,
      title: "Building a Portfolio That Stands Out",
      excerpt: "Tips and strategies for creating a developer portfolio that captures attention and showcases your unique skills.",
      category: "Personal Projects",
      date: "August 5, 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1000",
      url: "#"
    },
    {
      id: 5,
      title: "The Future of Serverless Architecture",
      excerpt: "Exploring how serverless computing is changing web development and what it means for the future.",
      category: "Backend",
      date: "September 18, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?q=80&w=1000",
      url: "#"
    },
    {
      id: 6,
      title: "Mastering TypeScript for Better Code Quality",
      excerpt: "How to leverage TypeScript's type system to write more maintainable and bug-free code in your projects.",
      category: "Frontend",
      date: "October 7, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1000",
      url: "#"
    },
  ];

  const categories = ["Frontend", "Backend", "Web3", "Personal Projects"];

  const filteredPosts = activeCategory 
    ? blogPosts.filter(post => post.category === activeCategory) 
    : blogPosts;

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-codecrushed-darker"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            <span className="text-codecrushed-orange">06.</span> Blog & Insights
          </h2>
          <p className="text-codecrushed-muted mt-4 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={() => setActiveCategory(null)} 
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === null 
                  ? 'bg-codecrushed-orange text-black' 
                  : 'bg-codecrushed-blue/20 text-codecrushed-blue hover:bg-codecrushed-blue/30'
              }`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)} 
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-codecrushed-orange text-black' 
                    : 'bg-codecrushed-blue/20 text-codecrushed-blue hover:bg-codecrushed-blue/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <a 
              key={post.id}
              href={post.url}
              className="block"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <div className="project-card h-full flex flex-col">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredPost === post.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-codecrushed-orange text-black text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-codecrushed-muted text-sm mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    hoveredPost === post.id ? 'text-codecrushed-orange' : 'text-codecrushed-light'
                  }`}>
                    {post.title}
                  </h3>
                  
                  <p className="text-codecrushed-muted text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-4">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      hoveredPost === post.id ? 'text-codecrushed-orange' : 'text-codecrushed-blue'
                    }`}>
                      Read More →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
