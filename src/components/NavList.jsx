import React from 'react';
import { Link } from 'react-router-dom';

function NavList() {
  return (
    <ul className="list-group list-group-horizontal justify-content-around">
      <li className="py-1 list-group-item list-group-item-action"><Link className="color-dark h5" to="/news">Новости</Link></li>
      <li className="py-1 list-group-item list-group-item-action"><Link className="color-dark h5" to="/events">События</Link></li>
      <li className="py-1 list-group-item list-group-item-action"><Link className="color-dark h5" to="/media">Медиа</Link></li>
      <li className="py-1 list-group-item list-group-item-action"><Link className="color-dark h5" to="/collective">Коллектив</Link></li>
      <li className="py-1 list-group-item list-group-item-action"><Link className="color-dark h5" to="/contacts">Контакты</Link></li>
    </ul>
  );
}

export default NavList;
