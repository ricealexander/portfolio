import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "system-ui", Helvetica, Arial, sans-serif;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    max-width: 1100px;
  }
`

export default GlobalStyles
