import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Thumbnail = styled.img``;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IVideoWrapper {
  isAbsolute: boolean;
  selected: boolean;
  offset?: {
    top?: number;
    left?: number;
  };
}

const VideoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 320px;
  height: 180px;
  ${(props: IVideoWrapper) =>
    !props.isAbsolute
      ? `
    position: relative;
    :hover {
      width: 400px;
      height: 226px;
    }`
      : `
    position: absolute;
    width: 400px;
    height: 226px;
    top:${props.offset.top}px;
    left:${props.offset.left}px;
  `}
  transition: ease 0.5s all;
  ${(props: IVideoWrapper) =>
    props.selected
      ? `
    width: 65.5vw;
    height: inherit;
    top: 135px;
    left: 90px;
    `
      : ''}
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

export default ({ data, isPlaying }) => {
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [isFadeVisible, setFadeVisible] = useState(false);
  const [isSelected, setSelected] = useState(false);
  const [isAbsolute, setAbsolute] = useState(false);
  const [offset, setOffset] = useState({});

  useEffect(() => {
    // videoRef.current.play();
    // console.log('data.selected', data.selected, offset);
    if (!data.selected) {
      setSelected(false);
      // console.log('setSelect false');
      if (isAbsolute) {
        setTimeout(() => {
          // console.log('setAbsolute false');
          setAbsolute(false);
        }, 500);
      }
      videoRef.current.currentTime = initialPositionTime;
    } else {
      setAbsolute(true);
      // console.log('setAbsolute true');
      setTimeout(() => {
        // console.log('setSelect true');
        setSelected(true);
      }, 500);
    }
  }, [data.selected]);

  const handleMouseEnter = event => {
    if (!isAbsolute && !isSelected && videoRef.current) {
      // console.log('handleMouseEnter');
      if (!isPlaying) {
        videoRef.current.muted = false;
      }
      // setFadeVisible(true);
      setTimeout(() => {
        // videoRef.current.currentTime = 0;
        videoRef.current.play();

        // console.log(videoWrapperRef.current.getBoundingClientRect());
        let videoRect = videoWrapperRef.current.getBoundingClientRect();
        setOffset({
          top: videoRect.top,
          left: videoRect.left
        });
        // setFadeVisible(false);
      }, 500);
    }
  };

  const handleMouseLeave = event => {
    if (!isAbsolute && !isSelected && videoRef.current) {
      // console.log('handleMouseLeave');
      setFadeVisible(true);
      videoRef.current.currentTime = initialPositionTime;
      videoRef.current.muted = true;
      setTimeout(() => {
        videoRef.current.pause();
        setFadeVisible(false);
      }, 500);
    }
  };

  return (
    <VideoContainer>
      <VideoWrapper
        isAbsolute={data.selected}
        selected={isSelected}
        offset={offset}
        ref={videoWrapperRef}
      >
        <FadeVideo visible={isFadeVisible}></FadeVideo>
        <Video
          ref={videoRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          muted
          id={data.videos[0].videoId}
        >
          <source
            src={`/videos/listings/${data.videos[0].videoId}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </Video>
      </VideoWrapper>
      {/* <VideoTitle>{data.title}</VideoTitle> */}
    </VideoContainer>
  );
};
