import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import BookList from './components/BookList';
import './App.css';

class App extends Component {

  state = {
    searchterm: "",
    books: null
  }

  handleChange = (event) => {
    this.setState({searchterm: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://goodreads-to-json-0-1-9zcmdm8turtc.runkit.sh/${this.state.searchterm}`)
    .then(res=>res.json())
    .then(books=>this.setState({books}))
  }

  render() {
    return(
      <div>
        <h1>BOOKCASE</h1>

        <Searchbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          searchterm={this.state.searchterm}
        />

        {this.state.books ? <BookList books={this.state.books} /> : null}

      </div>
    );
  }
}

export default App;
