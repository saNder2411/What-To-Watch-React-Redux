import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getUserAuthStatus, getUserData} from '../../reducers/user/selectors';
import {getAppRoute} from '../../utils/utils';

const UserBlock = ({isAuthorized, userData: {avatarSrc = ``} = {}}) => {
  const content = isAuthorized ?
    <Link to={getAppRoute().USER_LIST}>
      <div className="user-block__avatar">
        <img src={`https://htmlacademy-react-3.appspot.com/${avatarSrc}`} alt="User avatar" width="63" height="63" />
      </div>
    </Link> :
    <Link to={getAppRoute().LOGIN} className="user-block__link">Sign in</Link>;

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
  isAuthorized: getUserAuthStatus(state),
  userData: getUserData(state),
});

export default connect(mapStateToProps)(UserBlock);
