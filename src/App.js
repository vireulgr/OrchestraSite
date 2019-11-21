import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='jumbotron'>
        <h1>Сайт оркестра СПб</h1>
        <p>Текст для подзаголовка</p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
