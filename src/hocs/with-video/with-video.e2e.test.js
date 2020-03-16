import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video.jsx';

configure({adapter: new Adapter()});

const Player = ({children}) => <Fragment>{children}</Fragment>;

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

describe(`Check preview video player`, () => {
  const videoProps = {
    isPlaying: false,
    posterImage: ``,
    src: ``,
    isMuted: true,
    isDelay: true,
    width: 280,
    height: 175,
  };
  it(`Checks that video turn on (play) when the browser can play multimedia`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    wrapper.find(`video`).simulate(`canplaythrough`);

    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that the video plays from the beginning, when it plays to the end`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    wrapper.find(`video`).simulate(`ended`);

    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });
});

describe(`Check video player screen`, () => {
  const videoProps = {
    isPlaying: false,
    posterImage: ``,
    src: ``,
    className: `player__video`,
    onEnded: () => {},
    onTimeUpdate: () => {},
  };
  it(`Checks that video turn on (play) when isPlaying prop becomes true`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that video turn on (pause) when isPlaying prop becomes false`, () => {
    const PlayerWrapped = withVideo(Player);
    const wrapper = mount(<PlayerWrapped {...videoProps} />);

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `pause`);

    wrapper.instance().componentDidMount();

    wrapper.setProps({isPlaying: true});

    wrapper.setProps({isPlaying: false});

    expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
  });
});
