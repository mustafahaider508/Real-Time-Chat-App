import React from 'react';
import Chat from './Chat';
import "./home.css";
import Sidebar from './Sidebar';

function Home() {
    return (
        <div className="home">
          <Sidebar />
          <Chat />  
        </div>
    )
}

export default Home
