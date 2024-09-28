import React from 'react';
import './Peru.css';

function Peru() {
  return (
    <div className="peru">
<section className="intro">
        <h2>O Peru</h2>
        <p>
          O Peru é um país com uma rica herança cultural e histórica, conhecido por suas antigas civilizações, paisagens espetaculares e deliciosa culinária.
        </p>
      </section>
      <section className="highlights">
        <h2>Destaques do Peru</h2>
        <div className="highlight-item">
          <img src="/images/peru1.jpg" alt="Machu Picchu" className="highlight-image" />
          <h3>Machu Picchu</h3>
          <p>
            Machu Picchu é uma das maravilhas do mundo antigo e um dos destinos mais icônicos do Peru, oferecendo uma vista impressionante da cidade inca antiga.
          </p>
          <p> Acabei de voltar de uma experiência incrível em Machu Picchu, e quero compartilhar um pouco dessa aventura. 
A jornada começou com uma caminhada pela Trilha Inca, que revelou paisagens deslumbrantes e um pouco da história 
antiga dos Incas. </p>
          <p>Ao chegar em Machu Picchu, a visão das ruínas antigas com as montanhas ao fundo foi simplesmente 
            espetacular. Cada detalhe, desde os templos até os terraços, parecia contar uma história de um passado 
            glorioso. O nascer do sol sobre as ruínas foi um momento mágico que eu nunca vou esquecer.
          </p>
        </div>
      </section>
      <section className="tips">
        <h2>Dicas de Viagem</h2>
        <ul>
          <li>Prepare-se para a altitude se estiver visitando lugares altos como Cusco e o Lago Titicaca.</li>
          <li>Experimente a gastronomia peruana, incluindo pratos como ceviche e cuy.</li>
          <li>Reserve seu ingresso para Machu Picchu com antecedência para garantir sua visita.</li>
        </ul>
      </section>
    </div>
  );
}

export default Peru;