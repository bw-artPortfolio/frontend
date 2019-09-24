import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SigninForm from './Components/SignForm';
import LogForm from './Components/LogForm';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Testing</h1>
        <SigninForm />
      </header>
    </div>
  );
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
