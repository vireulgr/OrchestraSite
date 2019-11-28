import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

function Event(props) {

  const Event = styled.li`
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
  `
  console.log('props');
  console.log(props);
  console.log(props.item.title);

  const { item } = props;
  const date = new Date(item.date);
  const day = format(date, 'd');
  console.log(day);
  const month = format(date, 'MMM');
  console.log(month);
  return (
    <Event>
      <span>{day}<br/>{month}</span>
      <h3>{item.title}</h3>
      <span>{item.place}</span>
    </Event>
  );
};

export default Event;
