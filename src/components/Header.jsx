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

        {/* --- COLUNA DA FOTO (MOLDURA FIXA) --- */}
        <motion.div
          // Entrada suave vindo de baixo para cima
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image-container"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="avatar-frame">
            <video
              src="/avatarpiscando.mp4"
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controls={false}
              onLoadedData={(e) => e.target.play()}
              className="avatar-video"
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </motion.div>

        {/* --- COLUNA DO TEXTO --- */}
        <div className="hero-text-container">
          {/* Tag de Status */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="tag"
            style={{ marginBottom: '1rem', display: 'inline-block' }}
          >
            🚀 Disponível para Estágio
          </motion.span>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="home-title"
          >
            <span>Kaliandrik</span>
            <div className="typewriter-container">
              <span className="typewriter-text">Azevedo</span>
            </div>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="home-subtitle"
          >
            Desenvolvedor Full Stack em formação. Apaixonado por transformar lógica em interfaces incríveis.
          </motion.p>

          {/* Tags de Linguagens (Entrada em cascata) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="project-tags"
            style={{ marginBottom: '2rem' }}
          >
            <span className="method" style={{ padding: '8px 15px', fontSize: '0.8rem' }}>
              <Coffee size={14} /> Java
            </span>
            <span className="method" style={{ padding: '8px 15px', fontSize: '0.8rem' }}>
              <Code2 size={14} /> React
            </span>
            <span className="method" style={{ padding: '8px 15px', fontSize: '0.8rem' }}>
              <Globe size={14} /> SQL
            </span>
          </motion.div>

          {/* Botão de Ação */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, delay: 1 }}
            onClick={scrollToContact}
            className="cta-button primary"
          >
            Vamos conversar <ChevronRight size={18} />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default Header;