import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
import VideoForm from './VideoForm'
import { ShowVideo, URL, TITLE } from './ShowVideo'
import messages from '../../auth/messages'

class VideoShow extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      video: {}
    }
  }

  async componentDidMount()  {
    console.log('this.pros.match.params.id', this.props.match.params.id)
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
      <div className="col-md-3">
        <div className="embed-responsive embed-responsive-16by9">
          <video controls>
            <source src={video.url} type="video/mp4" />
            {console.log('video.url is',video.url)}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="video-info">
          <h4><a href="#">{video.title}</a></h4>
        </div>
      </div>
    )
  }
}

export default withRouter(VideoShow)
