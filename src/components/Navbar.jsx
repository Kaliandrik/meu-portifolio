import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efeito para detectar o scroll e mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efeito para travar o scroll da página quando o menu mobile estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Projetos', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contato', id: 'contact' }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Altura da navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* LOGO MELHORADA */}
        <div className="logo-wrapper" onClick={() => scrollTo('home')}>
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text-main">K</span>
          <span className="logo-text-sub">A</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        
        {/* LINKS DESKTOP */}
        <div className="nav-links-desktop">
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link">
              {item.name}
            </button>
          ))}
        </div>

        {/* BOTÃO MOBILE (HAMBÚRGUER) - Adicionado zIndex para ficar sobre o menu */}
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ position: 'relative', zIndex: 2001 }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* MENU MOBILE OVERLAY */}
        <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="mobile-link">
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;