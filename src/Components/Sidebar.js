import { Avatar, IconButton } from '@material-ui/core';
import RateReviewIcon from '@material-ui/icons/RateReview';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
       <>
          <div className="sidebar">
              <div className="sidebar__header">
                  <Avatar className="sidebar__avatar"  />
                  <div className="sidebar__input">
                      <SearchIcon />
                      <input className="Search_Icon" placeholder="search" />
                  </div>
                  <IconButton className="sidebar__inputButton">
                  <RateReviewIcon />
                  </IconButton>    
              </div>

              <div className="sidebar__chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
           
          </div>
       
              </div>
              
          
        </>
     
    )
}

export default Sidebar
