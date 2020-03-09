import React from 'react';
import renderer from 'react-test-renderer';
import VideoContainer from './video-container.jsx';

const videoProps = {
  src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  poster: `img/bohemian-rhapsody.jpg`,
  isPlaying: true,
  isMuted: false,
  isDelay: false,
  width: 280,
  height: 175,
};

it(`VideoPlayer is rendered correctly`, () => {

  const markup = renderer.create(
      <VideoContainer {...videoProps}>
        <video/>
      </VideoContainer>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(markup).toMatchSnapshot();
});
