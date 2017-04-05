import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

import AppLayout from './AppLayout';
import ButtonsPage from './pages/Buttons';
import CardsPage from './pages/Cards';
import ListsPage from './pages/Lists';
import LoadingPage from './pages/Loading';
import TextfieldsPage from './pages/Textfields';

const Index = (props) => {
  return <h1>react-to-mdl Examples</h1>
}

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppLayout} >
        <IndexRoute component={Index} />
        <Route path="buttons" component={ButtonsPage} />
        <Route path="cards" component={CardsPage} />
        <Route path="lists" component={ListsPage} />
        <Route path="loading" component={LoadingPage} />
        <Route path="textfields" component={TextfieldsPage} />
      </Route>
    </Router>
  )
}

export default App;
