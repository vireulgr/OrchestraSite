import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventsList.scss';

import config from '../config';

import Event from '../event/Event';

class EventsList extends React.Component {
  constructor() {
    super();
    console.log(config);
    console.log(process.env);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('http://localhost:8000/events');
    this.setState({
      data,
    });
  }


  render() {
    const sliderSettings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      className: 'slides',
    };

    const EventsBlock = styled.div`
      background-color: #F4F4F5;
      padding: 10px 30px;
    `;

    const EventsHeader = styled.h2`
      font-family: 'Roboto Slab', serif;
      font-weight: 700;
    `;

    const { data } = this.state;

    const events = data.map((item) => <Event key={item.id} item={item} />);

    return (
      <EventsBlock className="container-fluid">
        <EventsHeader className="row">Предстоящие события</EventsHeader>
        <Slider {...sliderSettings}>
          {events}
        </Slider>
      </EventsBlock>
    );
  }
}

export default EventsList;
