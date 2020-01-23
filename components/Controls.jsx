import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const ControlContainer = styled.div`
  padding: 0 20px;
  width: 100%;
`;
const ControlWrapper = styled.div`
  height: 10px;
  width: 100%;
  background: ${props => props.theme.niceWhite};
  position: relative;
  border-radius: 10px;
  /* cursor: url('/images/cursor.svg') 4 4, auto; */
`;
const ControlProgress = styled.div`
  height: 10px;
  width: 5px;
  background: ${props => props.theme.primary};
  position: absolute;
  border-radius: 10px 0 0 10px;
  user-select: none;
  top: 0;
  left: 0;
`;

const Marker = styled.div`
  height: 10px;
  width: 2px;
  background: #1d1d1d;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`;
const MarkerText = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 13px;
  /* transform: rotate(35deg); */
`;

export default ({ videoEl, listing }) => {
  const [duration, setDuration] = useState(0);
  const progressRef = useRef(null);
  const controlRef = useRef(null);

  useEffect(() => {
    // console.log(listing.roomsTimeLine.roomsTimeLine);
    const timeupdate = event => {
      // console.log(event.target.currentTime);
      if (progressRef.current) {
        progressRef.current.style.width =
          (event.target.currentTime * 100) / event.target.duration + '%';
      }
    };
    videoEl.addEventListener('timeupdate', timeupdate, { passive: true });
    return () => {
      videoEl.removeEventListener('timeupdate', timeupdate);
    };
  }, [progressRef.current]);
  return (
    <ControlContainer>
      <ControlWrapper
        ref={controlRef}
        onClick={event => {
          let barRect = controlRef.current.getBoundingClientRect();
          // console.log(barRect, event.clientX);
          let refXPos = event.clientX - barRect.x;
          let percentage = (refXPos * 100) / barRect.width;
          let timeClicked = (videoEl.duration * percentage) / 100;
          // console.log({ refXPos, percentage, timeClicked });
          let index = listing.roomsTimeLine.roomsTimeLine.findIndex(
            time => timeClicked < time.videoTimeSeconds
          );
          // console.log({ index });
          index =
            index !== -1
              ? index - 1
              : listing.roomsTimeLine.roomsTimeLine.length - 1;
          videoEl.currentTime =
            listing.roomsTimeLine.roomsTimeLine[index].videoTimeSeconds;
          console.log(index);
        }}
      >
        <ControlProgress ref={progressRef} />
        {listing.roomsTimeLine &&
          listing.roomsTimeLine.roomsTimeLine &&
          listing.roomsTimeLine.roomsTimeLine.map(time => (
            <Marker
              style={{
                left: (time.videoTimeSeconds * 100) / videoEl.duration + '%'
              }}
            >
              <MarkerText>{time.title}</MarkerText>
            </Marker>
          ))}
      </ControlWrapper>
    </ControlContainer>
  );
};
