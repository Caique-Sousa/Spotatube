import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import CityDisplay from "../components/CityDisplay";

const IndexContainer = styled.div`

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
  height: 40vh;
`;

const VideoContainer = styled.div`
  height: 40vh;
  width: 100%;
`;

const Index = () => (
  <IndexContainer>
    <HeroContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <VideoContainer>
        <Video>
         <source src="/videos/homecheckers-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Video> 
      </VideoContainer>
    </HeroContainer>
    <CityDisplay />
 </IndexContainer>
);
export default Index;
