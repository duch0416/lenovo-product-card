import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"

import SpecificationItem from "./SpecificationItem"
import {Header} from "../styles/header"

const Wrapper = styled.div`
  padding: 10px 0px;
`

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/spec/" } }) {
      edges {
        node {
          childMdx {
            frontmatter {
              id
              parameter
              values
              additionalInfo
            }
          }
        }
      }
    }
  }
`

const Specification = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(query)

  return (
    <Wrapper>
      <Header>Specyfikacja</Header>
      {edges.map(
        ({
          node: {
            childMdx: {
              frontmatter: { id, parameter, values, additionalInfo },
            },
          },
        }) => (
          <SpecificationItem
            key={id}
            parameter={parameter}
            values={values}
            additionalInfo={additionalInfo}
          />
        )
      )}
    </Wrapper>
  )
}

export default Specification
