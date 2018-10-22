import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Video2 = (props) => {
  const { url, title, author, views, uploadAt } = props
  return (
    <div className="col-md-3">
      <div className="embed-responsive embed-responsive-16by9">
        <video controls>
          <source src={'https://cdn.filestackcontent.com/Bu9TkaFTvSddg6c1PaWf'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="video-info">
        <h4><a href="#">{'Synthesizer'}</a></h4>
      </div>
    </div>
  )
}

export default Video2
