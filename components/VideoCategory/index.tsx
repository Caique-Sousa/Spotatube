import React from 'react';
import styled from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';
import Button from '../Button';
// import rp from 'request-promise';

import Video from './Video';

const categories = {
  apartments: 'Beautiful Apartments to rent',
  rooms: 'Find your new room',
  studios: 'Look the studios that you may like'
};

const CategoryTitle = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const CategoryWrapper = styled.div`
  display: flex;
  height: 230px;
  align-items: center;
`;

const SubscribeButton = styled(Button)`
  font-size: 14px;
  margin-left: 18px;
`;

const CustomScrollContainer = styled(ScrollContainer)`
  width: calc(100% + 50px);
`;

export default ({ category, listings, isPlaying, onVideoSelect }) => {
  return (
    <div>
      <CategoryTitle>
        {categories[category]}
        <SubscribeButton>Subscribe</SubscribeButton>
      </CategoryTitle>
      <CustomScrollContainer>
        <CategoryWrapper>
          {listings.map((listingData, index) => (
            // <Link href="/listing/[id]" as={`/listing/${listingData.id}`}>
            <a
              onClick={event =>
                onVideoSelect(
                  event,
                  category,
                  Object.assign(listingData, { index })
                )
              }
            >
              <Video data={listingData} isPlaying={isPlaying}></Video>
            </a>
            // </Link>
          ))}
        </CategoryWrapper>
      </CustomScrollContainer>
    </div>
  );
};
