import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import Separator from './Separator';

const FilterContainer = styled.div`
  display: flex;
  background: ${props => props.theme.darkBlue};
  padding: 5px 15px;
  margin-bottom: 40px;
  align-items: center;
`;

const FilterTextWrapper = styled.div`
  padding-right: 10px;
`;

const ShowAllWrapper = styled.div`
  padding-left: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  ${Button} {
    margin: 0 5px;
  }
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
      <ShowAllWrapper>Show all filters</ShowAllWrapper>
    </FilterContainer>
  );
};
