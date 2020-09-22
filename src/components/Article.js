import React from "react"
import styled from "styled-components"

import { Header } from "../styles/title"

const Wrapper = styled.div`
  margin-top: 40px;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }

  @media (min-width: 1400px) {
    line-height: 28px;
  }
`

const Article = ({ title, text }) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default Article
