import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import { books } from './books';


const BookList = () => {
  const history = useHistory();
  const [author, setAuthor] = useState(undefined);
  const [title, setTitle] = useState(undefined);
  const [summary, setSummary] = useState(undefined);

  const handleGetSummary = async() => {
    fetch(`/summarygen/${title}/${author}`, { method: 'GET'})
      .then((res) => res.json())
      .then((res) => setSummary(res))
      .catch((error) => console.log(error))
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{width: '900px', display: 'flex', flexDirection: 'column'}}>
        <h1 style={{fontSize: '30px'}}>Get Summary</h1>
        <div>
          <p>Book Author</p>
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <p>Book Title</p>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button
            onClick={() => handleGetSummary()}
            style={{width: '100%', backgroundColor: 'orange', paddingTop: '10px', paddingBottom: '10px', border: 'none'}}>
            Get Summary
          </button>
        </div>
        {summary &&
          <div style={{padding: '10px', border: '1px solid gray', marginTop: '30px'}}>
            {summary.split(".").map((summarysmall, index) => (
              <p>{summarysmall}</p>
            ))}
          </div>
        }
        <h1 style={{fontSize: '30px'}}>Books</h1>
        {books.map((book, index) => (
          <div
            onClick={() => history.push(`/book?name=${book.author}${book.title}`)}
            style={{display: 'flex', alignItems: 'center', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px', border: '1px solid black', marginTop: '20px'}}>
            <p>{book.title}</p>
            <p style={{opacity: '0.5', marginLeft: '10px'}}>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList;