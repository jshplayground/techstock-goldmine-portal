
"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Globe({ className }) {
  const globeRef = useRef(null);
  
  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <div 
        ref={globeRef}
        className="relative size-full flex items-center justify-center"
      >
        {/* Glowing orb to replace the globe */}
        <motion.div 
          className="absolute size-[65%] rounded-full bg-gradient-to-r from-techstock-gold/10 to-techstock-gold/40 blur-md"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        <motion.div 
          className="absolute size-[60%] rounded-full bg-gradient-to-r from-techstock-gold/20 to-techstock-gold/30"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Animated connection lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-techstock-gold"
            initial={{
              x: -100 + Math.random() * 200,
              y: -100 + Math.random() * 200,
              opacity: 0
            }}
            animate={{
              x: -100 + Math.random() * 200,
              y: -100 + Math.random() * 200,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gold glow in the center */}
        <div className="absolute size-[40%] rounded-full bg-gradient-to-r from-techstock-gold/30 to-techstock-gold/60 blur-lg" />
      </div>
    </div>
  );
}
