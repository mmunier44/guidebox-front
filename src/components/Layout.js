import React from 'react'
import { Nav } from '../components'
import { Footer } from '../components'

const Layout = (props) => {
  return (
    <div>
      <Nav />

      {props.children}

    </div>
  )
}

export default Layout
