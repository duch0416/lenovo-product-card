import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LogoImg = styled.img`
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: bottom left;
  transform: translateY(-100%) rotate(90deg);

  @media (min-width: 1024px) {
    width: 80px;
  }


  @media (min-width: 1400px) {
    transform-origin: 0 0;
    transform: translateY(0) rotate(0);
  }
`

const query = graphql`
  {
    file(name: { eq: "lenovo-logo" }) {
      publicURL
    }
  }
`

const Logo = () => {
  const data = useStaticQuery(query)

  return <LogoImg src={data.file.publicURL} />
}

export default Logo
