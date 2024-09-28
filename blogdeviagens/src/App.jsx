import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Contact from './pages/contact';
import About from './pages/About';
import Chile from './pages/Chile'
import Peru from './pages/Peru';
import Bahia from './pages/Bahia';
import './App.css';

const posts = [
  {
    id: '1',
    title: 'Viagem para o Chile!',
    image: '/images/travel1.jpg',
    content: 'Minha experiência incrível explorando os cerros do Chile. A culinária e a cultura foram maravilhosos! Veja mais detalhes...'
  },
  {
    id: '2',
    title: 'Aventura em Machu Picchu',
    image: '/images/travel2.jpg',
    content: 'Explorando as belezas do circo aqueológico do Peru, desde a história do século XV, até os dias de hoje! Veja nosso novo post.'
  },
  {
    id: '3',
    title: 'Explorando Salvador',
    image: '/images/travel3.jpg',
    content: 'Descobrindo as maravilhas naturais e culturais das praias da Bahia. Me acompanhe nessa jornada!'
  }
];

function Home() {
  return (
    <main>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          image={post.image}
          content={post.content}
          link={`/post/${post.id}`}
        />
      ))}
    </main>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chile" element={<Chile />} />
        <Route path="/peru" element={<Peru />} />
        <Route path="/bahia" element={<Bahia />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
