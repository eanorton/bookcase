import React, { Component } from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    console.log("book list component", this.props.books)
    let results = this.props.books.map(book=><Book key={book.id} book={book}/>)
    return(
      <div className="booklist">
        {results}
      </div>
    );
  }
}

export default BookList;
