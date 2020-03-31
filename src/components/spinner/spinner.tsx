import * as React from 'react';
import './spinner.css';


const Spinner: React.FC = () => {

  return (
    <div className="spinner">
      <div className="spinner__wrap">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
