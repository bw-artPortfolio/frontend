import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header';
// import Nav from "./components/Nav";
// import WelcomePage from './components/WelcomePage';
// import EntriesList from './components/EntriesList';
// import LocationsList from './components/LocationsList';
// import EntryCard from './components/EntryCard';
import GalleryPage from './Components/GalleryPage';
import LandingPage from './Components/LandingPage';

const App = () => {
  return (
    <div>
      <Header />
      {/*<Nav /> */}
      {/* <EntryCard /> */}
      <h1>In the app return</h1>

      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/gallery' component={GalleryPage} />
        {/* <Route path='/location' component={LocationsList} /> */}
      </div>
    </div>
  );
};
export default App;
