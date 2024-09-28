import React from 'react';
import './Bahia.css';

function Bahia() {
  return (
    <div className="bahia-travel-page">
      <section className="intro">
        <h2>A Magia da Bahia: Uma Jornada Inesquecível</h2>
        <p>Recentemente, tive a sorte de embarcar em uma viagem para a Bahia, e não consigo esperar para compartilhar com vocês todas as maravilhas que encontrei nessa terra cheia de história, cultura e beleza natural.
        </p>
      </section>
      <section className="highlights">
        <h2>Destaques da Bahia</h2>
        <div className="highlight-item">
          <img src="/images/bahia1.jpg" alt="Salvador" className="highlight-image" />
          <h3>Salvador</h3>
          <p>
          Em Salvador, mergulhei na história no Pelourinho e saborei o famoso acarajé. As praias, como a Praia do Forte, foram deslumbrantes, com águas cristalinas e recifes de coral para mergulhos inesquecíveis.
          </p>
          <p>A cultura local também me encantou – participei de uma roda de capoeira e 
            explorei a charmosa cidade de Cachoeira. Para fechar a viagem, relaxei na tranquilidade da Ilha de Itaparica. </p>
          <p> A Bahia é um verdadeiro tesouro de beleza natural e cultura vibrante. Se tiver a chance, vá explorar!
          </p>
        </div>
      </section>
      <section className="tips">
        <h2>Dicas de Viagem</h2>
        <ul>
          <li>Experimente a culinária baiana, especialmente o acarajé e a moqueca.</li>
          <li>Visite Salvador durante o Carnaval para uma experiência cultural inesquecível.</li>
          <li>Leve protetor solar e repelente, especialmente se for explorar áreas ao ar livre.</li>
        </ul>
      </section>
    </div>
  );
}

export default Bahia;