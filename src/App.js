import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from "./Header";
import Cards from "./Cards";

const App = () => {
  const [People, setPeople] = useState([]);
  
  useEffect(() => {
    axios
    .get("https://art-portfolio-backend.herokuapp.com/api/entries/")
    .then(response  => {
    setPeople(response.data.entries)
    console.log(response.data.entries)
    }, [])
  
    
    .catch(error => {
        console.log("Oops - Star Wars Broke!", error);
    })
  }, []);

  

  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <div>
    {People.map((artists) =>
            <Cards
              artistName={artists.artistName}
              title={artists.title}
              url={artists.url}
              />
            )
    }
    </div>
    </div>
  );
}

export default App;
