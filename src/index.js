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

const appJsx = (
  <BrowserRouter>
    <App />

  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))


// <Nav />
// <Layout />
// <App />
// <Routes />
