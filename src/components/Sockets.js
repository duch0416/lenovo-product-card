import React from "react"

import { socketsDescriptions } from "../data/socketsDesc"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "../styles/title"
import {Wrapper, Image, DescContainer, SocketDesc} from "../styles/sockets.styles"


const query = graphql`
  {
    file(name: { eq: "sockets" }) {
      childImageSharp {
        fluid(maxWidth: 1321) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const Sockets = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Header>Specyfikacja</Header>
      <Image fluid={data.file.childImageSharp.fluid}/>
      <DescContainer>
        {socketsDescriptions.map(desc => (
          <SocketDesc key={desc}>{desc}</SocketDesc>
        ))}
      </DescContainer>
    </Wrapper>
  )
}

export default Sockets
