import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Books from './Books'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://nikldev0.github.io/data/book_list_project.json'
function App() {
  const [loading, setLoading] = useState(true);
  const [ books, setBooks ] = useState([]);

  const removeBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks)
  }

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const books = await response.json();
      setLoading(false);
      setBooks(books);
    }
    catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [])

  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if(books.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No books left</h2>
          <button className="btn" onClick={fetchBooks}>refresh</button>
        </div>
      </main>
    )
  }

  return (
  <main>
    <Books books={books} removeBook={removeBook}/> 
  </main>
  )
  // {books} is an array to pass in
}

export default App
