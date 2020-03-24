import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from '../main/main.jsx';
import CardScreen from '../card-screen/card-screen.jsx';
import VideoPlayerScreen from '../video-player-screen/video-player-screen.jsx';
import SignInScreen from '../sign-in-screen/sign-in-screen.jsx';
import AddReviewScreen from '../add-review-screen/add-review-screen.jsx';

import withFetchData from '../../hocs/with-fetch-data/with-fetch-data.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';
import withVideoPlayerScreenState from '../../hocs/with-video-player-screen-state/with-video-player-screen-state.jsx';

import {DataTypes} from '../../const.js';


const WrappedVideoPlayerScreen = withVideoPlayerScreenState(withVideoPlayer(VideoPlayerScreen));

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route
          path='/cards/:id'
          exact
          render={({match}) => {
            const {id} = match.params;
            return <CardScreen selectedCardId={id}/>;
          }}
        />
        <Route
          path='/player/:id'
          render={({match}) => {
            const {id} = match.params;
            return <WrappedVideoPlayerScreen selectedCardId={id}/>;
          }}
        />
        <Route path='/login'>
          <SignInScreen />
        </Route>
        <Route
          path='/cards/:id/review'
          render={({match}) => {
            const {id} = match.params;
            return <AddReviewScreen selectedCardId={id}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default withFetchData(DataTypes.FETCH_CARDS_DATA)(App);
