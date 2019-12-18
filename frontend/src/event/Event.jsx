import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

function Event(props) {
  const EventElement = styled.div`
    background-color: #fff;
    font-family: 'Roboto Slab', serif;
    padding: 5px 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px #9B9696;
    margin: 10px 10px;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  const { item } = props;
  const { date, title, place } = item;
  const dateObj = new Date(date);
  const day = format(dateObj, 'd');
  const month = format(dateObj, 'MMM');
  return (
    <EventElement>
      <span>
        {day}
        <br />
        {month}
      </span>
      <h3>{title}</h3>
      <span className="text-truncate">{place}</span>
    </EventElement>
  );
}

Event.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    place: PropTypes.string,
  }).isRequired,
};
export default Event;
