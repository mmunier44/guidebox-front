import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
// import Nav from './src/components/Nav'
// import Layout from './src/components/Layout'
// import Routes from './routes'

const appJsx = (
  <HashRouter>
    <App />

  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))


// <Nav />
// <Layout />
