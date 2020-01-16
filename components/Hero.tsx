import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  padding: 15vw 0 3vw;
`;

const MessageText = styled.div`
  font-size: 32px;
`;
const CityText = styled.div`
  font-size: 90px;
`;

export default ({ cityName }) => (
  <HeroContainer>
    <MessageText>Love living in</MessageText>
    <CityText>{cityName}</CityText>
  </HeroContainer>
);
