import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Homepage from './containers/Homepage/Homepage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/welcome" exact component={Homepage}/>
              <Route path="/" component={Homepage}/>
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
