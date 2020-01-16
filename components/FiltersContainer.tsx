import React from 'react';
import styled from 'styled-components';

import Button from './Button';

const FilterContainer = styled.div`
  display: flex;
  background: ${props => props.theme.darkBlue};
  padding: 5px 15px;
  margin-bottom: 40px;
  align-items: center;
  font-family: Roboto, sans-serif; 
  border-radius: 8px;
  font-size: 16px;
`;

const FilterTextWrapper = styled.div`
  margin-right: 37px;
`;


const ButtonWrapper = styled.div`
  display: flex;
  ${Button} {
    margin: 0 5px;
    font-size: 16px;
  }
  margin-right: 37px;
`;

export default () => {
  return (
    <FilterContainer>
      <FilterTextWrapper>Filter By:</FilterTextWrapper>
      <ButtonWrapper>
        <Button secondary>Move in - Move out</Button>
        <Button secondary>Property type</Button>
        <Button secondary>Price</Button>
      </ButtonWrapper>
      <div>Show all filters</div>
    </FilterContainer>
  );
};
