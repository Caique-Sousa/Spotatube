import React from "react";
import styled from "styled-components";
import NumberOfToursButton from "./NumberOfToursButton";

const CityCategoryContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1579192360523-f8f0038c73fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80");
  position: relative;
  border: 1px solid black;
  height: 200px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: white;
`;

const CityText = styled.span`
font-family: Gotham;
font-style: normal;
font-weight: bold;
font-size: 72px;
line-height: 86px;
`;

const CityTitle = styled.span``;

export default ({ cityTitle, city, numberOfTours }) => {
  return (
    <CityCategoryContainer>
      <ButtonContainer>
      <NumberOfToursButton numberOfTours={numberOfTours}></NumberOfToursButton>
      </ButtonContainer>
      <TextContainer>
        <CityTitle>{cityTitle}</CityTitle>
        <CityText>{city}</CityText>
      </TextContainer>
    </CityCategoryContainer>
  );
};
