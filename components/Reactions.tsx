import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ReactionsContainer = styled.div`
  display: flex;
`;

const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 8px;
`;

const ReactionText = styled.div`
  white-space: nowrap;
  padding-left: 8px;
`;

export default ({}) => (
  <ReactionsContainer>
    <ReactionItem>
      <img src="/images/maxi.svg" />
      <ReactionText>Maxi Brutal</ReactionText>
    </ReactionItem>
    <ReactionItem>
      <img src="/images/mini.svg" />
      <ReactionText>Mini Brutal</ReactionText>
    </ReactionItem>
  </ReactionsContainer>
);
