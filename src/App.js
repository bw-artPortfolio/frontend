import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SignForm from './Components/SignForm';
import LogForm from './Components/LogForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Log In To Continue</h1>
        <LogForm />
        <Route path='/signup' component={SignForm} />
      </header>
    </div>
  );
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);
