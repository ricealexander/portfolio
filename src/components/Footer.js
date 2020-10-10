import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  margin: 0.5rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

  a {
    text-decoration: none;
    border-bottom: 0.1875rem solid currentColor;
    color: inherit;

    &:hover {
      color: #4747d1;
    }
  }

  /* Semantically, <small> can be used for legal/disclaimer copy
     but need not display at a smaller size */

  small {
    font-size: inherit;
  }
`

function Footer () {
  return (
    <FooterStyles>
      <div className="container">
        <small>© {(new Date()).getFullYear()} Alexander Rice</small>
        <Link to="https://github.com/ricealexander/portfolio">GitHub</Link>
      </div>
    </FooterStyles>
  )
}

export default Footer
