import servicesData from 'src/data/servicesData';
import Grid from 'src/components/Grid';
import { v4 as uuid } from 'uuid';
import { FaRegCheckCircle } from 'react-icons/fa';
import theme from 'src/assets/styles/theme';
import { TextCaption } from '../TextComponents';
import { Button, ImagePlaceholder, ProsList, SectionHeading, SectionParagraphs, Wrapper } from './ServicesIntro.styles';

export default function ServicesIntro() {
  const {
    gradient: { grayToNavyBlue },
  } = theme;
  const { servicesIntro } = servicesData;

  return (
    <Wrapper>
      <div className="services__text-content">
        <TextCaption>{servicesIntro.caption}</TextCaption>
        <SectionHeading as="h1">{servicesIntro.heading}</SectionHeading>

        <SectionParagraphs>{servicesIntro.paragraphs[0]}</SectionParagraphs>
        <SectionParagraphs>{servicesIntro.paragraphs[1]}</SectionParagraphs>

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
      <ImagePlaceholder />
      <Grid colors={{ lines: grayToNavyBlue }} />
    </Wrapper>
  );
}
