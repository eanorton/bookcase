import React from 'react';

const Searchbar = (props) => {
  return(
    <form onSubmit={(event)=>props.handleSubmit(event)} className="searchbar">
      <input
        className="input-field"
        value={props.searchterm}
        onChange={props.handleChange}
        placeholder="Search by book or author"
        />
      <button className="button">Search</button>
    </form>
  );
}

export default Searchbar;
