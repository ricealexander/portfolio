import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  ul {
    display: flex;
    align-items: center;
  }
`

function Header () {
  return (
    <HeaderStyles>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Link #1</Link></li>
        <li><Link to="/">Link #2</Link></li>
        <li><Link to="/">Link #3</Link></li>
      </ul>
    </HeaderStyles>
  )
}

export default Header
