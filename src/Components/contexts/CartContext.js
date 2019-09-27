import React, { createContext } from "react";
import { Route } from "react-router-dom";
import ShoppingCart from "../ShoppingCart";
import Entry from "../Entry";

const CartContext = createContext();

function App() {
  return (
    <div>
      <CartContext.Provider value={[ShoppingCart]} />
      <navigation>
        <Route exact path="/" component={Entry} />
        <Route exact path="/" component={ShoppingCart} />
      </navigation>
    </div>
  );
}

export default CartContext;
