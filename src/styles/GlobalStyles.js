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

  // Stripe Effect
  // Creates a striped background.
  // --stripe-angle <deg> the angle the stripes should go
  // --stripe-width <any> the width of the colored stripe

  // Creates a stripe effect with the specified width and angle.
  // --stripe-offset adds a narrow offset so the stripe isn’t pixellated.
  //   It uses clamp to set this offset between 0.5px and 0.75px
  //   (when --stripe-width ranges from 15.015px to 22.523px)

  .stripes {
    --stripe-angle: 135deg;
    --stripe-width: 0.1875rem;

    --stripe-offset: clamp(0.5px, calc(var(--stripe-width) * 0.0333), 0.75px);

    background-image: repeating-linear-gradient(
      var(--stripe-angle),
      transparent 0,
      transparent calc(var(--stripe-width) - var(--stripe-offset)),
      black       calc(var(--stripe-width) + var(--stripe-offset)),
      black       calc((var(--stripe-width) * 2) - var(--stripe-offset)),
      transparent calc((var(--stripe-width) * 2) + var(--stripe-offset)),
      transparent var(--stripe-width)
    );
  }
`

export default GlobalStyles
