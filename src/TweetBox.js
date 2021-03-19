import React, {useState} from 'react'
import {Avatar, Button} from "@material-ui/core"
import './TweetBox.css'
import db from './firebase';
import firebase from 'firebase'
import TextareaAutosize from 'react-textarea-autosize';
import PublicIcon from '@material-ui/icons/Public';

function TweetBox() {
    const [tweetMessage, setTweetMessage] =useState('');
    const [tweetImage, setTweetImage] =useState('');

    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName:'Ethan Sempa',
            username:'ethan_sempa',
            verified:true,
            text:tweetMessage,
            avatar:'no-img.png',
            image:tweetImage,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    return (
        <div className="tweetBox">
            <form>
            <div className="tweetBox__input">
                <div className="tweetBox__inputFirst">
                    <Avatar src="no-img.png"/>
               
                    <TextareaAutosize  onChange={e=>setTweetMessage(e.target.value)}
                    placeholder="What's happening?" />
                </div>
                   

                    <div className="tweetBox__replyOptions">
                        <Button className="tweetBox__replyOptionsButton">
                            <PublicIcon className="tweetBox__replyOptionsButtonPublicIcon"/>
                            <p>Everyone can reply</p>
                        </Button>   
                    </div>
             
            </div>
            <input 
            value={tweetImage}
            onChange={e=>setTweetImage(e.target.value)}
            type="text" className="tweetBox__imageInput" 
            placeholder="Optional :Enter Image URL"/>
            <div className="tweetBox__tweetFormIconsHolder">
            <div className="tweetBox__tweetFormIcons">
                
            </div>
            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </div>
         
            </form> 
        </div>
    )
}

export default TweetBox

