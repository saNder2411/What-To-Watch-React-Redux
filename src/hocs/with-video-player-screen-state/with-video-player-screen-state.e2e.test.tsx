import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withVideoPlayer from '../with-video-player/with-video-player';
import withVideoPlayerScreenState from './with-video-player-screen-state';
import {noop} from '../../utils/utils';
import {Card, VideoProps, Handle} from '../../types';

type Props = {
  selectedCard: Card;
  renderPlayer: (videoProps: VideoProps) => React.ReactNode;
  isPlaying: boolean;
  progressInSeconds: number;
  progressInPercent: number;
  playerRef: React.RefObject<HTMLDivElement>;
  onPlayButtonClick: Handle;
  onVideoTimeUpdate: (secondsValue: number, percentValue: number) => void;
  onFullScreenButtonClick: Handle;
}

const MockVideoPlayerScreen = (props: Props) => {
  const {renderPlayer, isPlaying, playerRef, onPlayButtonClick, onVideoTimeUpdate, onFullScreenButtonClick} = props;
  const videoProps = {
    isPlaying,
    previewImage: `img/bohemian-rhapsody.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    className: `player__video`,
    onEnded: onPlayButtonClick,
    onTimeUpdate: onVideoTimeUpdate,
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
            onClick={onPlayButtonClick}
          >
          </button>

          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
          </button>
        </div>
      </div>
    </div>
  );
};

const WrappedVideoPlayerScreen = withVideoPlayerScreenState(withVideoPlayer(MockVideoPlayerScreen));

configure({adapter: new Adapter()});

describe(`Check VideoPlayerScreen state`, () => {
  it(`Checks that pressing play button changes the state`, () => {
    const wrapper = mount(<WrappedVideoPlayerScreen />);
    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = noop;

    wrapper.setState({isPlaying: false});

    wrapper.find(`button.player__play`).simulate(`click`);

    expect(wrapper.state().isPlaying).toBe(true);
  });

  it(`Checks that pressing fullScreen button changes the state`, () => {
    const wrapper = mount(<WrappedVideoPlayerScreen />);
    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = noop;

    wrapper.setState({isFullScreen: false});

    const {playerRef} = wrapper.instance();
    playerRef.current.requestFullscreen = () => wrapper.setState({isFullScreen: true});

    wrapper.find(`button.player__full-screen`).simulate(`click`);

    expect(wrapper.state().isFullScreen).toBe(true);
  });
});

