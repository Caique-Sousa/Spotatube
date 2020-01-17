import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #002a4d;
  border-radius: 40px;
  padding: 12px 24px;
  color: white;
`;

const TextIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 19px;
`;

const TextContainer = styled.span`
  margin-right: 10px;
`;

export default ({ numberOfTours }) => {
  return (
    <Button>
      <TextIconContainer>
        <TextContainer>{numberOfTours} video tours</TextContainer>
        <img src="/icons/right-arrow.svg" />
      </TextIconContainer>
    </Button>
  );
};
