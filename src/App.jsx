import axios from 'axios';
import { useEffect, useState } from 'react';

import loaderLogo from './assets/cdlogo.png';

import ErrorLocation from './components/ErrorLocation';
import LocationInfo from './components/LocationInfo';
import ResidentInfo from './components/ResidentInfo';

import './App.css';

function App() {
  const [showElement, setShowElement] = useState(true);
  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState();
  const [errorLocation, setErrorLocation] = useState(false);

  useEffect(() => {
    setTimeout(function () { setShowElement(false); }, 10000);
  }, []);
  
  useEffect(() => {
    let locationURL;

    if (locationInput) {
      locationURL = `https://rickandmortyapi.com/api/location/${locationInput}`;
    } else {
      const randomLocation = Math.floor(Math.random() * 126) + 1;
      locationURL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    }

    axios.get(locationURL)
      .then(res => {
        setErrorLocation(false);
        setLocation(res.data);
      })
      .catch(err => {
        setErrorLocation(true);
        console.log(err);
      });
  }, [locationInput]);

  const handleSubmit = e => {
    e.preventDefault();
    //console.log( e.target.inputSearch.value );
    setLocationInput(e.target.inputSearch.value);
  };

  return (
    <div className="App">
      <div className="App__loader--container">
        {showElement ? (
          <div className="App__loader--image" style={{ opacity: showElement ? 1 : 0 }} >
            <img src={loaderLogo} />
          </div>)
          :
          (<div></div>)}{" "}
      </div>
      <div className='app__banner'>
        <div className='app__banner--background'>
          <div className='app__banner--search-box'>
            <form onSubmit={handleSubmit}>
              <input className='tempo' id='inputSearch' type="text" />
              <button>Search</button>
            </form>
          </div>
        </div>
        <div className='app__banner--location'>
          {errorLocation ? (
            <ErrorLocation />
          ) : (
            <div>
              <LocationInfo location={location} />
              <div className='app__residentcard--container'>
                {
                  location?.residents.map(url => (
                    <ResidentInfo key={url} url={url} />
                  ))
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App;