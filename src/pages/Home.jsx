import React from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import Events from '../events/EventsList';

function HomePage() {
  return (
    <div className="container-fluid">
      <MainHeader />
      <Events />

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
