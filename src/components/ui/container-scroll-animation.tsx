"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "motion/react";

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
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
const translate = useTransform(scrollYProgress, [0, 1], isMobile ? [-85, -100]: [0,-100]);


  return (
    <div
      className="-mt-90 lg:-mt-15 h-[60rem] md:h-[70vw] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "800px",
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
      className="div mb-15 max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};
export const Card = ({
  rotate,
  scale,
  translate,
}: {  
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        
      }}
      className="relative -mt-12 mx-auto h-[3rem] md:h-[40rem] w-full"
    >
        <div className="-mt-36 lg:mt-0 relative mx-auto w-full lg:w-[72vw] h-auto ">
      {/* Laptop image */}
      <img
        src="/images/laptop.png"
        alt="Laptop"
        className="w-full h-full object-contain pointer-events-none"
        draggable={false}
      />

      {/* Video inside screen cutout */}
      <div className="absolute top-[4%] left-[10.8%] right-[10.7%] bottom-[17.5%] overflow-hidden rounded-md">
        <div className="w-full h-full scale-1.5">
        <video
          src="/images/interfacenew.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-1.5"
        />
        </div>
        </div>
      </div>
    </motion.div>
  );
};
