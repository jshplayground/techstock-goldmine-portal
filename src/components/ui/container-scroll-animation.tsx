
"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useDeviceCapability } from "@/hooks/useDeviceCapability";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const { isMobile } = useDeviceCapability();

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.9] : [1.05, 1];
  };

  // Use lighter animations for all devices to improve performance
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);  // reduced from 10 to 5
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -25]); // reduced from -50 to -25

  return (
    <div
      className="h-[30rem] md:h-[40rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-20 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  const { isLowPowerDevice } = useDeviceCapability();
  
  // For low power devices, use simpler shadow
  const shadowStyle = isLowPowerDevice 
    ? { boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)" }
    : { 
        boxShadow: "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042"
      };
  
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        ...shadowStyle,
        willChange: "transform",
        transform: "translateZ(0)"
      }}
      className="max-w-5xl -mt-12 mx-auto h-[24rem] md:h-[30rem] w-full border-4 border-techstock-gold/30 p-2 md:p-6 bg-black/70 rounded-[30px] backdrop-blur-lg shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-black/50 dark:bg-zinc-900/80 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};
