import React from 'react';
import styled from 'styled-components';

const FloorplanContainer = styled.div`
  padding: 0 20px;
  width: 100%;
  max-width: 253px;
  max-height: 380px;
`;

const FloorplanImage = styled.img`
  width: 100%;
`;

export default ({ videoEl, listing }) => {
  return (
    listing &&
    listing.floorplans &&
    Object.keys(listing.floorplans).length > 0 && (
      <FloorplanContainer>
        <FloorplanImage
          src={listing.floorplans[Object.keys(listing.floorplans)[0]]}
        ></FloorplanImage>
      </FloorplanContainer>
    )
  );
};
