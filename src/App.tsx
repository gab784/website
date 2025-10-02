import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useLanguage } from './hooks/useLanguage';
import Header from './components/Header';
import Philosophy from './components/Philosophy';
import VideoSection from './components/VideoSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  /* Font Awesome Icons */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  const { language, changeLanguage } = useLanguage();

  // You can set a YouTube video ID here when ready
  // const youtubeVideoId = 'YOUR_VIDEO_ID_HERE';

  return (
    <AppContainer>
      <GlobalStyle />
      <Header language={language} onLanguageChange={changeLanguage} />
      <MainContent>
        <Philosophy language={language} />
        <VideoSection language={language} /* videoId={youtubeVideoId} */ />
        <Skills language={language} />
        <Experience language={language} />
        <About language={language} />
        <Contact language={language} />
      </MainContent>
      <Footer language={language} />
    </AppContainer>
  );
}

export default App;
