import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderStyles = styled.header`
  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    list-style-type: none;
    margin: 0.5rem 0;
    padding-left: 0;
  }

  li:first-child {
    margin-right: auto;
  }

  li + li {
    margin-left: 0.5rem;
  }

  a {
    text-decoration: none;
    border-bottom: 0.1875rem solid currentColor;
    color: inherit;

    &:hover {
      color: #4747d1;
    }
  }
`

function Header () {
  return (
    <HeaderStyles>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Link #1</Link></li>
          <li><Link to="/">Link #2</Link></li>
          <li><Link to="/">Link #3</Link></li>
        </ul>
      </div>
    </HeaderStyles>
  )
}

export default Header
