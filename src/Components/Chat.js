import React, { useState } from 'react';
import "./Chat.css";
import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';

function Chat() {
    const [input,setinput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();

        setinput("");
    };
    return (
        <>
        <div className="chat">
            <div className="chat__header">
           <h4>To: <span className="channel_name">Channelname</span></h4>
                   <strong>Details</strong> 
                   </div>    
        
        <div className="chat_message">
            <h2>I am message</h2>
            <h2>I am message</h2>
            <h2>I am message</h2>
        </div>
        <div className="chat__input">
            <form>
            <input value={input} onChange={(e) => setinput(e.target.value)} placeholder="iMessage" type="text" />
            <button onClick={sendMessage}>send message</button>
       </form>
       <IconButton>
       <MicNoneIcon  className="mic"/>
       </IconButton>
        </div>
        </div>
        </>
    )
}

export default Chat
