import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import CardScreen from '../card-screen/card-screen.jsx';


const App = (props) => {
  const {cardsData} = props;

  return (
    <BrowserRouter>
      <Route
        path='/'
        exact
        render={() => <Main {...props}/>}
      />
      <Route
        path='/cards:id'
        exact
        render={({match}) => {
          const {id} = match.params;
          return <CardScreen activeCardId={+id} cardsData={cardsData}/>;
        }}
      />
    </BrowserRouter>
  );
};

App.propTypes = {
  promoCardData: PropTypes.object.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default App;
