import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsItem from './components/news/newsitem';

function App() {
  let news = [{
    eventdatetime: Date(),
    datetime: Date(),
    tickets: 'https://google.com',
    title: 'Заголовок новости/события',
    text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          `
  },
  {
    eventdatetime: null,
    tickets: null,
    datetime: Date(),
    title: 'Заголовок новости/события',
    text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          `
  }];

  let newsItems = news.map((item) => (<NewsItem newsitem = {item} />));

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
