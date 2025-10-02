import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';
import { experiences } from '../data/portfolio';

const ExperienceContainer = styled.section`
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

const Timeline = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div<{ $index: number }>`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  width: 100%;

  &:nth-child(${props => props.$index + 1}) {
    flex-direction: ${props => props.$index % 2 === 0 ? 'row-reverse' : 'row'};

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
`;

const TimelineContent = styled.div<{ $index: number }>`
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: calc(50% - 30px);
  position: relative;
  border: 1px solid #f0f0f0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$index % 2 === 0 ? 'left: -10px' : 'right: -10px'};
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${props => props.$index % 2 === 0 
      ? 'border-right-color: white' 
      : 'border-left-color: white'};

    @media (max-width: 768px) {
      left: -10px;
      right: auto;
      border-left-color: transparent;
      border-right-color: white;
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 60px);
    margin-left: 40px;
  }
`;

const TimelineMarker = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

const CompanyName = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

const Position = styled.h4`
  font-size: 1.1rem;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const Period = styled.span`
  font-size: 0.9rem;
  color: #666;
  background: #f8f9fa;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const Description = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechnologyTag = styled.span`
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

interface ExperienceProps {
  language: Language;
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
  const t = getTranslation(language);

  return (
    <ExperienceContainer id="experience">
      <Container>
        <Card>
          <Title>{t.experienceTitle}</Title>
          <Timeline>
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} $index={index}>
                <TimelineMarker />
                <TimelineContent $index={index}>
                  <CompanyName>{exp.company}</CompanyName>
                  <Position>{exp.position}</Position>
                  <Period>{exp.period}</Period>
                  <Description>{exp.description}</Description>
                  <TechnologiesContainer>
                    {exp.technologies.map((tech, techIndex) => (
                      <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
                    ))}
                  </TechnologiesContainer>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Card>
      </Container>
    </ExperienceContainer>
  );
};

export default Experience;
