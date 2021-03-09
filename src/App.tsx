import React from 'react';
import './App.css';
import WebShareCanvas from './examples/WebShareCanvas';
import WebShareImage from './examples/WebShareImage';

interface IAppProps {}

function App({}: IAppProps): JSX.Element {
  return (
    <div className="App">
      {/* <WebShareImage /> */}
      <WebShareCanvas />
    </div>
  );
}

export default App;
