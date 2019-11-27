import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import EventsPage from './pages/Events';
import MediaPage from './pages/Media';
import CollectivePage from './pages/Collective';
import ContactsPage from './pages/Contacts';

function App() {
  let news = [{
    eventdatetime: Date(),
    datetime: Date(),
    tickets: 'https://google.com',
    title: 'Заголовок новости/события',
    text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          `
  },
  {
    eventdatetime: null,
    tickets: null,
    datetime: Date(),
    title: 'Заголовок новости/события',
    text: `Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          `
  }];

  let newsItems = news.map((item) => (<NewsItem newsitem = {item} />));

  return (
    <Switch>

      <Route exact path="/news">
        <NewsPage />
      </Route>

      <Route exact path="/events">
        <EventsPage />
      </Route>

      <Route exact path="/media">
        <MediaPage />
      </Route>

      <Route exact path="/collective">
        <CollectivePage />
      </Route>

      <Route exact path="/contacts">
        <ContactsPage />
      </Route>

      <Route path="/">
        <HomePage />
      </Route>

    </Switch>
  );
}

export default App;
