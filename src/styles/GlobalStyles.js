import { createGlobalStyle } from 'styled-components'

const containerWidth = 1100
const containerPadding = 4

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "system-ui", Helvetica, Arial, sans-serif;
  }

  .container {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 ${containerPadding}px;

    width: 100%;
    max-width: ${containerWidth}px;

    // padding is only needed when smaller than container’s max-width
    @media (min-width: ${containerWidth + containerPadding}px) {
      padding: 0;
    }
  }
`

export default GlobalStyles
