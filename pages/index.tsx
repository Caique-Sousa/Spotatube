import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import CityDisplay from "../components/CityDisplay";

const IndexContainer = styled.div`
  background: #0f0101;
`;

const HeroContainer = styled.div`
  position: relative;
`;

const HeaderContainer = styled.div`
  padding: 16px 36px;
  position: absolute;
  z-index: 1;
`;

const Video = styled.video`
  width: 100%;
  height: 55vh;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  height: 55vh;
  width: 100%;
  position: relative;
`;

const FadeBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgb(15,1,1);
  background: linear-gradient(90deg, rgba(15,1,1,1) 0%, rgba(15,1,1,1) 15%, rgba(255,255,255,0.0018382352941176405) 100%);
`;

const BackgroundTextLine1 = styled.span`
  position: absolute;
  top: 155px;
  left: 55px;
  font-size: 30px;
  font-weight: bold;
`;

const BackgroundTextLine2 = styled.span`
  position: absolute;
  top: 195px;
  left: 55px;
  font-size: 30px;
  font-weight: bold;
`;

const Index = () => (
  <IndexContainer>
    <HeroContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <VideoContainer>
        <FadeBackground />
        <BackgroundTextLine1>Watch video tours of rentals all over Europe.</BackgroundTextLine1>
        <BackgroundTextLine2> Find a place to live without viewings or phone calls.</BackgroundTextLine2>
        <Video autoPlay>
         <source src="/videos/homecheckers-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video> 
      </VideoContainer>
    </HeroContainer>
    <CityDisplay />
 </IndexContainer>
);
export default Index;
