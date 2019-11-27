import React from 'react';

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
    let linkText = '';
    try {
      linkText = new URL(props.newsitem.tickets).hostname;
    }
    catch (e) {
      linkText = 'Перейти на сайт';
    }
    this.state.linkText = linkText;
  }

  render() {
    let newsitem = this.state.newsitem;

    return (
      <article className='card newsitem shadow-sm'>
        <div className='card-header'>
          <h4 className='card-title'>{newsitem.title}</h4>
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
