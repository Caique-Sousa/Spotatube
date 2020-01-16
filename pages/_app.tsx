import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

export interface ITheme {
  textBlack: string;
  niceBlack: string;
  niceWhite: string;
  darkBlue: string;
  primary: string;
  highlightPrimary: string;
  secondary: string;
  highlightSecondary: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  textBlack: '#001F3F',
  niceBlack: '#0f0101',
  niceWhite: '#F2F2F2',
  darkBlue: '#002A4D',
  primary: '#32B496',
  highlightPrimary: '#32B496',
  secondary: 'rgba(8, 8, 8, 0.5)',
  highlightSecondary: 'rgba(8, 8, 8, 0.5)'
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  @font-face {
    font-family: 'GothamMedium';
    src: url('/fonts/Gotham-Medium.otf');
    src: url('/fonts/Gotham-Medium.eot?#iefix') format('embedded-opentype'), url('/fonts/Gotham-Medium.woff') format('woff'), url('/fonts/Gotham-Medium.ttf') format('truetype'), url('/fonts/Gotham-Medium.svg#7510147900d23fa3ad697e74bf146ea2') format('svg');
    font-style: normal;
    /*font-weight: 200;*/
    font-weight: 600;
  }

  @font-face {
    font-family: 'GothamBold';
    src: url('/fonts/Gotham-Bold.otf');
    src: url('/fonts/Gotham-Bold.eot?#iefix') format('embedded-opentype'), url('/fonts/Gotham-Bold.woff') format('woff'), url('/fonts/Gotham-Bold.ttf') format('truetype'), url('/fonts/Gotham-Bold.svg#6a327a217ddd10461b1acdc4d224fee0') format('svg');
    font-style: normal;
    /*font-weight: 200;*/
    font-weight: 700;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0 auto;
    color: ${props => props.theme.niceWhite}; 
    font-family: 'GothamMedium';
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>GraphQL Job Board</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
