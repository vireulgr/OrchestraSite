import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsList from '../components/news/NewsList';

function NewsPage() {
  return (
    <div className="container">
      <Header />

      <h2>News page</h2>

      <NewsList />

      <Footer />
    </div>
  );
}

export default NewsPage;
