import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
import VideoForm from './VideoForm'

class VideoNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: {
        url: '',
        title: '',
        author: '',
        views: '',
        uploadAt: '',
        converted: ''
      }
    }
  }

  handleChange = (event) => {
    const newVideo = {...this.state.movie,
      [event.target.name]: event.target.value}
    this.setState({video: newVideo})
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const videoParams = JSON.stringify({video: this.state.video})
    const response = await
      axios.post(`${apiUrl}/videos`,
        videoParams)

    this.props.history.push(`/videos/${response.data.video.id}/show`)
  }
  render() {
    const { video } = this.state

    return(
      <Layout>
        <VideoForm
          action="create"
          video={video}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Layout>
    )
  }
}

export default withRouter(VideoNew)
