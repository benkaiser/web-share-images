import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import WebShareHTML from './examples/WebShareHTML';
import WebShareCanvas from './examples/WebShareCanvas';
import WebShareImage from './examples/WebShareImage';

interface IAppProps {}

function App({}: IAppProps): JSX.Element {
  return (
    <Router>
      <div className="App">
        <div className="pure-g">
          <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-5">
            <div className="pure-menu sidebar">
                <span className="pure-menu-heading">Examples</span>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                      <Link className="pure-menu-link" to="/image">Image Sharing</Link>
                    </li>
                    <li className="pure-menu-item">
                        <Link className="pure-menu-link" to="/canvas">Canvas Sharing</Link>
                    </li>
                    <li className="pure-menu-item">
                      <Link className="pure-menu-link" to="/html">HTML Sharing</Link>
                    </li>
                </ul>
            </div>
          </div>
          <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-4-5">
            <Switch>
              <Route path="/canvas">
                <WebShareCanvas />
              </Route>
              <Route path="/html">
                <WebShareHTML />
              </Route>
              <Route>
                <WebShareImage />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
