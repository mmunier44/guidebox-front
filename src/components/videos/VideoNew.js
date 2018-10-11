import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
import VideoForm from './VideoForm'
import { handleErrors } from '../../auth/api'
import messages from '../../auth/messages'

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
    const newVideo = {...this.state.video,
      [event.target.name]: event.target.value}
    this.setState({video: newVideo})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const videoParams = JSON.stringify({video: this.state.video})
    const { history, user, flash } = this.props
    console.log('DRAGONS this.state.video is' , this.state.video)
    // 404 passing in ${this.state.video} = object:Object
    // 404 this.state.video
    console.log('videoparams', videoParams)
    // console.log('backend line 67', req.user.id)
    // just sending in videoParams gets 500 cannot set property owner of undefined
    const response = await

      axios({
        url: `${apiUrl}/videos/`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        },
        data: videoParams
      })
        .then(() => flash(messages.newVideoSuccess, 'flash-success'))
        .catch(() => flash(messages.newVideoFailure, 'flash-error'))

    console.log('DRAGONS2', videoParams)

    // this.props.history.push(`/videos/${response.data.video.id}/show`)
    console.log('this props history', this.props.history)
    console.log('response is ', response)
  }

  // videoNew = event => {
  //   event.preventDefault()
  //   console.log('new video event', event)
  //
  //   const { video } = this.state
  //   const { flash, history } = this.props
  //
  //   videoNew(this.state)
  //     .then(res => res.ok ? res : new Error())
  //     .then(res => res.json())
  //     .then(() => flash(messages.newVideoSuccess, 'flash-success'))
  //     .then(() => history.push('/'))
  //     .catch(() => flash(messages.newVideoFailure, 'flash-error'))
  // }

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
