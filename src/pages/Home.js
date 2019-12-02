import React from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="container">
      <MainHeader />

      <div className="jumbotron">
        <h2>Events ribbon</h2>
      </div>

      <div className="jumbotron">
        <h2>Carousel component</h2>
        <p>Текст для подзаголовка</p>
      </div>

      <div className="jumbotron">
        <h2>News tiles</h2>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
