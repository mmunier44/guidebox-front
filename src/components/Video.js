import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Video = (props) => {
  const { url, title, author, views, uploadAt } = props
  return (
    <div className="col-md-3">
      <div className="embed-responsive embed-responsive-16by9">
        <video controls>
          <source src={'https://cdn.filestackcontent.com/dWbyg4oUQBVH8Rznqkfl'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h4><a href="#">{'Work Video'}</a></h4>
      </div>
    </div>
  )
}

export default Video
