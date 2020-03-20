const getAuthStatus = ({user: {authStatus}}) => authStatus;

const getUserData = ({user: {userData}}) => userData;

export {getAuthStatus, getUserData};
