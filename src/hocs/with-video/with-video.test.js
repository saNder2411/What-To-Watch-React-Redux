import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withVideo from './with-video.jsx';


const MockComponent = (props) => {
  const {children} = props;

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withVideo(MockComponent);

const videoProps = {
  isPlaying: false,
  poster: ``,
  src: ``,
  isMuted: true,
  isDelay: true,
  width: 280,
  height: 175,
};

it(`withVideo is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped {...videoProps}/>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
