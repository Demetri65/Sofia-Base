import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { ReactReader } from 'react-reader';
import { books } from './books';

const Book = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  const [location, setLocation] = useState(undefined);
  const [selection, setSelection] = useState(undefined);
  const onLocationChange = (epubcifi) => {
    setLocation(epubcifi)
  }

  const handleSubmitSimmilar = () => {
    fetch(`/textlink/${selection}`, { method: 'GET'})
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div style={{position: 'absolute', zIndex: '10000', width: '100%', display: 'flex', backgroundColor: 'gray'}}>
        <input
          value={selection}
          onChange={(event) => setSelection(event.target.value)}
          />
        <button onClick={handleSubmitSimmilar} >Check Selected Text</button>
      </div>
      <div style={{height: "100vh"}}>
        <ReactReader
          location={location}
          locationChanged={onLocationChange}
          url={books.filter(x => `${x.author}${x.title}` === name)[0].book}
        />
      </div>
    </div>
  )
}

export default Book;