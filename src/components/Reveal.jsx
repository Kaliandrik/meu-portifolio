import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, x = 0, y = 50, delay = 0.1 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            x: x, 
            y: y,
            willChange: "transform, opacity" // Avisa ao navegador o que vai mudar
          },
          visible: { 
            opacity: 1, 
            x: 0, 
            y: 0 
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: 0.5, 
          delay: delay, 
          ease: [0.25, 0.1, 0.25, 1], // Ease "suave" profissional
          type: "tween" // Mais leve que spring
        }}
        style={{
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;