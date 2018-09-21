import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import './App.css';

class App extends Component {

  state = {
    searchterm: "",
    books: null
  }

  render() {
    return(
      <div>
        <searchbar />
      </div>
    );
  }
}

export default App;
