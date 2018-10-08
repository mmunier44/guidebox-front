import React from 'react'
import { Nav } from 'components'

const Layout = (prop) => {
  const { children } = props
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}

export default Layout
