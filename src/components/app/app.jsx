import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from '../main/main.jsx';
import CardScreen from '../card-screen/card-screen.jsx';
import VideoPlayerScreen from '../video-player-screen/video-player-screen.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';
import withVideoPlayerScreenState from '../../hocs/with-video-player-screen-state/with-video-player-screen-state.jsx';

const WrappedVideoPlayerScreen = withVideoPlayerScreenState(withVideoPlayer(VideoPlayerScreen));

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
            return <CardScreen selectedCardId={id}/>;
          }}
        />
        <Route
          path='/player:id'
          render={({match}) => {
            const {id} = match.params;
            return <WrappedVideoPlayerScreen selectedCardId={+id}/>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
