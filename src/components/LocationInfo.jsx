import React from 'react'
import './LocationInfo.css';

const LocationInfo = ({ location }) => {
  console.log(location);
  return (
    <div>
      <div className='location__info'>
        <div className='location__info--1'>
          <h2 className='h2-autoresize'>{location?.name}</h2>
        </div>
        <div className='location__info--2'>
          <h3 className='h3-autoresize'><span>Type: </span>{location?.type}</h3>
          <h3 className='h3-autoresize'><span>Dimension: </span>{location?.dimension}</h3>
          <h3 className='h3-autoresize'><span>Population: </span>{location?.residents.length}</h3>
        </div>
      </div>
    </div>
  )
}

export default LocationInfo;