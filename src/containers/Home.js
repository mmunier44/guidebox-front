import React, { Component } from 'react'
import { VideosList, Footer } from '../components'
import { API } from '../apiConfig'


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { videosList: [] }
  }

  async componentDidMount () {
    try {
      const response = await fetch(API)
      const videosList = await response.json()
      this.setState({ videosList })
    } catch (event) {
      // console.log(event)
    }
  }

  render() {
    const { videosList } = this.state
    return(
      <main className="container" id="container">
        <VideosList videos={videosList} />
      </main>
    )
  }
}

// <Footer />
