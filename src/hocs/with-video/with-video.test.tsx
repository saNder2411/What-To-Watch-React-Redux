import * as React from 'react';
import * as renderer from 'react-test-renderer';
import withVideo from './with-video';
import {noop} from '../../utils/utils';


type Props = {
  children: React.ReactNode;
}

const MockComponent = ({children}: Props) => <React.Fragment>{children}</React.Fragment>;
const MockComponentWrapped = withVideo(MockComponent);

it(`withVideo is rendered correctly for PreviewCard`, () => {
  const videoProps = {
    isPlaying: false,
    previewImage: `img/bohemian-rhapsody.jpg`,
    src: ``,
    isMuted: true,
    isDelay: true,
    width: 280,
    height: 175,
  };
  const markup = renderer.create((
    <MockComponentWrapped {...videoProps}/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(markup).toMatchSnapshot();
});

it(`withVideo is rendered correctly for VideoPlayerScreen`, () => {
  const videoProps = {
    isPlaying: true,
    previewImage: `img/bohemian-rhapsody.jpg`,
    src: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    className: `player__video`,
    onEnded: noop,
    onTimeUpdate: noop,
  };
  const markup = renderer.create(
      <MockComponentWrapped {...videoProps}>
        <video/>
      </MockComponentWrapped>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(markup).toMatchSnapshot();
});
