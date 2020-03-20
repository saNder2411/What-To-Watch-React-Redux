const getAuthorizationStatus = ({user: {authorizationStatus}}) => authorizationStatus;

const getUserInfo = ({user: {userInfo}}) => userInfo;

export {getAuthorizationStatus, getUserInfo};
