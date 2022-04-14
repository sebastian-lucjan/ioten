import servicesData from 'src/data/servicesData';
import Grid from 'src/components/Grid';
import { v4 as uuid } from 'uuid';
import { FaRegCheckCircle } from 'react-icons/fa';
import theme from 'src/assets/styles/theme';
import { TextCaption } from '../TextComponents';
import { Button, ImagePlaceholder, ProsList, SectionHeading, SectionParagraphs, Wrapper } from './ServicesIntro.styles';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';

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
          <Button>Wyślij wiadomość</Button>
        </div>
        <div className="services__image-container">
          <ImagePlaceholder />
        </div>
      </Wrapper>
      <Grid colors={{ lines: grayToNavyBlue }} />
    </MainSectionWrapper>
  );
}
