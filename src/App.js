import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/

function App() {
  return (
    <div className="App">
      <Header />
      <div class="hero"><img src="http://picsum.photos/800/600" alt="Оркестр"/></div>
      <Footer />
    </div>
  );
}

export default App;
