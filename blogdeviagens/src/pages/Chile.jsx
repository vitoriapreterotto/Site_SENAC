import React from 'react';
import './Chile.css';

function Chile() {
  return (
    <div className="chile">
      <section className="intro">
        <h2>Uma Viagem de Encantos Diversos no Chile</h2>
        <p>
          O Chile é um país longo e estreito na costa oeste da América do Sul, conhecido por sua diversidade geográfica e climática. De desertos áridos a geleiras imponentes, o Chile oferece uma vasta gama de experiências para todos os tipos de viajantes.
        </p>
      </section>
      <section className="highlights">
        <h2>Destaques do Chile</h2>
        <div className="highlight-item">
          <img src="/images/chile1.jpg" alt="Deserto do Atacama" className="highlight-image" />
          <h3>Deserto do Atacama</h3>
          <p>
            O Deserto do Atacama é um dos lugares mais secos do planeta e oferece paisagens de tirar o fôlego, incluindo formações rochosas únicas e lagos coloridos.
          </p>
          <p>Minha jornada começou explorando as paisagens surreais do Valle de la Luna, onde as formações rochosas e as dunas criam um cenário quase lunar. As cores do pôr do sol aqui são simplesmente mágicas.</p>
          <p>A paisagem do Atacama é deslumbrante e parece de outro planeta. Se você ama aventuras em locais exóticos e paisagens impressionantes, esse destino é imperdível!</p>
        </div>
      
      </section>
      <section className="tips">
        <h2>Dicas de Viagem</h2>
        <ul>
          <li>Leve roupas adequadas para as variações climáticas, especialmente se planeja visitar diferentes regiões do país.</li>
          <li>Explore a culinária chilena, incluindo pratos como empanadas e pastel de choclo.</li>
          <li>Não perca a oportunidade de observar o céu noturno no Deserto do Atacama, famoso por sua clareza.</li>
        </ul>
      </section>
    </div>
  );
}

export default Chile;