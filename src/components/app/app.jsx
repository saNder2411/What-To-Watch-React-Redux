import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import CardScreen from '../card-screen/card-screen.jsx';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          exact
          component={Main}
        />
        <Route
          path='/cards:id'
          render={({match}) => {
            const {id} = match.params;
            return <CardScreen selectedCardId={+id}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
