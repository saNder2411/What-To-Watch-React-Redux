import React from 'react';
import PropTypes, { number } from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideoPlayer from '../with-video-player/with-video-player.jsx';
import withVideoPlayerScreenState from './with-video-player-screen-state.jsx';

const MockVideoPlayerScreen = (props) => {
  const {renderPlayer, isPlaying, playerRef, handlePlayButtonClick, handleVideoTimeUpdate, handleFullScreenButtonClick} = props;
  const videoProps = {
    isPlaying,
    poster: ``,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    className: `player__video`,
    onEnded: handlePlayButtonClick,
    onTimeUpdate: handleVideoTimeUpdate,
  };

  return (
    <div className="player" >
      <div ref={playerRef}>
        {renderPlayer(videoProps)}
      </div>

      <div className="player__controls">
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handlePlayButtonClick}
          >
          </button>

          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenButtonClick}
          >
          </button>
        </div>
      </div>
    </div>
  );
};

MockVideoPlayerScreen.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isFullScreen: PropTypes.bool.isRequired,
  playerRef: PropTypes.object.isRequired,
  handlePlayButtonClick: PropTypes.func.isRequired,
  handleVideoTimeUpdate: PropTypes.func.isRequired,
  handleFullScreenButtonClick: PropTypes.func.isRequired,
};

const WrappedVideoPlayerScreen = withVideoPlayerScreenState(withVideoPlayer(MockVideoPlayerScreen));

configure({adapter: new Adapter()});

describe(`Check VideoPlayerScreen state`, () => {
  it(`Checks that pressing play button changes the state`, () => {
    const wrapper = mount(<WrappedVideoPlayerScreen />);
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    wrapper.setState({isPlaying: false});

    wrapper.find(`button.player__play`).simulate(`click`);

    expect(wrapper.state().isPlaying).toBe(true);
  });

  it(`Checks that pressing fullScreen button changes the state`, () => {
    const wrapper = mount(<WrappedVideoPlayerScreen />);
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    wrapper.setState({isFullScreen: false});

    const {_playerRef} = wrapper.instance();
    _playerRef.current.requestFullscreen = () => wrapper.setState({isFullScreen: true});

    wrapper.find(`button.player__full-screen`).simulate(`click`);

    expect(wrapper.state().isFullScreen).toBe(true);
  });

  it(`Checks that pressing play button changes progress in the state`, () => {
    const wrapper = mount(<WrappedVideoPlayerScreen />);
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    wrapper.setState({progressInSeconds: 0});

    wrapper.find(`video`).simulate(`timeupdate`);

    expect(wrapper.state().progressInSeconds).toBe(0);
  });
});

