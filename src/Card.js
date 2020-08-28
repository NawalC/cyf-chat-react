import React from 'react'
import DeleteMessage from './DeleteMessage'
const Card =({ messages, handleDelete })=>{

  const handleDeleteMessage = (id) => {
    const undeletedMsg = messages.filter(message => message.id !== id)
    handleDelete(undeletedMsg)
  }
    return(
<div>
  
    
   {messages.map((message, index) =>{
   return (
   <div className="card" key = {index} >
  <div className="card-body"> 
   
    <h6 className="card-subtitle mb-2 ">{message.from}</h6>
    <p className="card-text">{message.text}</p> 

    <button type="button" className="btn btn-primary">Edit</button>
    <DeleteMessage message={message} handleDeleteMessage={handleDeleteMessage} />
    
  </div>

</div> )
})}
   </div> )


}

export default Card
