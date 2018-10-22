import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter, HashRouter } from 'react-router-dom'
// import Nav from './src/components/Nav'
// import Layout from './src/components/Layout'
import Routes from './routes'
import VideoIndex from './components/videos/VideoIndex'
import AddContainer from './containers/Add'
import Home from './containers/Home'
import Video from './components/Video'
import Video2 from './components/Video2'
import Video3 from './components/Video3'
import VideosList from './components/VideosList'
import VideoShow from './components/videos/VideoShow'
import VideoCarousel from './components/videos/VideoCarousel'

const appJsx = (
  <HashRouter>
    <App />

  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))

const WorkVideo = (
  <HashRouter>
    <Video />

  </HashRouter>
)

ReactDOM.render(WorkVideo, document.getElementById('root2'))

const EarthVideo = (
  <HashRouter>
    <Video3 />

  </HashRouter>
)

ReactDOM.render(EarthVideo, document.getElementById('root3'))

const Synthesizer = (
  <HashRouter>
    <Video2 />

  </HashRouter>
)

ReactDOM.render(Synthesizer, document.getElementById('root4'))

// <Nav />
// <Layout />
// <App />
// <Routes />
// <AddContainer />
