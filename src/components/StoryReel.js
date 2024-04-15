import React from 'react'
import '../style/StoryReel.css';
import Story from './Story';
import facebookLogo from '../image/facebookLogo.png';
import cat from '../image/cat.jpg';

function StoryReel() {
    return (
        <div className='storyReel'>
            {/* story 
                story 
                story ..... 
            */}
            <Story
                image={cat}
                profileSrc={facebookLogo}
                title="Tia"
            />
            <Story
                image={cat}
                profileSrc={facebookLogo}
                title="akii"
            />
        </div>
    )
}

export default StoryReel