import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import CityDisplay from "../components/CityDisplay";

const HeaderContainer = styled.div`
  padding: 16px 36px;
`;

const Video = styled.video`
  width: 100%;
  height: 40vh;
`;

const VideoContainer = styled.div`
  background-color: blue;
  height: 40vh;
  width: 100%;
`;

const Index = () => (
  <>
    {/* <Video>
      <source src="/videos/homecheckers-intro.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </Video> */}
    {/* <VideoContainer></VideoContainer> */}
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <CityDisplay />
  </>
);
export default Index;
