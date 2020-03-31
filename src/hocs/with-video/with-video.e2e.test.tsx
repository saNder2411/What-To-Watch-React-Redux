import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video';
import {noop} from '../../utils/utils';

configure({adapter: new Adapter()});

type Props = {
  children: React.ReactNode;
}

const Player = ({children}: Props) => <React.Fragment>{children}</React.Fragment>;

describe(`Check preview video player`, () => {
  const videoProps = {
    isPlaying: false,
    previewImage: `img/bohemian-rhapsody.jpg`,
    src: ``,
    isMuted: true,
    isDelay: true,
    width: 280,
    height: 175,
  };
  it(`Checks that video turn on (play) when the browser can play multimedia`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = noop;

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    wrapper.find(`video`).simulate(`canplaythrough`);

    expect(videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that the video plays from the beginning, when it plays to the end`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = noop;

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    wrapper.find(`video`).simulate(`ended`);

    expect(videoRef.current.play).toHaveBeenCalledTimes(1);
  });
});

describe(`Check video player screen`, () => {
  const videoProps = {
    isPlaying: false,
    previewImage: `img/bohemian-rhapsody.jpg`,
    src: ``,
    className: `player__video`,
    onEnded: noop,
    onTimeUpdate: noop,
  };
  it(`Checks that video turn on (play) when isPlaying prop becomes true`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = noop;

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    expect(videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that video turn on (pause) when isPlaying prop becomes false`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = noop;

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `pause`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    wrapper.setProps({isPlaying: false});

    expect(videoRef.current.pause).toHaveBeenCalledTimes(1);
  });
});
