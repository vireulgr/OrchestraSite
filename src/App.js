import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsItem from './components/news/newsitem';

function App() {
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
