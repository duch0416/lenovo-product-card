import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 35px;

  @media (min-width: 1024px) {
    margin-bottom: 50px
  }

  @media (min-width: 1400px) {
    margin-bottom: 125px
  }
`

export const Image = styled(Img)`
  margin-top: 30px;
  margin-bottom: 30px;
`

export const SocketDesc = styled.p`
  margin: 5px;
  font-size: 14px;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }

  @media (min-width: 1400px) {
    font-size: 20px;
  }
`

export const DescContainer = styled.div`
  display: "flex";
  flex-direction: "column";
`
