import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getAuthorizationStatus, getUserInfo} from '../../reducers/user/selectors.js';

import {AuthorizationStatus} from '../../const.js';

const UserBlock = ({authorizationStatus, userInfo: {avatarSrc = ``} = {}}) => {

  const content = authorizationStatus === AuthorizationStatus.NO_AUTH ?
    <Link to="/login" className="user-block__link">Sign in</Link> :
    <div className="user-block__avatar">
      <img src={avatarSrc} alt="User avatar" width="63" height="63" />
    </div>;

  return (
    <div className="user-block">
      {content}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

export default connect(mapStateToProps)(UserBlock);
