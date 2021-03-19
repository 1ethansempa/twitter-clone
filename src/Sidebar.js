import React from 'react'
import './Sidebar.css'
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SidebarOption from './SidebarOption'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';


function Sidebar() {
    return (
        <div className="sidebar">
            {/*Twitter Icon */}
            <TwitterIcon className="sidebar__twitterIcon"/>

            {/*Sidebar Option Component */}
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={ListAltIcon} text="Lists"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            {/*Sidebar Option Component */}
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            {/*Sidebar button ->Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

            
        </div>
    )
}

export default Sidebar
