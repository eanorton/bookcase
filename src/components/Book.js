import React, { Component } from 'react';

class Book extends React.Component {
  render() {
    console.log("book component", this.props.book)
    //have to get rating[0] otherwise some queries will break because rating returns an obj.
    return(
      <div className="book">
        <h2>{this.props.book.title}</h2>
        <h3>By {this.props.book.author}</h3>
        <img src={this.props.book.image}/>
        <h3>Rating: {this.props.book.rating[0]}</h3>
      </div>
    )
  }
}

export default Book;
