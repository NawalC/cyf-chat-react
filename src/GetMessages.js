import React, { useEffect, useState } from 'react';
import Card from './Card';

const GetMessages = ({refreshApp}) => {
   const [allMessages, setAllMessages] = useState([])

   const handleMessages = (message) => {
      setAllMessages(message)
   }

   useEffect(() => {
      fetch(`https://cors-anywhere.herokuapp.com/https://nawal-cyf-chat-start.glitch.me/messages`)
         .then(res => res.json())
         .then(data => handleMessages(data))
   }, [refreshApp])

   return (
      <div>
         <Card messages={allMessages}  handleDelete ={handleMessages}/>
      </div>
   )
}

export default GetMessages