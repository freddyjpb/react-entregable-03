import axios from 'axios';
import { useEffect, useState } from 'react';
import ErrorLocation from './components/ErrorLocation';
import LocationInfo from './components/LocationInfo';
import ResidentInfo from './components/ResidentInfo';

import './App.css';

function App() {
  const [location, setLocation] = useState();
  const [locationInput, setLocationInput] = useState();
  const [errorLocation, setErrorLocation] = useState(false);

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
      <div className='app__banner'>
        <div className='app__banner--background'>
          <div className='app__banner--search-box'>
            <form onSubmit={handleSubmit}>
              <input className='tempo' id='inputSearch' type="text" />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
      <h1>Rick and Morty</h1>
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
  )
}

export default App;