import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ArrowRight, ArrowUp } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
}

/**
 * TimelineSection Component
 *
 * Displays a responsive vertical timeline showing the developer's journey
 * with animated elements that appear as the user scrolls. Initially shows
 * only the first 4 items, with a "Read more" button to reveal the rest.
 * A "Show less" button collapses back to the initial 4 items.
 *
 * @returns {JSX.Element} A section with interactive timeline elements
 */
const TimelineSection: React.FC = () => {
  // State to track which timeline items are visible
  const [activeItems, setActiveItems] = useState<string[]>([]);

  // State to track whether all items are visible or just the first 4
  const [showAllItems, setShowAllItems] = useState(false);

  // Reference to the section container for scroll observation
  const sectionRef = useRef<HTMLDivElement>(null);

  // Timeline content data
  const timelineItems: TimelineItem[] = [
    {
      id: "00",
      title: "🕹️ Robotics Journey – Roborave 2017",
      description:
        "My tech journey started in 2017 when I was introduced to robotics at Blazers College. We built and programmed Arduino and LEGO-based robots to compete in various challenges like maze-solving and sumo battles. My team placed 3rd in the RoboRave competition at Green Legacy Resort, Abeokuta. That moment sparked my passion for tech.",
    },
    {
      id: "01",
      title: "🎓 B.Sc in Electrical and Electronics Engineering",
      description:
        "I pursued a degree in Electrical and Electronics Engineering, learning software architecture, embedded systems, and the Internet of Things. My coursework also covered power systems, microprocessors, and programming concepts. This helped me bridge hardware with software and deepened my problem-solving skills.",
    },
    {
      id: "02",
      title: "💻 Self-Taught Developer",
      description:
        "In 2019, I began teaching myself how to code, exploring Python and basic programming logic. In 2020, I enrolled in Angela Yu's Web Development Bootcamp, where I gained strong foundational knowledge in HTML, CSS, JavaScript, and web dev concepts. This marked the beginning of my journey into frontend development.",
    },
    {
      id: "03",
      title: "🧠 RadicalX Hackathon 2021",
      description:
        "In 2021, I participated in a hackathon hosted by RadicalX, where we built a generative AI chatbot that acted as a rough diagnostic tool. I led my team through the development phase, sharpening my teamwork and leadership skills. It was my first real taste of building impactful solutions under pressure.",
    },
    {
      id: "04",
      title: "🛠️ Frontend Intern – Codeware Nigeria (2023)",
      description:
        "I interned as a Frontend Developer at Codeware Nigeria in 2023. During my time there, I built a procurement platform for an organization, enabling vendors to bid across different categories. This experience gave me hands-on exposure to building real-world applications in a production environment.",
    },
    {
      id: "05",
      title: "🚀 HatchDev Full Stack Training – Nithub (2024)",
      description:
        "I was selected among 2000+ applicants for the HatchDev Full Stack Engineering program at Nithub. This training helped me solidify both frontend and backend development skills. It was a key turning point where I transitioned from frontend-only to full stack engineering.",
    },
    {
      id: "06",
      title: "🌍 Frontend Engineer – ZakatChain.io (2024)",
      description:
        "In 2024, I joined ZakatChain.io as a Frontend Engineer. I built and maintained a blockchain-powered platform for transparent and secure Zakat and Sadaqah donations. Working on a Web3 project helped me understand blockchain integration and scalability.",
    },
    {
      id: "07",
      title: "🛒 Frontend Engineer – Curaboard (2024)",
      description:
        "I worked as a contract Frontend Engineer at Curaboard, integrating their auth SDK with platforms like Shopify, Wix, and Ecwid. I also built features like item collections and wishlists, which boosted user engagement by 50%. My contributions played a key role in expanding the platform's adoption by 80%.",
    },
    {
      id: "08",
      title: "🧑‍🏫 Training Department Lead – ECX",
      description:
        "I volunteered at Engineering Career Expo (ECX), first leading the frontend track team in ECX 4.0. In ECX 5.0, I was appointed as the head of the entire training department. This experience helped me grow in mentorship, curriculum structuring, and leadership.",
    },
    {
      id: "09",
      title: "🎤 Event Host – IEEE",
      description:
        "I volunteered with IEEE as an event host. I was responsible for anchoring both tech events and panel sessions, engaging audiences and panelists alike. It helped me become a more confident public speaker and communicator.",
    },
    {
      id: "10",
      title: "👩‍🔬 Event Planner – Engineering Ladies Initiative (ELI)",
      description:
        "I supported the Engineering Ladies Initiative as an event planner. I'm passionate about gender inclusivity in STEM, so I worked to organize events that highlighted women's roles in engineering. It was a fulfilling experience combining tech with advocacy.",
    },
    {
      id: "11",
      title: "🥾 Lead Full Stack Engineer – Heem Walker",
      description:
        "I led the development of Heem Walker's official website using WordPress. I integrated automatic social media updates and built a feature with Three.js that lets users preview 3D shoe designs. This helped increase customer interaction and digital presence for the brand.",
    },
    {
      id: "12",
      title: "☕ Lead Full Stack Engineer – Kasatanos Coffee",
      description:
        "I led a tech integration project for Kasatanos, a coffee shop at the Mobolaji Train Station. I built tools to streamline the order process for both customers and staff. The digital system helped boost sales and improve customer experience.",
    },
  ];

  // Get visible items - either all items or just the first 4
  const visibleItems = showAllItems ? timelineItems : timelineItems.slice(0, 4);

  // Set up intersection observer outside the useEffect to avoid dependency issues
  useEffect(() => {
    // Create a new observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // When an item is visible in the viewport
            const id = entry.target.getAttribute("data-id");
            if (id && !activeItems.includes(id)) {
              // Add it to active items to trigger animation
              setActiveItems((prev) => [...prev, id]);
            }
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: "0px",
        threshold: 0.3, // Trigger when 50% of item is visible
      }
    );

    // Get all timeline items and observe them
    const timelineElements = document.querySelectorAll(".timeline-item");
    timelineElements.forEach((el) => observer.observe(el));

    // Clean up by unobserving elements when component unmounts
    return () => {
      timelineElements.forEach((el) => observer.unobserve(el));
    };
  }, [showAllItems, activeItems]); // Only re-run when showAllItems changes, NOT when activeItems changes

  // Handle toggling visibility of items
  const handleToggleItems = (show: boolean) => {
    setShowAllItems(show);
    // Reset active items when toggling
    setActiveItems([]);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="pt-20 relative overflow-hidden" // changed py-20 to pt-20
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-codecrushed-darker via-codecrushed-dark to-codecrushed-darker"></div>

      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">
            <span className="text-codecrushed-orange">02.</span> My Experience
          </h2>
          <p className="text-codecrushed-muted mt-4 max-w-2xl mx-auto">
            My journey in tech has been a path of continuous learning and
            growth. Here's how I've evolved as a developer.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line - only as tall as the visible items */}
          <div
            className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-codecrushed-blue/20 transition-all duration-300"
            style={{
              height: `calc(100% - ${visibleItems.length > 0 ? 80 : 0}px)`,
            }}
          ></div>

          {/* Timeline items */}
          {visibleItems.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={cn(
                "timeline-item mb-16 md:mb-24 relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center",
                index % 2 === 1 ? "md:flex-row-reverse" : "",
                // Apply fade-in animation when item becomes active
                activeItems.includes(item.id) ? "opacity-100" : "opacity-0"
              )}
              style={{
                transition: "opacity 0.3s ease, transform 0.5s ease",
                transitionDelay: `${index * 0.2}s`, // Staggered animation
                transform: activeItems.includes(item.id)
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              {/* Timeline marker (circle with number) */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                } order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <div className="timeline-marker bg-codecrushed-darker relative group">
                  <span className="text-codecrushed-orange group-hover:text-codecrushed-blue transition-colors duration-300">
                    {item.id}
                  </span>
                  {/* Animated border on hover */}
                  <div className="absolute -top-1 -left-1 -right-1 -bottom-1 rounded-full border border-codecrushed-orange scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Timeline content card */}
              <div
                className={`glass-card p-6 order-2 ${
                  index % 2 === 1 ? "md:order-1" : "md:order-2"
                } 
                  hover:shadow-[0_0_15px_rgba(76,201,240,0.3)] transition-all duration-300 group`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-codecrushed-light group-hover:text-codecrushed-orange transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-codecrushed-muted">{item.description}</p>
              </div>
            </div>
          ))}

          {/* Toggle Button Container */}
          <div className="flex justify-center mt-8 mb-16 animate-fade-in relative z-10">
            {/* Read More Button - only shown when not all items are visible */}
            {!showAllItems && (
              <Button
                onClick={() => handleToggleItems(true)}
                variant="outline"
                className="group relative border-codecrushed-orange text-codecrushed-orange hover:text-codecrushed-blue hover:border-codecrushed-blue hover:bg-transparent px-8 py-6"
              >
                <span className="mr-2">Read more</span>
                <ArrowRight className="inline-block group-hover:text-codecrushed-blue" />
              </Button>
            )}

            {/* Show Less Button - only shown when all items are visible */}
            {showAllItems && (
              <Button
                onClick={() => handleToggleItems(false)}
                variant="outline"
                className="group relative border-codecrushed-orange text-codecrushed-orange hover:text-codecrushed-blue hover:border-codecrushed-blue hover:bg-transparent px-8 py-6"
              >
                <span className="mr-2">Show less</span>
                <ArrowUp className="inline-block group-hover:text-codecrushed-blue" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
