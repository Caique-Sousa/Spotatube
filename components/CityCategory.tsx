import React from "react";
import styled from "styled-components";
import NumberOfToursButton from "./NumberOfToursButton";

interface ICityCategoryContainer {
  city?:string;
  cityTitle?: string;
  numberOfTours?: number;
}
const CityCategoryContainer = styled.div`
  background-image: ${(props:ICityCategoryContainer) => `url('/images/${props.city.toLowerCase()}-city-category.jpg')`};
  background-size: cover;
  position: relative;
  border: 1px solid black;
  height: 350px;
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
    <CityCategoryContainer city={city}>
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
