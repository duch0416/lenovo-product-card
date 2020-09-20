import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import Article from "./Article"

const Wrapper = styled.div`
  margin-top: 30px;

  @media (min-width: 1024px) {
    margin-top: 55px;
  }
`

const Section = ({ articles, fluid }) => {
  return (
    <Wrapper>
      <Img fluid={fluid} />
      {articles.map(article => (
        <div key={article.title}>
          <Article title={article.title} text={article.text} />
        </div>
      ))}
    </Wrapper>
  )
}

export default Section
