import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Rocket, Target, Sparkles, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <motion.span
            initial={{ rotate: -20 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            <GraduationCap size={32} />
          </motion.span> 
          Sobre Mim
        </h2>

        <div className="about-grid">
          {/* LADO ESQUERDO: TEXTO PRINCIPAL */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-highlight">
              <Sparkles className="icon-tiny" />
              <span>Desenvolvedor em constante evolução</span>
            </div>
            
            <p className="description-p">
              Sou aluno do curso <strong>Técnico em Desenvolvimento de Sistemas</strong> e apaixonado por transformar lógica em soluções reais. Minha jornada na tecnologia começou cedo, e desde então, foco em construir uma base sólida em arquitetura de software e boas práticas.
            </p>
            
            <p className="description-p dim">
              Minha experiência em competições de programação moldou minha forma de pensar: busco sempre o caminho mais eficiente, trabalho bem em equipe e não vejo problemas complexos como obstáculos, mas como oportunidades de aprendizado.
            </p>
          </motion.div>

          {/* LADO DIREITO: CARDS DE FOCO */}
          <div className="about-cards-container">
            <motion.div 
              className="info-card-premium"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-icon-bg">
                <Award className="icon-purple" />
              </div>
              <div>
                <h4>Formação Acadêmica</h4>
                <p>Técnico em Desenv. de Sistemas</p>
                <small>Conhecimento técnico e prático</small>
              </div>
            </motion.div>

            <motion.div 
              className="info-card-premium"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="card-icon-bg">
                <Rocket className="icon-purple" />
              </div>
              <div>
                <h4>Objetivo de Carreira</h4>
                <p>Crescimento Profissional</p>
                <small>Foco em dominar stacks modernas e contribuir em projetos de alto impacto.</small>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;