import React, { Component } from 'react';
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import './app.css';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Home/>
        </Layout>
      </div>
    );
  }
}

export default App;
