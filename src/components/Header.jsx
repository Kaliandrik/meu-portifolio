import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Coffee, Code2, Globe } from 'lucide-react';

const Header = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="section">
      <div className="container hero-grid">
        
        {/* --- COLUNA DA FOTO --- */}
        {/* No Mobile, por ser a primeira Div no grid (ou com ajuste de order), ela aparece em cima */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hero-image-container"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <img 
            src="/kaliandrik.jpeg" 
            alt="Kaliandrik Azevedo" 
            className="profile-photo-circle" 
          />
        </motion.div>

        {/* --- COLUNA DO TEXTO --- */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text-container"
        >
          <span className="tag" style={{ marginBottom: '1rem', display: 'inline-block' }}>
            🚀 Disponível para Estágio
          </span>
          <h1 className="home-title">
  Kaliandrik <span className="typewriter-text">Azevedo</span>
</h1>
          <p className="home-subtitle">
            Desenvolvedor Full Stack em formação. Apaixonado por transformar lógica em interfaces incríveis.
          </p>
          
          <div className="project-tags" style={{ marginBottom: '2rem' }}>
            <span className="method" style={{ padding: '8px 15px', fontSize: '0.8rem' }}>
              <Coffee size={14}/> Java
            </span>
            <span className="method" style={{ padding: '8px 15px', fontSize: '0.8rem' }}>
              <Code2 size={14}/> React
            </span>
            <span className="method" style={{ padding: '8px 15px', fontSize: '0.8rem' }}>
              <Globe size={14}/> SQL
            </span>
          </div>

          <button onClick={scrollToContact} className="cta-button primary">
            Vamos conversar <ChevronRight size={18} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Header;