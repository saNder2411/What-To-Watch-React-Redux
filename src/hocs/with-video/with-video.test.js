import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withVideo from './with-video';


const MockComponent = ({children}) => <Fragment>{children}</Fragment>;


MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

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
    onEnded: () => {},
    onTimeUpdate: () => {},
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
