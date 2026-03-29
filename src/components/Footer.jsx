import React from 'react';
import { Heart, Code2, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-premium">
      <div className="container footer-content">
        <div className="footer-left">
          <p className="footer-copyright">
            © {currentYear} <span className="logo-text-sub">Kaliandrik Azevedo</span>
          </p>
          <div className="footer-location">
            <MapPin size={14} className="icon-purple" />
            <span>Tianguá - CE</span>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-stack">
            <Code2 size={16} /> 
            Feito com <Heart size={14} className="heart-icon" /> usando 
            <strong> React</strong> & <strong>Framer Motion</strong>
          </p>
        </div>
      </div>
      
      {/* Linha de brilho no topo do footer */}
      <div className="footer-glow-line"></div>
    </footer>
  );
};

export default Footer;