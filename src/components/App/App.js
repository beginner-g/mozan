import React, { Component } from 'react';
import Layout from '../Layout/Layout'
import Index from '../Index/Index'
import './app.css';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          <Index/>
        </Layout>
      </div>
    );
  }
}

export default App;
