import React,{createContext, setState} from 'react';
import {Route} from 'react-router-dom'
import ShoppingCart from '../components/ShoppingCart'
import Entrys from '../components/Entry'

 
  const EntryContext = createContext(); 
 
  function App() { 

    const [cart, setCart] = setState(ShoppingCart); 
    const entrys = setState(Entrys)
    const addItem = item => {setCart([...cart, item]);
    return ( 
      <div>
        <EntryContext.Provider value={{ entrys, addItem }}/>
        <Route exact path="/" component={Entrys} />
      </div>
    )  
    }
  }

  
 export default EntryContext