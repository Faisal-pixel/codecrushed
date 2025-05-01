
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export const AnimationExample = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const expandVariants = {
    collapsed: { height: "80px", overflow: "hidden" },
    expanded: { height: "auto" }
  };

  return (
    <div className="space-y-8 p-6 bg-card rounded-lg shadow-sm">
      <div className="flex space-x-4 justify-center">
        <Button 
          onClick={() => setIsVisible(!isVisible)}
          variant="outline"
        >
          {isVisible ? "Hide" : "Show"} Elements
        </Button>
        
        <Button 
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
        >
          {isExpanded ? "Collapse" : "Expand"} Content
        </Button>
      </div>

      {/* Staggered animation example */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="bg-primary/5 rounded-md p-4 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Animated Item {item}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/collapse example */}
      <motion.div
        className="bg-secondary/50 rounded-md p-4 overflow-hidden"
        variants={expandVariants}
        animate={isExpanded ? "expanded" : "collapsed"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <p>This is some expandable content that demonstrates the animation capabilities.</p>
        <p className="mt-4">It contains multiple paragraphs of text that will be revealed when expanded.</p>
        <p className="mt-4">Framer Motion makes these kinds of animations simple to implement and smooth to experience.</p>
      </motion.div>
    </div>
  );
};
