import React from "react"
import {
  Wrapper,
  Parameter,
  ValuesContainer,
  AdditionalInfo,
  Value
} from "../styles/specificationItem.styles"

const SpecificationItem = ({ parameter, values, additionalInfo }) => {
  return (
    <Wrapper>
      <Parameter>{parameter}</Parameter>
      <ValuesContainer>
        {values.map(value => (
          <Value>{value}</Value>
        ))}
        {additionalInfo && <AdditionalInfo>{additionalInfo}</AdditionalInfo>}
      </ValuesContainer>
    </Wrapper>
  )
}

export default SpecificationItem
