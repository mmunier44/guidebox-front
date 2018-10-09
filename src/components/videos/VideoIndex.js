import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import Layout from '../Layout'
import {apiUrl, API_KEY} from '../../apiConfig'

class VideoIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }


  async componentDidMount() {
    const response = await
      axios.get(`${apiUrl}/videos`)
    this.setState({videos: response.data.videos})
  }

  async deleteVideo(event, videoId) {
    console.log('videoid is', videoid)
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
            to={`/videos/${video.id}/show`}>update<
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
