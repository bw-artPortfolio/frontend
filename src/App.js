import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
// import Nav from "./components/Nav";
// import WelcomePage from './components/WelcomePage';
// import EntriesList from './components/EntriesList';
// import LocationsList from './components/LocationsList';
import EntryCard from './components/EntryCard';
import GalleryPage from './components/GalleryPage';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      {/*<Nav /> */}
      {/* <EntryCard /> */}
      <h1>Latest Entries</h1>

      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/gallery' component={GalleryPage} />
        {/* <Route path='/location' component={LocationsList} /> */}
      </div>
      <Footer />
    </div>
  );
};
export default App;
