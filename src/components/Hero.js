import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImgWrapper = styled.div`
  min-width: 280px;
  margin-top: 100px;

  @media (min-width: 768px) {
    margin: 0;
    min-width: 400px;
  }


  @media (min-width: 1024px) { 
    min-width: 500px;
  }

  @media (min-width: 1400px) {
    min-width: 725px;
  }
`

const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1321) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Hero = () => {
  const data = useStaticQuery(query)

  return (
    <ImgWrapper>
      <Img fluid={data.file.childImageSharp.fluid} />
    </ImgWrapper>
  )
}

export default Hero
