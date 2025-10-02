import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const AboutContainer = styled.section`
  padding: 4rem 0;
  background: white;
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
  border: 1px solid #f0f0f0;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

interface AboutProps {
  language: Language;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const t = getTranslation(language);

  return (
    <AboutContainer id="about">
      <Container>
        <Card>
          <Title>{t.aboutTitle}</Title>
          <Content>
            <Description>{t.aboutDescription1}</Description>
            <Description>{t.aboutDescription2}</Description>
          </Content>
        </Card>
      </Container>
    </AboutContainer>
  );
};

export default About;
