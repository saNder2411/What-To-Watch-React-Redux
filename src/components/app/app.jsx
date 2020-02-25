import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from '../main/main.jsx';
import CardScreen from '../card-screen/card-screen.jsx';


export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screenMode: -1,
    };

    this._updatesState = this._updatesState.bind(this);
  }

  _updatesState(stateValue) {
    const screenMode = +stateValue;

    this.setState({screenMode});
  }

  _renderApp() {
    const {screenMode} = this.state;
    const {cardsData} = this.props;
    const cardData = cardsData.find((card) => screenMode === card.id);
    const cardScreen = cardData && <CardScreen data={{cardData, cardsData}} onScreenChange={this._updatesState}/>;

    return cardScreen || <Main {...this.props} onScreenChange={this._updatesState} />;
  }

  render() {
    const {cardsData} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderApp()}
          </Route>
          <Route exact path='/dev-card-details-screen'>
            <CardScreen data={cardsData[1]} onScreenChange={this._updatesState}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promoCardData: PropTypes.object.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
