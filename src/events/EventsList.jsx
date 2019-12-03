import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import config from '../config';

import Event from '../event/Event';

class EventsList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get(`${config.apiURL}/events`);
    this.setState({
      data,
    });
  }


  render() {
    const EventsBlock = styled.div`
      background-color: #F4F4F5;

      text-align: left;
      padding: 10px 30px;
    `;

    const EventsListElement = styled.ul`
      margin: 0;
      padding: 0;
    `;

    const { data } = this.state;

    const events = data.map((item) => <Event key={item.id} item={item} />);

    return (
      <EventsBlock>
        <h2>Предстоящие события</h2>
        <EventsListElement>{events}</EventsListElement>
      </EventsBlock>
    );
  }
}

export default EventsList;
