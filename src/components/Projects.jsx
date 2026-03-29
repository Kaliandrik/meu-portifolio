import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Database, 
  ShieldCheck, 
  Layout, 
  Code2, 
  ExternalLink, 
  Github 
} from 'lucide-react';

const Projects = () => {
  // Dados do projeto (centralizados aqui para facilitar manutenção)
  const project = {
    title: "Bolso Inteligente",
    description: "Recentemente percebi que estava gastando muito com besteira e decidi resolver isso do jeito que um desenvolvedor faz: criando minha própria solução!",
    longDescription: "Uma solução completa para controle de gastos, utilizando Firebase para autenticação e banco de dados em tempo real, garantindo que seus dados estejam sempre seguros e acessíveis.",
    techs: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://bolso-inteligente-xi.vercel.app/",
    repo: "https://github.com/Kaliandrik/bolso-inteligente"
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <Rocket /> Projetos em Destaque
        </h2>

        <motion.div 
          className="featured-project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* COLUNA DO TEXTO (Esquerda) */}
          <div className="project-info">
            <div className="project-badge">Projeto Principal</div>
            <h3>{project.title}</h3>
            <p className="project-intro">{project.description}</p>
            <p className="project-details">{project.longDescription}</p>

            <div className="project-features-grid">
              <div className="feature-item">
                <Database size={18} /> <span>Integração Firebase</span>
              </div>
              <div className="feature-item">
                <ShieldCheck size={18} /> <span>Segurança (.env)</span>
              </div>
              <div className="feature-item">
                <Layout size={18} /> <span>Tailwind Responsive</span>
              </div>
              <div className="feature-item">
                <Code2 size={18} /> <span>TypeScript Typed</span>
              </div>
            </div>

            <div className="project-tags">
              {project.techs.map(tech => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>

            <div className="project-actions">
              <a href={project.link} target="_blank" rel="noreferrer" className="cta-button primary">
                <ExternalLink size={18} /> Ver Online
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer" className="cta-button secondary">
                <Github size={18} /> Repositório
              </a>
            </div>
          </div>
          
          {/* COLUNA DA LOGO (Direita) COM EFEITO DE FLUTUAÇÃO */}
          <div className="project-visual">
             {/* Transformamos a img em motion.img e adicionamos a animação */}
             <motion.img 
               src="/logobolsainteligente.png" 
               alt="Logo do projeto Bolso Inteligente" 
               className="project-logo-display"
               
               // --- O EFEITO DE FLUTUAÇÃO ESTÁ AQUI ---
               animate={{
                 // Move para cima e para baixo (Y)
                 y: [-10, 10, -10], // Começa -10px, vai até +10px, volta para -10px
               }}
               transition={{
                 // Duração de 4 segundos para um ciclo completo (suave)
                 duration: 4, 
                 // Repetição infinita
                 repeat: Infinity, 
                 // Facilita a transição para parecer suave (ease in-out)
                 ease: "easeInOut"
               }}
               // ----------------------------------------
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;