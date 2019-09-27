import React, {useState, useEffect} from 'react';
import '../App.css';
import axios from 'axios';
import Cards from "./Cards";

const LandingPage = () => {
  const [People, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get('https://art-portfolio-backend.herokuapp.com/api/entries/')
      .then(response => {
        setPeople(response.data.entries);
        console.log(response.data.entries);
      }, [])

      .catch(error => {
        console.log('', error);
      });
  }, []);

  return (
    <div className='App'>
      {/*<Header />*/}

      {People.map(artists => (
        <Cards
          artistName={artists.artistName}
          title={artists.title}
          url={artists.url}
        />
      ))}
    </div>
  );
};

export default LandingPage;
