const getUserData = ({user: {userData}}) => userData;

const getAuthStatus = ({user: {authStatus}}) => authStatus;

const getAuthLoading = ({user: {authLoading}}) => authLoading;

const getAuthError = ({user: {authError}}) => authError;

export {getUserData, getAuthStatus, getAuthLoading, getAuthError};
