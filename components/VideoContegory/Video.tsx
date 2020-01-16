import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img``;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  height: 180px;
  position: relative;
  transition: ease 0.5s all;
  :hover {
    width: 400px;
    height: 226px;
  }
`;

const VideoTitle = styled.div``;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
interface IFadeVideo {
  visible: boolean;
}
const FadeVideo: any = styled.div`
  pointer-events: none;
  background: black;
  transition: ease 0.5s all;
  opacity: ${(props: IFadeVideo) => (props.visible ? 1 : 0)};
  z-index: ${(props: IFadeVideo) => (props.visible ? 1000 : -1)};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const initialPositionTime = 20;

export default ({ data }) => {
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const fadeRef = useRef(null);
  const [fadeVisible, setFadeVisible] = useState(false);

  useEffect(() => {
    // videoRef.current.play();
    videoRef.current.currentTime = initialPositionTime;
  }, []);

  const handleMouseEnter = event => {
    console.log('handleMouseEnter');
    setFadeVisible(true);
    setTimeout(() => {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setFadeVisible(false);
    }, 500);
  };

  const handleMouseLeave = event => {
    console.log('handleMouseLeave');
    setFadeVisible(true);
    setTimeout(() => {
      videoRef.current.pause();
      videoRef.current.currentTime = initialPositionTime;
      setFadeVisible(false);
    }, 500);
  };
  return (
    <VideoContainer>
      <VideoWrapper ref={videoWrapperRef}>
        <FadeVideo visible={fadeVisible} ref={fadeRef}></FadeVideo>
        <Video
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
        >
          <source
            src="/videos/Spotahome_careers_-_Join_the_ride.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </Video>
      </VideoWrapper>
      {/* <VideoTitle>{data.title}</VideoTitle> */}
    </VideoContainer>
  );
};
