import React from 'react'

import './ErrorLocation.css';

import errorlogo from '../assets/errlogo.png';

const ErrorLocation = () => {
  return (
    <div>
      <div className='errorlocation'>
        <img src={errorlogo} />
        <h2>
          You must have to enter a number betwen 0 and 126
        </h2>
      </div>
    </div>
  )
}

export default ErrorLocation