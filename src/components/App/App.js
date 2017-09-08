import React, { Component } from 'react';
import Layout from '../Layout/Layout'
// import Home from '../Home/Home'
// import Join_cart from '../Join_cart/Join_cart'
import Shop from '../Shop/Shop'
import './app.css';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Layout>
          {/* <Home/> */}
          {/* <Join_cart/> */}
          <Shop/>
        </Layout>
      </div>
    );
  }
}

export default App;
