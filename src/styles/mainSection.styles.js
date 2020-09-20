import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  background-color: #408ddc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    padding-bottom: 60px;
    padding-top: 60px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    aligncontent: center;
    padding: 60px 30px;
  }

  @media (min-width: 1240px) {
    padding: 60px 90px;
  }

  @media (min-width: 1400px) {
    padding: 60px 120px;
  }

  @media (min-width: 1920px) {
    padding: 80px 300px;
  }
`
