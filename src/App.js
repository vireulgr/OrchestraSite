import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NewsPage from './pages/News';
import EventsPage from './pages/Events';
import MediaPage from './pages/Media';
import CollectivePage from './pages/Collective';
import ContactsPage from './pages/Contacts';

function App() {
  return (
    <Switch>

      <Route exact path='/news'>
        <NewsPage />
      </Route>

      <Route exact path='/events'>
        <EventsPage />
      </Route>

      <Route exact path='/media'>
        <MediaPage />
      </Route>

      <Route exact path='/collective'>
        <CollectivePage />
      </Route>

      <Route exact path='/contacts'>
        <ContactsPage />
      </Route>

      <Route path='/'>
        <HomePage />
      </Route>

    </Switch>
  );
}

export default App;
