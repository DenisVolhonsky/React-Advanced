import React, { Component } from 'react';
// import axios from 'axios';

import Header from './components/Header/Header';
import Auth from './components/Auth/Auth';
import History from './components/History/History';
import Menu from './components/Menu/Menu'

import './App.css';

class App extends Component {
  // state = {
  //   articles: [],
  //   isLoading: false,
  //   error: null,
  // };

  // componentDidMount() {
  //   axios.get()
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Auth />
        <History />
        <Menu />
      </div>
    );
  }
}

export default App;
