import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FiltersContainer from '../components/FiltersContainer';
import VideoCategory from '../components/VideoCategory';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Fade from '../components/Fade';
import ListingShowcase from '../components/ListingShowcase';
import styled from 'styled-components';

import cityData from '../utils/data/data.json';
//   [
//   {
//     id: 1,
//     display: 'Rooms in 2 bed aprtments',
//     listints: [
//       {
//         id: 1,
//         youtubeLink: 'https://www.youtube.com/watch?v=uGdHxBkezoM&t=3s',
//         title: 'Become a Spotahome Homechecker - Freelance Photography Jobs'
//       }
//     ]
//   },
//   {
//     id: 2,
//     display: '2 bed House',
//     listints: [
//       {
//         id: 2,
//         youtubeLink: 'https://www.youtube.com/watch?v=uGdHxBkezoM&t=3s',
//         title: 'Freelance Photography Jobs'
//       },
//       {
//         id: 3,
//         youtubeLink: 'https://www.youtube.com/watch?v=uGdHxBkezoM&t=3s',
//         title: 'Asdfds fdsa - Freelance Photography Jobs'
//       }
//     ]
//   }
// ];

const CityContainer = styled.div`
  position: relative;
  height: 100%;
  background: ${props => props.theme.niceBlack};
`;

const TopWrapper = styled.div`
  transition: ease 0.5s all;
`;

const CityContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px 50px;
  box-sizing: border-box;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const BackgroundVideo = styled.video`
  width: 100%;
`;

const FadeBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #0f0101;
  background: -moz-linear-gradient(
    top,
    rgba(76, 76, 76, 0.1) 0%,
    rgba(89, 89, 89, 0.21) 12%,
    rgba(102, 102, 102, 0.33) 25%,
    rgba(71, 71, 71, 0.46) 39%,
    rgba(43, 43, 43, 0.66) 62%,
    rgba(17, 17, 17, 0.8) 78%,
    rgba(28, 28, 28, 0.89) 88%,
    #0f0101 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(76, 76, 76, 0.1) 0%,
    rgba(89, 89, 89, 0.21) 12%,
    rgba(102, 102, 102, 0.33) 25%,
    rgba(71, 71, 71, 0.46) 39%,
    rgba(43, 43, 43, 0.66) 62%,
    rgba(17, 17, 17, 0.8) 78%,
    rgba(28, 28, 28, 0.89) 88%,
    #0f0101 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(76, 76, 76, 0.1) 0%,
    rgba(89, 89, 89, 0.21) 12%,
    rgba(102, 102, 102, 0.33) 25%,
    rgba(71, 71, 71, 0.46) 39%,
    rgba(43, 43, 43, 0.66) 62%,
    rgba(17, 17, 17, 0.8) 78%,
    rgba(28, 28, 28, 0.89) 88%,
    #0f0101 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a4c4c4c', endColorstr='#0f0101',GradientType=0 ); /* IE6-9 */
`;

const initObj: any = {};

export default () => {
  const router = useRouter();
  const { city } = router.query;
  const [selectedVideo, setSelectedVideo] = useState(initObj);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const videoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  // useEffect(() => {
  //   const listingData = cityData['apartments'][0];
  //   let videoEl: any = document.getElementById(listingData.videos[0].videoId);
  //   // videoEl.muted = false;
  //   videoEl.play();
  //   handleVideoSelect(
  //     { target: videoEl },
  //     'apartments',
  //     Object.assign(listingData, { index: 0 })
  //   );
  // }, []);

  const handleVideoSelect = (event, categoryId, videoData) => {
    // console.log(videoData);
    // console.log(event.target, categoryId, videoData);
    if (videoRef.current !== event.target) {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      videoRef.current = event.target;
      if (selectedVideo) {
        selectedVideo.selected = false;
      }
      setSelectedCategory(categoryId);
      videoData.selected = true;
      videoData.element = event.target;
      setSelectedVideo(videoData);
    } else {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleSelectPrevious = index => {
    // console.log(cityData[selectedCategory][index]);
    if (index >= 0) {
      const listingData = cityData[selectedCategory][index];
      let videoEl: any = document.getElementById(listingData.videos[0].videoId);
      videoEl.muted = false;
      videoEl.play();
      handleVideoSelect(
        { target: videoEl },
        selectedCategory,
        Object.assign(listingData, { index })
      );
    }
  };

  const handleSelectNext = index => {
    // console.log(cityData[selectedCategory], index);
    if (cityData[selectedCategory].length > index) {
      const listingData = cityData[selectedCategory][index];
      // console.log('handleSelectNext', listingData);
      let videoEl: any = document.getElementById(listingData.videos[0].videoId);
      videoEl.muted = false;
      videoEl.play();
      handleVideoSelect(
        { target: videoEl },
        selectedCategory,
        Object.assign(listingData, { index })
      );
    }
  };

  const handleListingClose = listingData => {
    // console.log(event.target, categoryId, videoData);
    setSelectedCategory(null);
    listingData.selected = false;
    setSelectedVideo({});
  };

  return (
    <CityContainer>
      {!selectedCategory && (
        <BackgroundWrapper>
          {/* <BackgroundImage src="/images/London.png" /> */}
          <BackgroundVideo
            src="/videos/london.mp4"
            ref={backgroundVideoRef}
            autoPlay
            loop
          />
          <FadeBackgroundImage />
        </BackgroundWrapper>
      )}
      <CityContent>
        <Header />
        <TopWrapper>
          <Fade absolute show={selectedCategory}>
            <ListingShowcase
              listing={selectedVideo}
              videoEl={videoRef.current}
              onListingClose={handleListingClose}
              onSelectPrevious={handleSelectPrevious}
              onSelectNext={handleSelectNext}
            />
          </Fade>
          {!selectedCategory && (
            <>
              <Hero cityName={city} />
              <br />
              <FiltersContainer></FiltersContainer>
            </>
          )}
        </TopWrapper>
        {Object.keys(cityData).map(category => (
          <Fade show={!selectedCategory || selectedCategory === category}>
            <VideoCategory
              category={category}
              isPlaying={!!selectedCategory}
              listings={cityData[category]}
              onVideoSelect={handleVideoSelect}
            ></VideoCategory>
          </Fade>
        ))}
      </CityContent>
    </CityContainer>
  );
};
