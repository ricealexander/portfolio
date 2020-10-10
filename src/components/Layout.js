/* eslint-disable import/no-unassigned-import */

import React from 'react'
import styled from 'styled-components'

import Footer from './Footer'
import Header from './Header'

// Global Styles go here
// https://www.gatsbyjs.com/docs/global-css/#adding-global-styles-with-a-layout-component
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'

const LayoutStyles = styled.div`
  /* Sticky Footer */
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;

  & > header,
  & > footer {
    flex-grow: 0;
    flex-shrink: 0;
  }

  & > main {
    flex-grow: 1;
    flex-shrink: 0;
  }
`

function Layout ({ children }) {
  return (
    <>
      <GlobalStyles />

      <LayoutStyles>
        <Header />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </LayoutStyles>
    </>
  )
}

export default Layout
