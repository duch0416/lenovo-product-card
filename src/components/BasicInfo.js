import React from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"

import Section from "./Section"

const Wrapper = styled.div`
  padding: 20px 0px;
`
export const query = graphql`
   {
    allFile(filter: {absolutePath: {regex: "/sections/"}}) {
      edges {
        node {
          childMdx {
            frontmatter {
              title
              id
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1321) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              articles {
                text
                title
              }
            }
          }
        }
      }
    }
  }
`

const BasicInfo = () => {
  const data = useStaticQuery(query)
    const {allFile: {edges}} = data

  return (
    <Wrapper>
      {edges.map(({node:{childMdx:{frontmatter: {articles, id, featuredImage}}}}) => (
        <>
          <Section
            key={id}
            articles={articles}
            fluid={featuredImage.childImageSharp.fluid}
          />
        </>
      ))}
    </Wrapper>
  )
}

export default BasicInfo
