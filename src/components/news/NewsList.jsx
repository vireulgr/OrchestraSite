import React from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';

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

  loadNewsList() {
    axios.get('http://localhost:3000/news')
      .then(resp => this.setState({isLoading: false, newsList: resp.data}))
      .catch(error => this.setState({isLoading: false, error}));
  }

  render() {
    const { newsList, baseUrl } = this.state;
    let newsListCmps = {};
    if (newsList.length > 0) {
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
    else {
      newsListCmps = (<p>No data yet</p>);
    }

    return (
      <section>
        {newsListCmps}
      </section>
    );
  }
}

export default NewsList;
