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
// import VideoList from './VideoList'
import VideoShow from './components/videos/VideoShow'
import VideoCarousel from './components/videos/VideoCarousel'

const appJsx = (
  <HashRouter>
    <App />

  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))

// const Video2 = (
//   <HashRouter>
//     <Video />
//
//   </HashRouter>
// )
//
// ReactDOM.render(Video2, document.getElementById('root2'))

// <Nav />
// <Layout />
// <App />
// <Routes />
// <AddContainer />
