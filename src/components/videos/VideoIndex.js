import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
// import {VideoIndex} from '../../api.js'
import messages from '../../auth/messages'
import VideoCarousel from './VideoCarousel'
import { Video } from '../../components/Video.js'
import { Table } from 'reactstrap'


class VideoIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }


  async componentDidMount() {
    const { history, user } = this.props
    // console.log('this.props is', this.props)
    // console.log('user.token is', user.token)
    const response = await
      axios({
        url: `${apiUrl}/videos/`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Token token=${user.token}`
        },
        method: 'GET'
      })
    this.setState({videos: response.data.videos})
  }

  async deleteVideo(event, videoId) {
    const { history, user, flash } = this.props
    // console.log('videoid is', videoId)
    event.preventDefault()
    await
    axios({
      url: `${apiUrl}/videos/${videoId}`,
      headers: {
        'Authorization':`Token token=${user.token}`
      },
      method: 'DELETE'
    })
      .then(() => flash(messages.deleteVideoSuccess, 'flash-success'))
      .then(() => history.push('/'))
      .catch(() => flash(messages.deleteVideoFailure, 'flash-error'))

    this.setState({videos: this.state.videos.filter(video => video.id !== videoId)})
  }

  // DRAGONS LINE 58
  render() {
    const videoRows = this.state.videos.map(video => {
      return (
        <Table dark key={video._id}>
          <thead>
            <tr>
              <th> url </th>
              <th> title </th>
              <th> edit | delete </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link
                to={`/videos/${video._id}/show`}>{video.url}</Link> | </td>
              <td><Link
                to={`/videos/${video._id}/show`}>{video.title}</Link> | </td>
              <td>
                <Link
                  to={{pathname: `/videos/${video._id}/edit`,
                    state: { linkState: video.id}}
                  }>update<
                /Link> | <a href=" " onClick={(event) => this.deleteVideo(event,
                  video._id)}>delete</a>
              </td>
            </tr>
          </tbody>
        </Table>
      )
    })

    return (
      <Layout>
        <h1>Videos</h1>

        <table>
          <tbody>
            {videoRows}
          </tbody>
        </table>
      </Layout>
    )
  }
}

export default withRouter(VideoIndex)
