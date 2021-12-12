import React, {useState} from 'react';

const Discussion = () => {
  const [discussionPosts, setDiscussionPosts] = useState();

  const [discAuthor, setDiscAuthor] = useState();
  const [discTitle, setDiscTitle] = useState();


  const handleDiscussionGenSubmit = async () => {
    fetch(`/discussq/${discTitle}/${discAuthor}`, { method: 'GET'})
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setDiscussionPosts(res)
      })
      .catch(error => console.log(error))
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:  'center'}}>
      <div style={{width: '900px'}}>
        <h1 style={{fontSize: '30px'}}>Discussion Question Generator</h1>
        <div>
          <p>Author</p>
          <input
            value={discAuthor}
            onChange={(event) => setDiscAuthor(event.target.value)}
          />

          <p>Book Title</p>
          <input
            value={discTitle}
            onChange={(event) => setDiscTitle(event.target.value)}
          />
          <button
            onClick={handleDiscussionGenSubmit}
            style={{backgroundColor: 'orange', paddingTop: '10px', paddingBottom: '10px', borderRadius: '5px', width: '100%', border: 'none'}}>
            Generate Discussion Question
          </button>
        </div>
        <div>
          {discussionPosts &&
          <div style={{border: '1px solid gray', padding: '20px', marginTop: '20px'}}>
            {discussionPosts && discussionPosts.split("?").map((discussion, index) => (
              <p>{discussion}</p>
            ))}
          </div>
          }
        </div>
      </div>

    </div>

  )
}

export default Discussion;