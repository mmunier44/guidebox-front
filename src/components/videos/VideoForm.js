import React from 'react'
import { FormErrors } from './FormErrors'

const VideoForm = (props) => {
  const { action, video, handleChange, handleSubmit } = props
  const formattedAction =
  action.charAt(0).toUpperCase() + action.slice(1)
  // adjusted values to be this.state.value
  return (
    <React.Fragment>
      <h1>{formattedAction} Video</h1>
      <form id='create-video'>
        <p><input
          required
          type ="text" name="url"
          value={video.url}
          onChange={handleChange}
          placeholder="url" /></p>
        <p><input
          required
          type="text" name="title"
          value={video.title} onChange={handleChange} placeholder="title" /></p>
        <p><input
          required
          type="text" name="author"
          value={video.author} onChange={handleChange} placeholder="author" /></p>
        <p><input type="submit" value="Submit"
          onClick={handleSubmit} /></p>
      </form>
    </React.Fragment>
  )
}

export default VideoForm

// <p><input type="disabled" name="uuid"
//   value={video.uuid} onChange={handleChange}
//   placeholder ="uuid" /></p>
// <p><input type="boolean" name="converted"
//   value={video.converted} onChange={handleChange}
//   placeholder="converted" /></p>
// <p><input type="number" name="views"
//   value={video.views} onChange={handleChange}
//   placeholder="views" /></p>
// <p><input type="text" name="uploadAt"
//   value={video.uploadAt} onChange={handleChange}
//   placeholder="uploadAt" /></p>
