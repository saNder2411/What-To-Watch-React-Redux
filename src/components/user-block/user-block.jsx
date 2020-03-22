import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getAuthStatus, getUserData} from '../../reducers/user/selectors.js';

import {AuthStatus} from '../../const.js';


const UserBlock = ({authStatus, userData: {avatarSrc = ``} = {}}) => {
  const content = authStatus === AuthStatus.NO_AUTH ?
    <Link to="/login" className="user-block__link">Sign in</Link> :
    <div className="user-block__avatar">
      <img src={`https://htmlacademy-react-3.appspot.com/${avatarSrc}`} alt="User avatar" width="63" height="63" />
    </div>;

  return (
    <div className="user-block">
      {content}
    </div>
  );
};

UserBlock.propTypes = {
  authStatus: PropTypes.string.isRequired,
  userData: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  userData: getUserData(state),
});

export default connect(mapStateToProps)(UserBlock);
