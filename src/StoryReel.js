import React from 'react'
import './StoryReel.css'
import Story from "./Story"

function StoryReel() {
  return (
    <div className="storyReel">
      {/** Story */}
      <Story image="/ds1.jpg" profileSrc="/ds_logo.jpg" title="Sid"/>
      <Story image="/ds2.jpg" profileSrc="/ds_logo.jpg" title="Sid"/>
      <Story image="/ds3.jpg" profileSrc="/ds_logo.jpg" title="Sid"/>
      <Story image="/ds4.jpg" profileSrc="/ds_logo.jpg" title="Sid"/>
    </div>
  )
}

export default StoryReel
