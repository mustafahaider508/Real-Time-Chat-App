import React from 'react';
import './App.css';
import Home from './Components/Home';
import {selectUser} from "./features/user/userSlice";
import { useSelector } from 'react-redux';
import Login  from './Components/Login';
import Router from "react-dom";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">
       {/* <Router>
    {!user ?(
      <Login />
   ):(
  
       <>
     <Home />
              </>

   )}
          </Router> */}

<Home />
    </div>
  );
}

export default App;
