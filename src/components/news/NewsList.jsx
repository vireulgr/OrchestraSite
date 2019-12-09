import React from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import config from '../../config';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseUrl: 'news',
      newsList: [],
    };
  }

  componentDidMount() {
    this.loadNewsList();
  }

  async loadNewsList() {
    try {
      const resp = await axios.get(`${config.apiURL}/news`);
      this.setState({ isLoading: false, newsList: resp.data });
    } catch (error) {
      this.setState({ isLoading: false, error: 'API request failed' });
    }
  }

  render() {
    const {
      isLoading,
      error,
      newsList,
      baseUrl,
    } = this.state;

    let newsListCmps = [];
    if (isLoading) {
      newsListCmps = (<p>Loading...</p>);
    } else {
      if (error != null) {
        return (
          <section>
            Error occured:&nbsp;
            {error}
          </section>
        );
      }

      newsListCmps = newsList.map(
        (item) => (
          <NewsItem
            key={item.id}
            baseUrl={baseUrl}
            newsitem={item}
          />
        ),
      );
    }

    return (
      <section>
        {newsListCmps}
      </section>
    );
  }
}

export default NewsList;
