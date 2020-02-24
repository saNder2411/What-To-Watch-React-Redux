import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player.jsx';

const playerOptions = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  poster: `img/bohemian-rhapsody.jpg`,
  isPlaying: false,
  isMuted: false,
  isDelay: false,
  width: 280,
  height: 175,
};

it(`VideoPlayer is rendered correctly`, () => {

  const markup = renderer.create(
      <VideoPlayer {...playerOptions} />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(markup).toMatchSnapshot();
});
