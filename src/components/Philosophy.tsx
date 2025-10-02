import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const PhilosophyContainer = styled.section`
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
  text-align: center;
  border: 1px solid #f0f0f0;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const QuoteContainer = styled.div`
  position: relative;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 2.5rem 2rem;
  margin: 0 auto;
  max-width: 800px;
`;

const QuoteIcon = styled.i`
  font-size: 3rem;
  color: #667eea;
  margin-bottom: 1rem;
  opacity: 0.7;
`;

const Quote = styled.blockquote`
  font-size: 1.3rem;
  font-style: italic;
  color: #2c3e50;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Author = styled.h4`
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
  margin: 0;
`;

interface PhilosophyProps {
  language: Language;
}

const Philosophy: React.FC<PhilosophyProps> = ({ language }) => {
  const t = getTranslation(language);

  return (
    <PhilosophyContainer>
      <Container>
        <Card>
          <Title>{t.philosophyTitle}</Title>
          <QuoteContainer>
            <QuoteIcon className="fa fa-quote-left" aria-hidden="true" />
            <Quote>{t.philosophyQuote}</Quote>
            <Author>{t.philosophyAuthor}</Author>
          </QuoteContainer>
        </Card>
      </Container>
    </PhilosophyContainer>
  );
};

export default Philosophy;
