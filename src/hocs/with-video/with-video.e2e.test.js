import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video.jsx';

configure({adapter: new Adapter()});

const Player = (props) => {
  const {children} = props;
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const videoProps = {
  isPlaying: false,
  poster: ``,
  src: ``,
  isMuted: true,
  isDelay: true,
  width: 280,
  height: 175,
};

describe(`Check preview video player`, () => {
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

    wrapper.setState({isLoading: false});

    wrapper.instance().componentDidUpdate();

    wrapper.setState({isPlaying: true});


    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });
});

