import React from 'react';
import PropTypes from 'prop-types';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video.jsx';

configure({adapter: new Adapter()});

const Player = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  );
};

Player.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const videoProps = {
  isPlaying: true,
  poster: ``,
  src: ``,
  isMuted: true,
  isDelay: true,
  width: 280,
  height: 175,
};

it(`Checks that HOC's callback turn on video (play)`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(<PlayerWrapped
    {...videoProps}
  />);

  wrapper.instance().componentDidMount();

  wrapper.find(`video`).simulate(`play`);

  expect(wrapper.state().isPlaying).toEqual(true);
});

it(`Checks that HOC's callback turn off video (pause)`, () => {
  const PlayerWrapped = withVideo(Player);
  const wrapper = mount(<PlayerWrapped
    {...videoProps}
    isPlaying={false}
  />);

  wrapper.instance().componentDidMount();

  wrapper.find(`video`).simulate(`pause`);


  expect(wrapper.state().isPlaying).toEqual(false);
});
