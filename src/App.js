import React,{useState} from 'react';
import './App.css';
import GetMessages from './GetMessages';
import AddNewMessage from './AddNewMessage';




function App() {
const [addNewMessage, setNewMessage] = useState(0);

const handleAddMessage = ()=>{
  setNewMessage(addNewMessage + 1)
  console.log(addNewMessage);
}
  return (
    <div className="app">
      <GetMessages refreshApp = {addNewMessage}/>
      <AddNewMessage handleMessage = {handleAddMessage}/>
    </div>
  );
}

export default App;
