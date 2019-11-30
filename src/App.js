import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsItem from './components/news/newsitem';

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='jumbotron'>
        <h1>Дратути</h1>
        <p>Текст для подзаголовка</p>
      </div>
      {newsItems}
      <Footer />
    </div>
  );
}

export default App;
