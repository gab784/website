import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';
import { skills } from '../data/portfolio';

const SkillsContainer = styled.section`
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

const SkillsGrid = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillName = styled.span`
  font-weight: 600;
  color: #2c3e50;
  font-size: 1rem;
`;

const SkillYears = styled.span`
  font-size: 0.9rem;
  color: #666;
  background: #f8f9fa;
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled.div<{ $width: number; $animated: boolean }>`
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  transition: width 1.5s ease-out;
  width: ${props => props.$animated ? props.$width : 0}%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    animation: ${props => props.$animated ? 'shimmer 2s infinite' : 'none'};
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

interface SkillsProps {
  language: Language;
}

const Skills: React.FC<SkillsProps> = ({ language }) => {
  const t = getTranslation(language);
  const [animated, setAnimated] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [animated]);

  return (
    <SkillsContainer id="skills" ref={skillsRef}>
      <Container>
        <Card>
          <Title>{t.skillsTitle}</Title>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillItem key={index}>
                <SkillHeader>
                  <SkillName>{skill.name}</SkillName>
                  <SkillYears>{skill.years}</SkillYears>
                </SkillHeader>
                <ProgressBarContainer>
                  <ProgressBarFill 
                    $width={skill.percentage} 
                    $animated={animated}
                  />
                </ProgressBarContainer>
              </SkillItem>
            ))}
          </SkillsGrid>
        </Card>
      </Container>
    </SkillsContainer>
  );
};

export default Skills;
