import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import CardScreen from '../card-screen/card-screen.jsx';
import {connect} from 'react-redux';
import withCardsService from '../../hocs/with-cards-service/with-cards-service.jsx';
import ActionCreator from '../../actions/action-creator.js';

class App extends PureComponent {

  componentDidMount() {
    const {cardsService, cardsLoaded} = this.props;
    const cardsData = cardsService.getCards();
    cardsLoaded(cardsData);
  }

  render() {
    return (
      <Switch>
        <Route
          path='/'
          exact
          render={() => <Main />}
        />
        <Route
          path='/cards:id'
          render={({match}) => {
            const {id} = match.params;
            return <CardScreen selectedCardId={+id}/>;
          }}
        />
      </Switch>
    );
  }
}

App.propTypes = {
  cardsService: PropTypes.object.isRequired,
  cardsLoaded: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  cardsLoaded: (newCards) => {
    dispatch(ActionCreator.cardsLoaded(newCards));
  }
});

export default withCardsService(connect(undefined, mapDispatchToProps)(App));
