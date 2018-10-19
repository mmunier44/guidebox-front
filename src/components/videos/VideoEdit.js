import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
import VideoForm from './VideoForm'
import messages from '../../auth/messages'

// dragons note for this.props.location.state.linkState

class VideoEdit extends React.Component {
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
  // notes get rid of response below
  async componentDidMount() {
    const { history, user } = this.props
    console.log('edit get', this.props)
    console.log('edit long props', this.props.match.params.id)
    console.log('response is', response)
    const videoId = this.props.match.params.id
    const response = await
      axios({
        url: `${apiUrl}/videos/${videoId}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        },
        data: this.props.match.params.id
      })
    this.setState({video: response.data.video})
  }

  handleChange = (event) => {
    const editedVideo = {...this.state.video, [event.target.name]: event.target.value}

    this.setState({video: editedVideo})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { history, user, flash } = this.props
    const videoId = this.props.match.params.id
    // console.log('long this is', this.props.match.params.id)
    // console.log('videoid is', videoId)
    const videoParams = JSON.stringify({video: this.state.video})
    // console.log('videoparams is', videoParams)
    // console.log('long ass string is', this.props.match.params.id)
    // console.log('this.props.history is', this.props.history)
    // console.log('this.state.video.id is', this.state.video.id)
    await
    axios({
      url: `${apiUrl}/videos/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Token token=${user.token}`
      },
      data: videoParams
    })
      .then(() => flash(messages.editVideoSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.editVideoFailure, 'flash-error'))
    this.props.history.push(`/videos/${this.state.video.id}/show`)
  }

  render() {
    const { video } = this.state

    return(
      <Layout>
        <VideoForm
          action="edit"
          video={video}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Layout>
    )
  }
}

export default withRouter(VideoEdit)
