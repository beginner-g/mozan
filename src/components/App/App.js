import React, { Component } from 'react';
import Layout from '../Layout/Layout'
import Section from '../Section/Section'
import './app.css';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
        <Section/>
        </Layout>
      </div>
    );
  }
}

export default App;
