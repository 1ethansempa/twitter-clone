import React,{ useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from'./Post'
import db from './firebase'
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([]);

    //run this whenever the feed component loads and dont load after
    //returns an array of all posts
    useEffect(()=>{
        db.collection('posts').onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    },[])

    return (
        <div className="feed">
            {/*Header*/}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            

            {/*Tweet Box */}
            <TweetBox/>

            <FlipMove>
            {posts.map(post =>(
                 <Post 
                
                 key={post.timestamp}
                 displayName={post.displayName}
                 username={post.username}
                 verified={post.veriefied}
                 text={post.text}
                 avatar={post.avatar}
                 image={post.image}
                 />
            ))}
            </FlipMove>
           

           
            
            
        </div>
    )
}

export default Feed
