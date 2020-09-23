import React, {  useState } from 'react'


const AddNewMessage = ({handleMessage}) => {
  const [newPost, setNewPost] = useState({text: '', from: '' })
  

  const handleSubmit = (e) => {
    //setNewPost(e.target.value)
    e.preventDefault();

    fetch('https://nawal-cyf-chat-start.glitch.me/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: newPost.from, text: newPost.text }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        handleMessage()
      })
      .catch((error) => {
        console.error('Error:', error);
        
      });  

      

}
const handleChange=(e)=>{
  const value = e.target.value
  console.log(newPost);
  setNewPost({ ...newPost, [e.target.id]: value})
}

  return (
    <div style={{ "width": "50%", "marginLeft": "35%" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="name" 
          id='from' 
          value={newPost.from} 
          onChange={handleChange} 
          className="form-control" 
          placeholder="Enter your name" 
          />
          <label htmlFor="name">Message</label>
          <input 
          type="message" 
          id='text' 
          value={newPost.text} 
          onChange={handleChange} className="form-control"
          placeholder=" Enter your message" />
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

      </form>
    </div>
  )
}
export default AddNewMessage