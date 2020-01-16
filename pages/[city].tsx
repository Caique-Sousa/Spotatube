import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FiltersContainer from '../components/FiltersContainer';
import VideoContegory from '../components/VideoContegory';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styled from 'styled-components';

const categories = [
  {
    id: 1,
    display: 'Rooms in 2 bed aprtments',
    listints: [
      {
        id: 1,
        youtubeLink: 'https://www.youtube.com/watch?v=uGdHxBkezoM&t=3s',
        title: 'Become a Spotahome Homechecker - Freelance Photography Jobs'
      }
    ]
  },
  {
    id: 2,
    display: '2 bed House',
    listints: [
      {
        id: 2,
        youtubeLink: 'https://www.youtube.com/watch?v=uGdHxBkezoM&t=3s',
        title: 'Freelance Photography Jobs'
      },
      {
        id: 3,
        youtubeLink: 'https://www.youtube.com/watch?v=uGdHxBkezoM&t=3s',
        title: 'Asdfds fdsa - Freelance Photography Jobs'
      }
    ]
  }
];

const CityContainer = styled.div`
  position: relative;
  height: 100%;
  background: ${props => props.theme.niceBlack};
`;

const CityContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px 36px;
  box-sizing: border-box;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
`;

const BackgroundImage = styled.img`
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

export default () => {
  const router = useRouter();
  const { city } = router.query;
  return (
    <CityContainer>
      <BackgroundWrapper>
        <BackgroundImage src="/images/London.png" />
        <FadeBackgroundImage />
      </BackgroundWrapper>
      <CityContent>
        <Header />
        <Hero cityName={city} />
        <br />
        <FiltersContainer></FiltersContainer>
        {categories.map(category => (
          <VideoContegory category={category}></VideoContegory>
        ))}
      </CityContent>
    </CityContainer>
  );
};
