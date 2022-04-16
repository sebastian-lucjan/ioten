import servicesData from 'src/data/servicesData';
import Grid from 'src/components/Grid';
import { v4 as uuid } from 'uuid';
import { FaRegCheckCircle } from 'react-icons/fa';
import theme from 'src/assets/styles/theme';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { TextCaption } from 'src/components/TextComponents';
import Image from 'next/image';
import servicesImageIntro from 'src/assets/images/services-image-03.jpeg';
import { Button, ImageContainer, ProsList, SectionHeading, SectionParagraphs, Wrapper } from './ServicesIntro.styles';

export default function ServicesIntro() {
  const {
    gradient: { grayToNavyBlue, white },
  } = theme;
  const { servicesIntro } = servicesData;

  return (
    <MainSectionWrapper background={white}>
      <Wrapper>
        <div className="services__text-content">
          <div>
            <TextCaption>{servicesIntro.caption}</TextCaption>
            <SectionHeading as="h1">{servicesIntro.heading}</SectionHeading>
          </div>
          <div>
            <SectionParagraphs>{servicesIntro.paragraphs[0]}</SectionParagraphs>
            <SectionParagraphs>{servicesIntro.paragraphs[1]}</SectionParagraphs>
          </div>
          <ProsList>
            {servicesIntro.prosList.map((adventage) => (
              <li key={uuid()}>
                <div>
                  <FaRegCheckCircle />
                </div>
                <p>{adventage}</p>
              </li>
            ))}
          </ProsList>
          <Link Link href="/contact" as="/kontakt">
            <Button>Wyślij wiadomość</Button>
          </Link>
        </div>
        <div className="services__image-container">
          <ImageContainer>
            <Image src={servicesImageIntro} layout="fill" objectFit="cover" alt="czarna szczotka, narzędzie do sprzątania" />
          </ImageContainer>
        </div>
      </Wrapper>
      <Grid colors={{ lines: grayToNavyBlue }} />
    </MainSectionWrapper>
  );
}
