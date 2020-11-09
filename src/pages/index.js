import React from 'react'
// import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import heroImage from '../assets/images/high-contrast-landscape.png'

const HeroImageStyles = styled.section`
  img {
    object-fit: cover;
    object-position: 50% 25%;

    height: auto;
    min-height: 500px;
    max-height: 40vh;
    width: 100%;
  }
`

function HomePage () {
  return (
    <>
      <HeroImageStyles>
        <img src={heroImage} alt="Alexander Rice" />
      </HeroImageStyles>
      <section className="container stripes" style={{minHeight: '600px'}}>
        <p>👷🚧🚧 Placeholder Text for the HomePage 🚧</p>
      </section>
    </>
  )
}

export default HomePage
