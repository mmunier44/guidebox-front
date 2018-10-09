import React from 'react'
import { Nav } from '../components'
import { Footer } from '../components'

const Layout = (props) => {
  const { children } = props
  return (
    <div>

      {children}

    </div>
  )
}

export default Layout

// <Nav />
