import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    margin-top: 17px;
  }

`

export const AdditionalInfo = styled.p`
  font-size: 9px;
  font-weight: 300;
  margin-top: 2px;
  

  @media (min-width: 1024px) {
    font-size: 12px;
    max-width: 600px;
  }

  @media(min-width: 1400px){
    max-width: unset;
  }
`

export const Parameter = styled.h4`
  font-weight: 400;

  @media (min-width: 1024px) {
    font-size: 16px;
    font-weight: 300;
    width: 200px;
    margin-right: 100px;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  @media (min-width: 1400px) {
    font-size: 20px;
    margin-right: 200px;
  }
`

export const Value = styled.span`
  font-weight: 300;
  margin-bottom: 7px;

  
`
