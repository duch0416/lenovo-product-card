import React from "react"

import {Wrapper, H1} from "../styles/header.styles"

const Header = ({ title, subtitle, text }) => {
  return (
    <Wrapper>
      <H1>
        <span>{title}</span>
        <span>{subtitle}</span>
      </H1>
      <p>{text}</p>
    </Wrapper>
  )
}

export default Header
