import React from 'react';
import styled from 'styled-components';
import { Language } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const ContactContainer = styled.section`
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
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoItem = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
  }
`;

const ContactInfoIcon = styled.i`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
  opacity: 0.9;
`;

const ContactInfoTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.9;
`;

const ContactInfoValue = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
  line-height: 1.4;
`;

const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ContactItem = styled.div`
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ContactText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const MapContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  height: 300px;
  margin-bottom: 1rem;
  border: 2px solid #e9ecef;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ScheduleButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    color: white;
  }
`;

const CalendlyContainer = styled.div`
  border-radius: 12px;
  overflow: hidden;
  height: 300px;
  border: 2px solid #e9ecef;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

interface ContactProps {
  language: Language;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const t = getTranslation(language);

  return (
    <ContactContainer id="contact">
      <Container>
        <Card>
          <Title>{t.contactTitle}</Title>
          <Description>{t.contactDescription}</Description>
          
          <ContactInfoGrid>
            <ContactInfoItem>
              <ContactInfoIcon className="fas fa-map-marker-alt" />
              <ContactInfoTitle>{t.addressLabel}</ContactInfoTitle>
              <ContactInfoValue>
                Las Tunas 10787<br />
                Posadas, Misiones<br />
                Argentina
              </ContactInfoValue>
            </ContactInfoItem>

            <ContactInfoItem>
              <ContactInfoIcon className="fab fa-whatsapp" />
              <ContactInfoTitle>{t.whatsappLabel}</ContactInfoTitle>
              <ContactInfoValue>
                <ContactLink href="https://wa.me/5493764841142" target="_blank" rel="noopener noreferrer">
                  +54 9 376 484-1142
                </ContactLink>
              </ContactInfoValue>
            </ContactInfoItem>

            <ContactInfoItem>
              <ContactInfoIcon className="fas fa-envelope" />
              <ContactInfoTitle>{t.emailLabel}</ContactInfoTitle>
              <ContactInfoValue>
                <ContactLink href="mailto:cabralgabriel783@gmail.com">
                  cabralgabriel783@gmail.com
                </ContactLink>
              </ContactInfoValue>
            </ContactInfoItem>
          </ContactInfoGrid>

          <ContactGrid>
            <ContactItem>
              <ContactTitle>{t.mapTitle}</ContactTitle>
              <ContactText>{t.mapDescription}</ContactText>
              <MapContainer>
                <MapIframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221.38428789477993!2d-55.985902089993054!3d-27.402292923524094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1759438812020!5m2!1ses!2sar"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </MapContainer>
            </ContactItem>

            <ContactItem>
              <ContactTitle>{t.scheduleTitle}</ContactTitle>
              <ContactText>{t.scheduleDescription}</ContactText>
              <CalendlyContainer>
                <div>
                  <i className="fas fa-calendar-alt" style={{ fontSize: '3rem', color: '#667eea', marginBottom: '1rem' }}></i>
                  <ScheduleButton 
                    href="https://calendly.com/cabralgabriel783" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t.scheduleButton}
                  </ScheduleButton>
                </div>
              </CalendlyContainer>
            </ContactItem>
          </ContactGrid>
        </Card>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
