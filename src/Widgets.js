import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './Widgets.css'
import {TwitterTweetEmbed, TwitterTimelineEmbed, TwitterShareButton} from 'react-twitter-embed';

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div> 
            <div className="widgets__widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={'1372472857654132737'}/>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ntvuganda"
                options={{height:400}}
                />
                <TwitterShareButton
                url={"https://github.com/1ethansempa"}
                options={{text:"Check out this profile", via:"1ethansempa"}}/>
            </div>
        </div>
    )
}

export default Widgets
