import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'
// import {VideoIndex} from '../../api.js'

class VideoIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }

  //const res = await IndexDog(user)

  async componentDidMount() {
    const { history, user } = this.props
    console.log('this.props is', this.props)
    console.log('user.token is', user.token)
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
    console.log('videoid is', videoId)
    event.preventDefault()

    await
    axios.delete(`${apiUrl}/videos/${videoId}`)
    this.setState({videos: this.state.videos.filter(video => video.id !== videoId)})
  }

  render() {
    const videoRows = this.state.videos.map(video => {
      return (
        <tr key={video.id}>
          <td><Link
            to={`/videos/${video.id}/show`}>Index<
            /Link> | <a href="" onClick={(event) => this.deleteVideo(event,
            video.id)}>delete</a>
          </td>
        </tr>
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
