import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Header = styled.div``;

const Profile = styled.img`
  float: right;
`;

export default () => (
  <Header>
    <Logo />
    <Profile src="/images/Meko.png" />
  </Header>
);
