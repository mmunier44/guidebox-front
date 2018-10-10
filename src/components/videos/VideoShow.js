import React from 'react'
import { Link, withRouter } from 'react-router-dom'
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
    const { history, user } = this.props
    const response = await
      axios({
        url: `${apiUrl}/videos/${this.props.match.params.id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        },
        data: this.props.match.params.id
      })
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

export default withRouter(VideoShow)
