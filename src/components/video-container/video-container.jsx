import React, {Fragment} from 'react';
import PropTypes from 'prop-types';


const VideoContainer = ({children}) => {

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

VideoContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default VideoContainer;
