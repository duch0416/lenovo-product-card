import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-bottom: 20px;

  p {
    color: white;
    font-size: 12px;
    font-weight: 200;
    line-height: 18px;

    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 65%;
  }
`

export const H1 = styled.h1`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 45px;
  font-weight: 400;

  & span:first-child {
    letter-spacing: 1.5px;
  }

  span {
    margin-top: 5px;
    padding: 0;
  }

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 35px;
  }
`
