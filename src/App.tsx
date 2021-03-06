import React from 'react';
import './App.css';
import WebShareImage from './examples/WebShareImage';

interface IAppProps {}

function App({}: IAppProps): JSX.Element {
  return (
    <div className="App">
      <WebShareImage />
    </div>
  );
}

export default App;
