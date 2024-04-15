import React, { useState, useEffect } from 'react'
import '../style/Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from '../components/Post';
import Tia from '../image/Tia.jpeg';
import { useStateValue } from './StateProvider';
import db from "./firebase";

function Feed() {
    const [{ user }, dispatch] = useStateValue();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            // .orderBy("timestamp", "desc")
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ));
    }, []);

    return (
        <div className='feed'>
            {/* story row */}
            <StoryReel />
            {/* messages sender */}
            <MessageSender />

            {/* post component */}
            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    // timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                >

                </Post>
                // <Post
                //     // profilePic={post}
                //     message="wow"
                //     timestamp="2751"
                //     username={user.displayName}
                //     image={Tia}
                // />
                // <Post />

            ))}
        </div>
    )
}

export default Feed