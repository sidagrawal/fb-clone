import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="ds_logo.jpg"
        message="WOW ths works"
        timestamp="Some timestamp"
        username="Bub"
        image="ds1.jpg"
      />
      <Post
        profilePic="ds_logo.jpg"
        message="WOW ths works"
        timestamp="Some timestamp"
        username="Bub"
      />
      <Post
        profilePic="ds_logo.jpg"
        message="WOW ths works"
        timestamp="Some timestamp"
        username="Bub"
        image="ds1.jpg"
      />
      {/** Message Sender */}

    </div>
  )
}

export default Feed
