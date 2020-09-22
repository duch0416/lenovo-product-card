import React from "react"

import MainHeader from "./MainHeader"
import { headertxt } from "../data/text"
import Hero from "./Hero"
import Logo from "./Logo"
import { Wrapper, Container } from "../styles/mainSection.styles"

const MainSection = () => {
  return (
    <Wrapper>
      <Logo />
      <Container>
        <Hero />
        <MainHeader
          title="Yoga S740 (14)"
          subtitle="Wyróżniająca inteligencja"
          text={headertxt}
        />
      </Container>
    </Wrapper>
  )
}

export default MainSection
