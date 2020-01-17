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
`;

const Video = styled.video`
  width: 100%;
  height: 50vh;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  height: 50vh;
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

const Index = () => (
  <IndexContainer>
    <HeroContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <VideoContainer>
        <FadeBackground />
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
