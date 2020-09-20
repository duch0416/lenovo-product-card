import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 10px;
  }
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`

export const AdditionalInfo = styled.p`
  font-size: 9px;
  font-weight: 300;

  @media (min-width: 1024px) {
    font-size: 12px;
  }
`

export const Parameter = styled.h4`
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 16px;
    font-weight: 300;
    width: 200px;
    margin-right: 200px;
  }

  @media (min-width: 1400px) {
    font-size: 20px;
  }
`

export const Value = styled.span`
  margin-bottom: 7px;
  font-weight: 300;
`
