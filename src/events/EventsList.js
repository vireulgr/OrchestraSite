import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import config from '../config';

import Event from '../event/Event';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${config.apiURL}/events`);
      this.setState({
        data: data
      });
      console.log(this.state.data);
      // this.render();
    }
    catch (e) {
      console.error(e);
      this.setState({ error: e });
    }
  };


  render() {
    const EventsBlock = styled.div`
      background-color: #F4F4F5;

      text-align: left;
      padding: 10px 30px;
    `;

    const EventsList = styled.ul`
      margin: 0;
      padding: 0;
    `;

    const { data } = this.state;
    console.log(data);

    const events = data.map((item) => {
      console.log(item);
      return <Event key={item.id} item={item} />
    });
    console.log('events');
    console.log(events);

    return (
      <EventsBlock>
        <h2>Предстоящие события</h2>
        <EventsList>{events}</EventsList>
      </EventsBlock>
    )
  }
};

export default EventsList;