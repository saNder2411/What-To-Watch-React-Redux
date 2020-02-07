import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoCardData} = props;

  return <Main promoCardData={promoCardData} />;
};

export default App;
