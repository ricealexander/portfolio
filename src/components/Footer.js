import React from 'react'
import { Link } from 'gatsby'

function Footer () {
  return (
    <footer>
      <small>&copy; {(new Date()).getFullYear()} Alexander Rice</small>
      <Link to="https://github.com/ricealexander/portfolio">GitHub</Link>
    </footer>
  )
}

export default Footer
