import React, { useEffect, useState } from 'react';
import Card from './Card';

const GetMessages = () => {
   const [allMessages, setAllMessages] = useState([])

   const handleMessages = (message) => {
      setAllMessages(message)
   }

   useEffect(() => {
      fetch(`https://nawal-cyf-chat-start.glitch.me/messages`)
         .then(res => res.json())
         .then(data => handleMessages(data))
   }, [allMessages])

   return (
      <div>
         <Card messages={allMessages} />
      </div>
   )
}

export default GetMessages