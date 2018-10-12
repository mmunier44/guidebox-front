import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
import VideoForm from './VideoForm'

class OldVideoEdit extends React.Component {
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

  async componentDidMount() {
    const { history, user } = this.props
    // console.log('edit get', this.props)
    // console.log('edit long props', this.props.match.params.id)
    // console.log('response set state', response.data.video)
    const response = await
      axios({
        url: `${apiUrl}/videos/`,
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

    const videoParams = JSON.stringify({video: this.state.video})
    await
    axios.put(`${apiUrl}/videos/${this.props.match.params.id}`, videoParams)

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

export default withRouter(OldVideoEdit)
