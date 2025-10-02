import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 3rem 0 2rem 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div``;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
`;

interface FooterProps {
  language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = getTranslation(language);

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <Logo>Juan Gabriel Cabral</Logo>
          </FooterSection>
          
          <FooterSection>
            <Description>{t.footerDescription}</Description>
          </FooterSection>
          
          <FooterSection>
            <SocialLinks>
              <SocialLink href="https://linkedin.com/in/juan-gabriel-cabral" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </SocialLink>
              <SocialLink href="https://github.com/juan-gabriel-cabral" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </SocialLink>
              <SocialLink href="mailto:cabralgabriel783@gmail.com">
                <i className="fas fa-envelope"></i>
              </SocialLink>
              <SocialLink href="https://wa.me/5493764841142" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </SocialLink>
            </SocialLinks>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          © {new Date().getFullYear()} Juan Gabriel Cabral. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
