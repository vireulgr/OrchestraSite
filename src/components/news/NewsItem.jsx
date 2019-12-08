import React from 'react';
import { Link } from 'react-router-dom';

function EventPart(props) {
  const { ticketsLink, ticketsText, dateTimeStr } = props;

  if (ticketsLink == null || dateTimeStr == null) return null;

  return (
    <footer className="clearfix">
      <div className="float-right">
        <p>Билеты</p>
        <a
          href={ticketsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-info"
        >
          {ticketsText}
        </a>
      </div>
      <div className="float-left">
        <p>Дата и время события</p>
        <p>{dateTimeStr}</p>
      </div>
    </footer>
  );
}

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newsitem: props.newsitem };
    let linkText = '';
    try {
      linkText = new URL(props.newsitem.tickets).hostname;
    } catch (e) {
      linkText = 'Перейти на сайт';
    }
    this.state.linkText = linkText;
  }

  render() {
    const { newsitem, linkText } = this.state;
    const { baseUrl } = this.props;
    const linkTo = `${baseUrl}/${newsitem.id}`;

    return (
      <article className="my-2 card shadow-sm">
        <div className="card-header">
          <h4 className="card-title"><Link to={linkTo}>{newsitem.title}</Link></h4>
          <small className="text-muted">{newsitem.date}</small>
        </div>
        <div className="card-body">
          <p className="card-text">
            {newsitem.text}
          </p>
          <EventPart
            ticketsLink={newsitem.tickets}
            ticketsText={linkText}
            dateTimeStr={newsitem.eventdatetime}
          />
        </div>
      </article>
    );
  }
}

export default NewsItem;
