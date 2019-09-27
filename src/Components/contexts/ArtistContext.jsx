import React,{createContext, setState} from 'react';
import {Route} from 'react-router-dom'
import EntryCard from '../components/Entry'

 
  const EntryContext = createContext(); 
 
  function App() { 

    // const [cart, setCart] = setState(ShoppingCart); 

    const viewEntry = entry => <EntryCard id={entry.id} entry={entry}/>
  
    return ( 
      <div>
        <EntryContext.Provider value={{ entry, addItem }}/>
        <Route exact path="/" component={App} />
      </div>
    )  

    }
     
  