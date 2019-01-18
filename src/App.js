import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Homepage from './components/Homepage/Homepage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Homepage />
        </Layout>
      </div>
    );
  }
}

export default App;
