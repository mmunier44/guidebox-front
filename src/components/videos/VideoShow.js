import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
import VideoForm from './VideoForm'

class VideoShow extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      video: {}
    }
  }

  async componentDidMount()  {
    const response = await
      axios.get(`${apiUrl}/videos/${this.props.match.params.id}`)
    this.setState({video: response.data.video})
  }

  render() {
    const { video } = this.state

    return (
      <Layout>
        <h1>Video: {video.title}</h1>

        <p>Url: {video.url}</p>
        <p>Author: {video.author}</p>
      </Layout>
    )
  }
}

export default VideoShow
