import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <header className='text-center'>
        <p>Длинный Подзаголовок Один</p>
        <p>Ещё более длинный Подзаголовок Два с уточнение первого подзаголовка</p>
        <h1>Собственно название конторы</h1>
        <b>Некая поясняющая информация, касающася отличительных черт данной конторы</b>
      </header>
    );
  }
}

export default Header;
