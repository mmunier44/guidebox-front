import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter, BrowserRouter } from 'react-router-dom'
// import Nav from './src/components/Nav'
// import Layout from './src/components/Layout'
import Routes from './routes'
import VideoIndex from './components/videos/VideoIndex'
import AddContainer from './containers/Add'
import Home from './containers/Home'
import Video from './components/Video'
import VideoShow from './components/videos/VideoShow'

const appJsx = (
  <BrowserRouter>
    <App />

  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))

const Video2 = (
  <BrowserRouter>
    <Video />

  </BrowserRouter>
)

ReactDOM.render(Video2, document.getElementById('root2'))

// <Nav />
// <Layout />
// <App />
// <Routes />
// <AddContainer />
