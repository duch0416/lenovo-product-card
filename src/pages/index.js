import React from "react"
import styled from "styled-components"

import BasicInfo from "../components/BasicInfo"
import MainSection from "../components/MainSection"
import Specification from "../components/Specification"
import GlobalStyle from "../styles/globalStyles"
import Sockets from "../components/Sockets"

const ContentWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 768px) {
    padding: 0 30px;
  }


  @media (min-width: 1240px) {
    padding: 0 90px;
  }


  @media (min-width: 1400px) {
    padding: 0 120px;
  }

  @media (min-width: 1920px) {
    padding: 0 300px;
  }
`

const IndexPage = () => (
  <>
    <GlobalStyle />
    <MainSection />
    <ContentWrapper>
      <BasicInfo />
      <Specification />
      <Sockets />
    </ContentWrapper>
  </>
)

export default IndexPage
