import React from 'react';
import NewsItem from './NewsItem';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    // DEBUG
    const newsList = [
      {
        id: '1',
        title: 'title 1',
        text: 'text 1',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri'
      },
      {
        id: '2',
        title: 'title 2',
        text: 'text 2',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri'
      },
      {
        id: '3',
        title: 'title 3',
        text: 'text 3',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri'
      },
      {
        id: '4',
        title: 'title 4',
        text: 'text 4',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri'
      }
    ];

    this.state = {
      baseUrl: 'news',
      newsList: newsList,
    };
  }

  render() {
    const newsListCmps = this.state.newsList.map(
      item => 
        <NewsItem 
          key={item.id} 
          baseUrl={this.state.baseUrl} 
          newsitem={item} 
        />
    );

    return (
      <section>
        {newsListCmps}
      </section>
    );
  }
}

export default NewsList;

/*
 *
import React from 'react';
import { Link } from 'react-router-dom';

function EventPart(props) {
  let {ticketsLink, ticketsText, dateTimeStr} = props;

  if (ticketsLink == null || dateTimeStr == null) return null;
  else {
    return (
      <footer className='clearfix'>
        <div className='float-right'>
          <p>Билеты</p>
          <a href={ticketsLink} target='_blank' rel='noopener noreferrer' className='btn btn-info'>{ticketsText}</a>
        </div>
        <div className='float-left'>
          <p>Дата и время события</p>
          <p>{dateTimeStr}</p>
        </div>
      </footer>
    );
  }
}

class NewsItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {newsitem: props.newsitem};
    let linkText = ''
    try {
      linkText = new URL(props.newsitem.tickets).hostname;
    }
    catch (e) {
      linkText = 'Перейти на сайт';
    }
    this.state.linkText = linkText;
  }

  render() {
    const newsitem = this.state.newsitem;
    const linkTo = `${this.props.baseUrl}/${this.props.newsitem.id}`;

    return (
      <article className='my-2 card shadow-sm'>
        <div className='card-header'>
          <h4 className='card-title'><Link to={linkTo}>{newsitem.title}</Link></h4>
          <small className='text-muted'>{newsitem.datetime}</small>
        </div>
        <div className='card-body'>
          <p className='card-text'>
            {newsitem.text}
          </p>
          <EventPart ticketsLink = {newsitem.tickets} ticketsText = {this.state.linkText} dateTimeStr = {newsitem.eventdatetime} />
        </div>
      </article>
    );
  }
}

export default NewsItem;
*/
