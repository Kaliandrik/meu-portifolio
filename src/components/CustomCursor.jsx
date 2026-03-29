import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // Configuração de mola para um movimento suave (efeito "smooth")
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Ajuste de -10 para centralizar a bolinha de 20px no bico do mouse
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: mouseX,
        y: mouseY,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        backgroundColor: '#7c3aed', // Cor primária (roxo)
        borderRadius: '50%',
        pointerEvents: 'none', // Importante: permite clicar nos botões "através" do cursor
        zIndex: 9999,
        mixBlendMode: 'difference', // Efeito visual que inverte as cores ao passar por textos
        boxShadow: '0 0 15px rgba(124, 58, 237, 0.5)'
      }}
    />
  );
};

// ESTA LINHA É OBRIGATÓRIA PARA O App.jsx FUNCIONAR
export default CustomCursor;