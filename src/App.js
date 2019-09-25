import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SigninForm from './Components/SignForm';
import LogForm from './Components/LogForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Testing</h1>
        <LogForm />

        {/* <SigninForm /> */}
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
