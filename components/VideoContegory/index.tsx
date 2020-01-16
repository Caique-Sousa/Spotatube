import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
// import rp from 'request-promise';

import Video from './Video';

const CategoryTitle = styled.div``;

const CategoryWrapper = styled.div`
  display: flex;
`;

export default ({ category }) => {
  return (
    <div>
      <CategoryTitle>{category.display}</CategoryTitle>
      <CategoryWrapper>
        {category.listints.map(videoData => (
          <Link href="/listing/[id]" as={`/listing/${videoData.id}`}>
            <a>
              <Video data={videoData}></Video>
            </a>
          </Link>
        ))}
      </CategoryWrapper>
    </div>
  );
};
