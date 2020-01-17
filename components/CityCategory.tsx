import React from "react";
import styled from "styled-components";
import NumberOfToursButton from "./NumberOfToursButton";

interface ICityCategoryContainer {
  city?:string;
  cityTitle?: string;
  numberOfTours?: number;
  height?: string;
}
const CityCategoryContainer = styled.div`
  background-image: ${(props:ICityCategoryContainer) => `url('/images/${props.city.toLowerCase()}-city-category.jpg')`};
  background-size: cover;
  position: relative;
  height:${(props:ICityCategoryContainer) => props.height? props.height:'350px'};
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

export default ({ cityTitle, city, numberOfTours, height }) => {
  return (
    <CityCategoryContainer city={city} height={height}>
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
