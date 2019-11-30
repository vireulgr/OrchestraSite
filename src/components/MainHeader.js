import React from 'react';
import NavList from '../components/NavList';

function MainHeader(props) {
  return (
    <header className='text-center'>
      <div className='mb-2 d-flex flex-row align-items-center justify-content-between'>
        <a href='/'><img src='https://via.placeholder.com/100' alt='logo1' /></a>
        <div>
          <p className='my-0'>Длинный Подзаголовок Один</p>
          <p className='my-0'>Ещё более длинный Подзаголовок Два с уточнение первого подзаголовка</p>
          <h1 className='my-0'>Собственно название &#8209; конторы</h1>
          <b>Некая поясняющая информация, касающася отличительных черт данной конторы</b>
        </div>
        <a href='/'><img src='https://via.placeholder.com/100' alt='logo2' /></a>
        <a href='/'><img src='https://via.placeholder.com/100' alt='logo3' /></a>
      </div>
      <NavList />
    </header>
  );
}

export default MainHeader;
