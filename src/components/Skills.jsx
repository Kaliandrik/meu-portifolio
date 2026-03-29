import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Terminal, Cpu } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <Layout className="icon-purple" />,
      skills: ["React.js & Hooks", "JavaScript ES6+", "HTML5 & CSS3", "Tailwind / Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server className="icon-blue" />,
      skills: ["Java (POO)", "SQL / MySQL", "Lógica de Programação", "Noções de Spring"]
    }
  ];

  return (
    <section id="skills" className="section-skills">
      <div className="container">
        <h2 className="section-title">
          <Terminal size={32} /> Minhas Skills
        </h2>
        
        <div className="skills-grid">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.title}
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="icon-wrapper">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              
              <ul className="skills-list">
                {cat.skills.map(skill => (
                  <li key={skill}>
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;