import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

function Event(props) {
  const EventElement = styled.li`
    margin: 0 20px;
    border-radius: 15px;
    display: inline-block;
    background-color: #fff;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
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
      <span>{place}</span>
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
