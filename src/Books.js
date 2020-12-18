import React from 'react';
import Book from './Book';
const Books = ({books, removeBook}) => { // uses array destructuring
  return (
    <section>
      <div className="title">
        <h2 style={{marginBottom:"2rem"}}>my favourite 2020 books</h2>
        <div className="underline"></div>
      </div>
      <div>
        {books.map((book) => {
          return <Book key={book.id} {...book} removeBook={removeBook}></Book>
        })}
      </div>
    </section>
  )
};

export default Books;
