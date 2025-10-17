import React from 'react';
import { createGlobalStyle } from 'styled-components';
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

  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
`;



function App() {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="App">
      <GlobalStyle />
      <Header language={language} onLanguageChange={changeLanguage} />
      <Philosophy language={language} />
      <Skills language={language} />
      <Experience language={language} />
        <VideoSection language={language} />
      <About language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
