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
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri',
      },
      {
        id: '2',
        title: 'title 2',
        text: 'text 2',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri',
      },
      {
        id: '3',
        title: 'title 3',
        text: 'text 3',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri',
      },
      {
        id: '4',
        title: 'title 4',
        text: 'text 4',
        datetime: '2014-05-23T15:09:23Z',
        tickets: 'http://spb.kassir.ru/concert/zakroy-glaza-i-smotri',
      },
    ];

    this.state = {
      baseUrl: 'news',
      newsList,
    };
  }

  render() {
    const { newsList, baseUrl } = this.state;
    const newsListCmps = newsList.map(
      (item) => (
        <NewsItem
          key={item.id}
          baseUrl={baseUrl}
          newsitem={item}
        />
      ),
    );

    return (
      <section>
        {newsListCmps}
      </section>
    );
  }
}

export default NewsList;
