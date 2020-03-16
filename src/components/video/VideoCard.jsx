// library imports
import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <div>
      <h1>{video.snippet.title}</h1>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
    </div>
  )
}

export default VideoCard