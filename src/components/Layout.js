import React from 'react'

import Footer from './Footer'
import Header from './Header'

// Global Styles go here
// https://www.gatsbyjs.com/docs/global-css/#adding-global-styles-with-a-layout-component

function Layout ({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
