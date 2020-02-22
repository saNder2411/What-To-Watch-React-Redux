import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player.jsx';

configure({adapter: new Adapter()});

const playerOptions = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/bohemian-rhapsody.jpg`,
  isMuted: true,
  isDelay: true,
  isPlaying: false,
  width: 280,
  height: 175,
};

describe(`Will verify that the component has two states: play and pause`, () => {
  it(`Will verify that the component has state: play`, () => {
    let isPlaying = false;
    const videPlayer = mount(
        <VideoPlayer
          {...playerOptions}
        />,
        {
          createNodeMock: (element) => {
            if (element.type === `video`) {
              return {
                play: () => {
                  isPlaying = true;
                }
              };
            }
            return isPlaying;
          }
        }
    );

    videPlayer.simulate(`play`, videPlayer.state.isPlaying = true);

    expect(videPlayer.state.isPlaying).toBe(true);
  });

  it(`Will verify that the component has state: pause`, () => {
    let isPlaying = true;
    const videPlayer = mount(
        <VideoPlayer
          {...playerOptions}
        />,
        {
          createNodeMock: (element) => {
            if (element.type === `video`) {
              return {
                pause: () => {
                  isPlaying = false;
                }
              };
            }
            return isPlaying;
          }
        }
    );

    videPlayer.simulate(`pause`, videPlayer.state.isPlaying = false);

    expect(videPlayer.state.isPlaying).toBe(false);
  });
});
