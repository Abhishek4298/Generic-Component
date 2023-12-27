import React from 'react';

const Spinner = ({ size, color, textColor }) => {
  return (
  <div>
  <div className={`${color} border-t-4 border-solid rounded-full animate-spin`} style={{ width: size, height: size }}></div>
  <div className={`${textColor} flex items-center mt-10`}><p >Spinner works</p></div> 
  </div>
    
   
  );
};

export default Spinner;
