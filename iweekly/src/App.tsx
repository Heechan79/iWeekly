import React, { Component } from 'react';
import Layout from './layout/Layout';
import Navbar from './layout/Navbar';
import Board from './pages/Board';

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Board />
      </Layout>
    );
  }
}

export default App;
