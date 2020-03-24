import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getAuthStatus, getUserData} from '../../reducers/user/selectors.js';


const UserBlock = ({isAuthorized, userData: {avatarSrc = ``} = {}}) => {
  const content = isAuthorized ?
    <div className="user-block__avatar">
      <img src={`https://htmlacademy-react-3.appspot.com/${avatarSrc}`} alt="User avatar" width="63" height="63" />
    </div> :
    <Link to="/login" className="user-block__link">Sign in</Link>;

  return (
    <div className="user-block">
      {content}
    </div>
  );
};

UserBlock.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthStatus(state),
  userData: getUserData(state),
});

export default connect(mapStateToProps)(UserBlock);
