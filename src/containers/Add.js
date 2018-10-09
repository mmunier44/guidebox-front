import React, { Component } from 'react'
import { hashHistory } from 'react-router-dom'
import {API, API_KEY} from '../apiConfig'
import filestack from 'filestack-js'
import { Footer } from 'components'

// set the API key
const client = filestack.init(API_KEY)

// Filestack URLs
const filestackCDN='https://cdn.filestackcontent.com'
const filestackAPI = 'https://process.filestackapi.com'

export default class AddContainer extends Component {

  constructor(props) {
    super(props)
    // set URL to empty string
    this.state = { url: '' }
    // Bind to this
    this.handleClick=this.handleClick.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.sendToServer=this.sendToServer.bind(this)
  }

  async handleClick () {
    try {
      const { filesUploaded } = await this.filestack()
      const url = filesUploaded[0].url
      this.setState({ url })
    } catch (event) {
      console.log(event)
    }
  }

  filestack = () => {
    return client.pick(
      {
        accept: 'video/*',
        maxSize: 1024 * 1024 * 100,
      }
    )
  }
  async sendToServer (uuid) {
    const { state: { url }, title, author } = this
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringiify({
          url,
          title: title.value,
          author: auhtor.value,
          views: Math.floor(Math.random() * 100000) + 1,
          uploadAt: Math.floor(Math.random() * 23) + 1,
          uuid,
          converted: false,
        }),
      })
      return await response.json()
    } catch (event) {
      console.log(event)
    }
  }

  render() {
    const { url } = this.state
    return (
      <div className="container">
        <div className=".col-md-offset-4 media-list">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h2 className="panel-title text-center">
                <span className="glyphicon glyphicon-sunglasses" /> Upload Picture
              </h2>
            </div>
            <div className="panel-body">
              <form name="document-form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    className="form-control"
                    placeholder="Enter the title..."
                    ref={(input) => this.title = input}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Author</label>
                  <input
                    className="form-control"
                    placeholder="Enter the Author..."
                    ref={(input) => this.author = input}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label hmtlFor="video">Video</label>
                  { // When the URL is returned we show the preview url &&
                    <div className="embed-responsive embed-responsive-16by9">
                      <div className="thumbnail">
                        <video controls>
                          <source src={url} type="video/mp4" />
                              Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  }
                  <div className="text-center dropup">
                    <button
                      className="btn btn-default filepicker"
                      onClick={this.handleClick}
                      type="button"
                    >
                          Upload <span className="caret" />
                    </button>
                  </div>
                </div>
                <button
                  className="btn btn-filestack btn-block submit"
                >
                      Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
