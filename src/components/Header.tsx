import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M0,50 Q25,0 50,50 T100,50 V100 H0 Z" fill="rgba(255,255,255,0.1)"/></svg>');
    background-size: cover;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 2rem;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: auto 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 250px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
  font-size: 0.9rem;
  opacity: 0.9;

  i {
    width: 18px;
    text-align: center;
    opacity: 0.8;
  }

  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

const ProfileImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(255, 255, 255, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProfileInfo = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  opacity: 0.9;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin: 0 0 2rem 0;
  opacity: 0.8;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled.a<{ $variant?: 'primary' | 'secondary' | 'outlined' }>`
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 0.9rem;

  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-color: rgba(255, 255, 255, 0.3);
          
          &:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
          }
        `;
      case 'outlined':
        return `
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.5);
          
          &:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
          }
        `;
      default:
        return `
          background: white;
          color: #667eea;
          
          &:hover {
            background: #f8f9fa;
            transform: translateY(-2px);
          }
        `;
    }
  }}
`;

const LanguageSelector = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const LanguageButton = styled.button<{ $active?: boolean }>`
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.8rem;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const t = getTranslation(language);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeaderContainer>
      <LanguageSelector>
        <LanguageButton 
          $active={language === 'es'} 
          onClick={() => onLanguageChange('es')}
        >
          🇪🇸 ES
        </LanguageButton>
        <LanguageButton 
          $active={language === 'en'} 
          onClick={() => onLanguageChange('en')}
        >
          🇺🇸 EN
        </LanguageButton>
        <LanguageButton 
          $active={language === 'pt'} 
          onClick={() => onLanguageChange('pt')}
        >
          🇧🇷 PT
        </LanguageButton>
      </LanguageSelector>

      <Container>
        <ProfileCard>
          <ProfileImage>
            <img 
              src="/profile.png" 
              alt="Juan Gabriel Cabral - Senior Software Architect Engineer" 
            />
          </ProfileImage>
          
          <ProfileInfo>
            <Name>{t.headerName}</Name>
            <Title>{t.headerTitle}</Title>
            <Subtitle>{t.headerSubtitle}</Subtitle>
            
            <ButtonGroup>
              <Button href="/CV_ES_2025.pdf" download>
                {t.downloadCV}
              </Button>
              <Button $variant="secondary" onClick={() => scrollToSection('contact')}>
                {t.contact}
              </Button>
              <Button $variant="outlined" onClick={() => scrollToSection('video')}>
                {t.videoPresentation}
              </Button>
              <Button $variant="outlined" onClick={() => scrollToSection('experience')}>
                {t.viewExperience}
              </Button>
              <Button $variant="outlined" onClick={() => scrollToSection('skills')}>
                {t.technicalSkills}
              </Button>
            </ButtonGroup>
          </ProfileInfo>

          <ContactInfo>
            <ContactItem>
              <i className="fas fa-envelope"></i>
              <ContactLink href="mailto:cabralgabriel783@gmail.com">
                cabralgabriel783@gmail.com
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <i className="fab fa-whatsapp"></i>
              <ContactLink href="https://wa.me/5493764841142" target="_blank" rel="noopener noreferrer">
                (+54) 376 484-1142
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <i className="fas fa-map-marker-alt"></i>
              <span style={{ opacity: 0.9 }}>
                Las Tunas 10787<br />
                Posadas, Misiones
              </span>
            </ContactItem>
          </ContactInfo>
        </ProfileCard>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
