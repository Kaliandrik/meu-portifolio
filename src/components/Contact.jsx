import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const formData = new FormData(event.target);
    // Sua chave já inserida aqui:
    formData.append("access_key", "6507389f-7a58-4ab4-a56a-e4d545ae8419");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsSent(true);
        event.target.reset();
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch (error) {
      console.log("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container contact-main-grid">
        <div className="contact-info-text">
<h2 className="contact-title">
  Vamos criar algo <span className="logo-text-sub anim-gradient">juntos?</span>
</h2>
          <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
            Estou aberto a oportunidades de estágio, projetos freelancer ou apenas para trocar uma ideia sobre tech.
          </p>
          
          <div className="contact-methods">
            <a href="mailto:kaliandriksouza@gmail.com" className="method">
              <Mail size={20} /> kaliandriksouza@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kaliandrik-azevedo-768b07387/" target="_blank" rel="noreferrer" className="method">
              <Linkedin size={20} /> linkedin.com/in/kaliandrik
            </a>
            <a href="https://github.com/Kaliandrik" target="_blank" rel="noreferrer" className="method">
              <Github size={20} /> github.com/Kaliandrik
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-simple-form">
          <div className="input-group">
            <input type="text" name="name" placeholder="Seu Nome" required />
            <input type="email" name="email" placeholder="Seu E-mail" required />
            <textarea name="message" placeholder="Sua Mensagem" rows="5" required></textarea>
            
            <button type="submit" className="cta-button primary" disabled={loading || isSent}>
              {isSent ? (
                <>Enviado! <CheckCircle size={18} /></>
              ) : loading ? (
                <>Enviando...</>
              ) : (
                <>Enviar Mensagem <Send size={18} /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;