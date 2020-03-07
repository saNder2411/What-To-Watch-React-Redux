import React from 'react';
import renderer from 'react-test-renderer';
import VideoContainer from './video-container.jsx';

const playerOptions = {
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  previewPoster: `img/bohemian-rhapsody.jpg`,
  isPlaying: false,
  isMuted: false,
  isDelay: false,
  width: 280,
  height: 175,
};

it(`VideoPlayer is rendered correctly`, () => {

  const markup = renderer.create(
      <VideoContainer {...playerOptions} />,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(markup).toMatchSnapshot();
});
