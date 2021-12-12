import React, {useEffect, useState} from 'react';

const Posts = () => {

  const [posts, setPosts] = useState(undefined);
  const [reload, setReload] = useState(0);


  const [discAuthor, setDiscAuthor] = useState(undefined);
  const [discTitle, setDiscTitle] = useState(undefined);

  const [discussionPosts, setDiscussionPosts] = useState(undefined);


  useEffect(() => {
    fetch('/api/posts/posts', {method: 'GET'})
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch(error => console.log(error))
  }, [reload])

  const Post = ({id, email, title, comments, onComment}) => {

    const [commentBody, setCommentBody] = useState(undefined);
    const [commentEmail, setCommentEmail] = useState(undefined);

    return (
      <div style={{
        marginTop: '20px',
        padding: '10px',
        border: '1px solid gray',
      }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
          <p style={{fontSize: '24px', fontWeight: 'bold'}}>{title}</p>
          <p style={{ marginLeft: '10px', opacity: '.7',padding: '4px', borderRadius: '3px', width: 'auto'}}>Posted By: {email}</p>
        </div>
        <div style={{width: '100%', borderTop: '1px solid gray', marginTop: '20px', marginBottom: '20px'}} />
        <p style={{fontSize: '20px'}}>Comments: </p>
        <div>
          {comments.map((comment, index) => (
            <div style={{marginTop: '10px', padding: '10px', border: '1px solid grey', borderRadius: '5px'}}>
              <p style={{fontSize: '14px', opacity: '.7'}}>Comment By: {comment.email}</p>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
        <div style={{width: '100%', borderTop: '1px solid gray', marginTop: '20px', marginBottom: '20px'}} />
        <p>Post A Comment: </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          >
          <p>Your Email:</p>
          <input
            value={commentEmail}
            onChange={(event) => setCommentEmail(event.target.value)}
            style={{
              border: '1px solid orange',
              borderRadius: '5px',
            }}
            />
          <p>Your Comment:</p>
          <input
            value={commentBody}
            onChange={(event) => setCommentBody(event.target.value)}
            style={{
              border: '1px solid orange',
              borderRadius: '5px',
            }}
          />
          <button style={{ marginTop: '10px', backgroundColor: 'orange', paddingTop: '15px', paddingBottom: '15px', border: 'none', borderRadius: '4px'}} onClick={() => onComment(id, commentBody, commentEmail)}>
            Post Comment
          </button>
        </div>

      </div>
    )
  }

  const handleSubmitComment = async (id, body, email) => {
    fetch('/api/posts/comment', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        comment: body,
        email: email,
      })
    })
      .then((res) => {
        setReload(reload + 1)
        console.log('hello')
      })
      .catch((error) => console.log(error))
  }



  return (
    <div style = {{
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div id="postList" style={{
        width: '900px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',

      }}>

        <h1 style={{fontSize: '30px'}}>All Posts</h1>
        {posts && posts.map((post, index) => (
          <Post id = {post._id} email={post.email} title={post.title} comments={post.comments} onComment={handleSubmitComment}/>
        ))}


      </div>
    </div>
  )
}

export default Posts;