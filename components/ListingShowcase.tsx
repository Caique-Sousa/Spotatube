import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Controls from './Controls';
import Floorplan from './Floorplan';
import Reactions from './Reactions';
import { ITheme } from '../pages/_app';

const menuList = [
  {
    label: 'Video',
    id: 'video'
  },
  {
    label: 'Photos',
    id: 'photos'
  },
  {
    label: '360s',
    id: '360s'
  },
  {
    label: 'Furniture & amenities',
    id: 'furniture'
  },
  {
    label: 'House rules',
    id: 'rules'
  },
  {
    label: 'Pricing & availability',
    id: 'price'
  },
  {
    label: 'Getting around',
    id: 'around'
  }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #1d1d1d;
  margin: 11px -50px;
  padding-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: 65.5vw;
  height: 42vw;
  position: relative;
`;

const SideMenu = styled.div`
  /* background: blue; */
  width: calc(100% - 65.5vw - 180px);
`;

const NavArrow = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  width: 90px;
  cursor: pointer;
  img {
    margin: auto;
  }
`;

const TopContainer = styled.div`
  display: flex;
  padding: 15px 50px;
  height: 36px;
`;

const TopLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`;

const TopRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50%;
  align-items: center;
`;

const HomecheckerImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

const ListingTitle = styled.div``;
const HomecheckerName = styled.div`
  font-size: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

const Price = styled.div`
  font-size: 21px;
  text-align: right;
`;

const PriceSubText = styled.div`
  font-size: 12px;
  text-align: right;
`;

const MenuWrapper = styled.div`
  margin: 10px;
`;

interface IMenuItem {
  theme: ITheme;
  selected?: boolean;
}

const MenuItem = styled.div`
  ${(props: IMenuItem) =>
    props.selected
      ? `
  background: #424242;
  ::before {
    content:' ';    
    width: 8px;
    height: 100%;
    background: ${props.theme.primary};
    position: absolute;
    top: 0;
    left: 0;
  }
  `
      : ''}
  position: relative;
  padding: 8px 15px;
  cursor: pointer;
  :hover {
    background: #212121;
  }
`;

const BackButton = styled.div`
  padding: 16px 20px 16px 0;
  width: fit-content;
  cursor: pointer;
`;

const SpacedButton = styled(Button)`
  margin: 0 5px;
`;

const FooterControls = styled.div`
  position: absolute;
  bottom: 0;
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export default ({
  listing,
  videoEl,
  onListingClose,
  onSelectPrevious,
  onSelectNext
}) => {
  const [selectedMenu, setSelectedMenu] = useState('video');

  const handleMenuClick = menu => {
    setSelectedMenu(menu);
  };

  return (
    <>
      <Container>
        <TopContainer>
          <TopLeft>
            <HomecheckerImage
              src={`https://sah-prod-users.s3.amazonaws.com/${
                listing.homechecker && listing.homechecker.profilePicture
                  ? listing.homechecker.profilePicture
                  : '97f501d4-0e1c-4b30-8b17-cb9ef54cf3ef.jpg'
              }`}
            />
            <TitleWrapper>
              <ListingTitle>{listing.title}</ListingTitle>
              <HomecheckerName>
                {listing.homechecker && listing.homechecker.firstName
                  ? listing.homechecker.firstName +
                    (listing.homechecker.lastName
                      ? ' ' + listing.homechecker.lastName
                      : '')
                  : ''}
              </HomecheckerName>
            </TitleWrapper>
          </TopLeft>
          <TopRight>
            <SpacedButton outline>Share</SpacedButton>
            <SpacedButton>Check availability</SpacedButton>
            {listing && listing.price && (
              <PriceContainer>
                <Price>{'£' + listing.price.price}</Price>
                <PriceSubText>per month</PriceSubText>
              </PriceContainer>
            )}
          </TopRight>
        </TopContainer>
        <Wrapper>
          <NavArrow onClick={() => onSelectPrevious(listing.index - 1)}>
            <img src="/images/arrow-left.svg" />
          </NavArrow>
          <Content>
            <FooterControls>
              {/* <Reactions /> */}
              <Controls videoEl={videoEl} listing={listing} />
            </FooterControls>
          </Content>
          <SideMenu>
            <MenuWrapper>
              {menuList.map(menu => (
                <MenuItem
                  selected={selectedMenu === menu.id}
                  onClick={() => handleMenuClick(menu.id)}
                >
                  {menu.label}
                </MenuItem>
              ))}
              <Floorplan videoEl={videoEl} listing={listing} />
            </MenuWrapper>
          </SideMenu>
          <NavArrow onClick={() => onSelectNext(listing.index + 1)}>
            <img src="/images/arrow-right.svg" />
          </NavArrow>
        </Wrapper>
      </Container>
      <BackButton onClick={() => onListingClose(listing)}>
        {'< Back'}
      </BackButton>
    </>
  );
};
