import React, { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../hooks/useLanguage';
import { getTranslation } from '../data/translations';

const HobbiesSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 4rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ImageCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ImageCard}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  padding: 1.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;

  ${ImageCard}:hover & {
    transform: translateY(0);
  }
`;

const ImageTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ImageDescription = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -3rem;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

interface HobbyImage {
  src: string;
  title: string;
  description: string;
}

const hobbiesData: Record<string, HobbyImage[]> = {
  es: [
    {
      src: '/hobbies/Bici.jpg',
      title: 'Ciclismo',
      description: 'Una de mis pasiones es el ciclismo. Me ayuda a mantenerme en forma y despejar la mente mientras exploro nuevos lugares.'
    },
    {
      src: '/hobbies/703627_4765353168188_1075386012_o.jpg',
      title: 'Aventuras al aire libre',
      description: 'Disfruto de la naturaleza y las actividades al aire libre que me conectan con el mundo fuera de la tecnología.'
    },
    {
      src: '/hobbies/IMG-20220904-WA0007.jpeg',
      title: 'Momentos especiales',
      description: 'Valoro los momentos compartidos con familia y amigos, que me recuerdan la importancia del equilibrio vida-trabajo.'
    },
    {
      src: '/hobbies/IMG-20240818-WA0005.jpg',
      title: 'Explorando',
      description: 'Me encanta explorar nuevos lugares y capturar momentos únicos que inspiran mi creatividad.'
    },
    {
      src: '/hobbies/IMG-20240818-WA0136.jpg',
      title: 'Fotografía',
      description: 'La fotografía me permite ver el mundo desde diferentes perspectivas, una habilidad que aplico también en la programación.'
    },
    {
      src: '/hobbies/Papodejacare1503.jpg',
      title: 'Naturaleza',
      description: 'La conexión con la naturaleza me proporciona la tranquilidad necesaria para enfocarme en proyectos complejos.'
    }
  ],
  en: [
    {
      src: '/hobbies/Bici.jpg',
      title: 'Cycling',
      description: 'One of my passions is cycling. It helps me stay fit and clear my mind while exploring new places.'
    },
    {
      src: '/hobbies/703627_4765353168188_1075386012_o.jpg',
      title: 'Outdoor adventures',
      description: 'I enjoy nature and outdoor activities that connect me with the world outside of technology.'
    },
    {
      src: '/hobbies/IMG-20220904-WA0007.jpeg',
      title: 'Special moments',
      description: 'I value moments shared with family and friends, which remind me of the importance of work-life balance.'
    },
    {
      src: '/hobbies/IMG-20240818-WA0005.jpg',
      title: 'Exploring',
      description: 'I love exploring new places and capturing unique moments that inspire my creativity.'
    },
    {
      src: '/hobbies/IMG-20240818-WA0136.jpg',
      title: 'Photography',
      description: 'Photography allows me to see the world from different perspectives, a skill I also apply in programming.'
    },
    {
      src: '/hobbies/Papodejacare1503.jpg',
      title: 'Nature',
      description: 'Connecting with nature provides me the tranquility needed to focus on complex projects.'
    }
  ],
  pt: [
    {
      src: '/hobbies/Bici.jpg',
      title: 'Ciclismo',
      description: 'Uma das minhas paixões é o ciclismo. Me ajuda a manter a forma e limpar a mente enquanto exploro novos lugares.'
    },
    {
      src: '/hobbies/703627_4765353168188_1075386012_o.jpg',
      title: 'Aventuras ao ar livre',
      description: 'Desfruto da natureza e atividades ao ar livre que me conectam com o mundo fora da tecnologia.'
    },
    {
      src: '/hobbies/IMG-20220904-WA0007.jpeg',
      title: 'Momentos especiais',
      description: 'Valorizo momentos compartilhados com família e amigos, que me lembram da importância do equilíbrio vida-trabalho.'
    },
    {
      src: '/hobbies/IMG-20240818-WA0005.jpg',
      title: 'Explorando',
      description: 'Adoro explorar novos lugares e capturar momentos únicos que inspiram minha criatividade.'
    },
    {
      src: '/hobbies/IMG-20240818-WA0136.jpg',
      title: 'Fotografia',
      description: 'A fotografia me permite ver o mundo de diferentes perspectivas, uma habilidade que também aplico na programação.'
    },
    {
      src: '/hobbies/Papodejacare1503.jpg',
      title: 'Natureza',
      description: 'A conexão com a natureza me proporciona a tranquilidade necessária para focar em projetos complexos.'
    }
  ]
};

const Hobbies: React.FC = () => {
  const { language } = useLanguage();
  const translation = getTranslation(language);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentHobbies = hobbiesData[language] || hobbiesData.en;

  return (
    <HobbiesSection id="hobbies">
      <Container>
        <SectionTitle>{translation.hobbiesTitle}</SectionTitle>
        <Description>{translation.hobbiesDescription}</Description>
        
        <ImageGrid>
          {currentHobbies.map((hobby, index) => (
            <ImageCard key={index} onClick={() => setSelectedImage(hobby.src)}>
              <Image src={hobby.src} alt={hobby.title} />
              <ImageOverlay>
                <ImageTitle>{hobby.title}</ImageTitle>
                <ImageDescription>{hobby.description}</ImageDescription>
              </ImageOverlay>
            </ImageCard>
          ))}
        </ImageGrid>

        <Modal isOpen={!!selectedImage} onClick={() => setSelectedImage(null)}>
          {selectedImage && (
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setSelectedImage(null)}>×</CloseButton>
              <ModalImage src={selectedImage} alt="Selected hobby" />
            </ModalContent>
          )}
        </Modal>
      </Container>
    </HobbiesSection>
  );
};

export default Hobbies;
