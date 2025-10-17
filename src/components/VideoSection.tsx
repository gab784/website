import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const VideoContainer = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  border: 1px solid #f0f0f0;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const VideoContentContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
`;

const VideoPlaceholder = styled.div<{ $show: boolean }>`
  width: 100%;
  height: 450px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px dashed #667eea;
  border-radius: 12px;
  display: ${props => props.$show ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 49%, rgba(102, 126, 234, 0.1) 50%, transparent 51%);
    animation: shimmer 2s infinite;
  }

  &:hover {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.2);
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const VideoIcon = styled.i`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  opacity: 0.8;
  color: #667eea;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const VideoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 600;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;



const VideoEmbed = styled.iframe<{ $show: boolean }>`
  width: 100%;
  height: 450px;
  border: none;
  border-radius: 12px;
  display: ${props => props.$show ? 'block' : 'none'};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    height: 300px;
  }
`;

interface VideoSectionProps {
  language: Language;
  videoId?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ language, videoId }) => {
  const t = getTranslation(language);
  const showVideo = true;

  return (
    <VideoContainer id="video">
      <Container>
        <Card>
          <Title>{t.videoSectionTitle}</Title>
          <Subtitle>{t.videoSectionSubtitle}</Subtitle>
          
          <VideoContentContainer>
            <VideoPlaceholder $show={!showVideo}>
              <VideoIcon className="fab fa-youtube" />
              <VideoTitle>{t.videoPlaceholderTitle}</VideoTitle>
            </VideoPlaceholder>
            
            <VideoEmbed
              $show={showVideo}
              src={`https://www.youtube.com/embed/RMIaadus7uc`}
              title="Juan Gabriel Cabral - Video Presentation"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </VideoContentContainer>
        </Card>
      </Container>
    </VideoContainer>
  );
};

export default VideoSection;
