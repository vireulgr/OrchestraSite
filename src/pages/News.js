import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/news/NewsList';

function NewsPage(props) {
  return (
    <div className='container'>
      <Header />

      <div className='jumbotron'>
        <h2>News page</h2>
      </div>

      <NewsList />

      <Footer />
    </div>
  );
}

export default NewsPage;
