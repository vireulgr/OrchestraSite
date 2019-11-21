import React from 'react';
import NavList from '../components/NavList';

function Header(props) {
  return (
    <header className='text-center'>
      <div className='d-flex flex-row align-items-center justify-content-start'>
        <a href='/'><img src='https://via.placeholder.com/100' alt='logo1' /></a>
        <h1>Собственно название &#8209; конторы</h1>
      </div>
      <NavList />
    </header>
  );
}

export default Header;
