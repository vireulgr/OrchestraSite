import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MediaPage(props) {
  return (
    <div className='container'>
      <Header />

      <div className='jumbotron'>
        <h2>Media page</h2>
      </div>

      <Footer />
    </div>
  );
}

export default MediaPage;
