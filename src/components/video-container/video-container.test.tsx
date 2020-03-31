import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoContainer from './video-container';
import {noop} from '../../utils/utils';


it(`VideoPlayer is rendered correctly in PreviewCard`, () => {
  const videoProps = {
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    posterImage: `img/bohemian-rhapsody.jpg`,
    isPlaying: true,
    isMuted: false,
    isDelay: false,
    width: 280,
    height: 175,
  };
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


it(`VideoPlayer is rendered correctly in VideoPlayerScreen`, () => {
  const videoProps = {
    isPlaying: true,
    posterImage: `img/bohemian-rhapsody.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    className: `player__video`,
    onEnded: noop,
    onTimeUpdate: noop,
  };
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
