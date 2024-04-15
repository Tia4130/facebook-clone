import React, { useState } from 'react'
import '../style/MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import firebase from './firebase';
import db from './firebase';
// import firestore from 'firebase/firestore';
// import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = e => {
        e.preventDefault();

        //some clever db stuff
        db.collection('posts').add({
            message: input,
            // timestap: firebase.firestore.FieldValue.
            // serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        setInput("");
        setImageUrl("");
    }

    return (
        <div className='messageSender'>
            {/* header top  */}
            <div className='messageSender_top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`What's on your mind ${user.displayName}`} />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder='image URL (Optional)' />

                    <button onClick={handleSubmit} type="submit">
                        hidden button
                    </button>
                </form>
            </div>
            {/* header bottom */}
            <div className='messageSender_bottom'>

                <div className='messageSender_option'>
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender_option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Phot/Video</h3>
                </div>

                <div className='messageSender_option'>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>Feeling/Activity</h3>
                </div>


            </div>

        </div>
    )
}

export default MessageSender