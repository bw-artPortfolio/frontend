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
    setPeople(response.data.results)
    console.log(response.data.results)
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
    {/* {People.map((people) =>
            <Cards
              name={people.name}
              birth_year={people.birth_year}
              gender={people.gender}
              />
            )} */}
            Hey!
    </div>
    </div>
  );
}

export default App;
