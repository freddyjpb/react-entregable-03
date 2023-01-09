import React from 'react'
import './LocationInfo.css';

const LocationInfo = ({ location }) => {
  console.log(location);
  return (
    <div>
    <div className='location__info'>
        <h2>{location?.name}</h2>
        <h2><span>Type:</span>{location?.type}</h2>
        <h2><span>Dimension:</span>{location?.dimension}</h2>
        <h2><span>Population:</span>{location?.residents.length}</h2>
    </div>
    </div>
  )
}

export default LocationInfo;