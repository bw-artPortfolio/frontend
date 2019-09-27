import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Entrys from "./Components/Entrys";
import LandingPage from "./Components/LandingPage";
import SignForm from "./Components/SignForm";
import Artists from "./Components/Artists";
import ShoppingCart from "./Components/ShoppingCart";
import GalleryPage from "./Components/GalleryPage";
import Cards from "./Components/Cards";

const App = props => {
  console.log("App.js -> %cprops:", "color: cadetBlue", props);

  console.log("App.js -> %cEntrys.data:", "color: chocolate", Entrys.data);
  return (
    <div>
      <Header />

      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={SignForm} />
        <Route path="/artists" component={Artists} />
        <Route path="/cart" component={ShoppingCart} />

        {/* The spread props(history, match, etc, are passing below. Data, not so much.) */}

        <Route
          path="/gallery"
          component={GalleryPage}
          render={props => <GalleryPage {...props} props={props} />}
        />
        <Route
          path="/cards"
          component={Cards}
          render={props => <Cards {...props} data={Entrys.data} />}
        />
      </div>
    </div>
  );
};
export default App;
