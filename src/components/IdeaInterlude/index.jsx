import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { IdeaWrapper, IdeaHeading, IdeaButton } from './IdeaInterlude.styles';
import { Paragraph } from '../TextComponents';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  const {
    color: { yellow },
    gradient: { yellowHaveIdea },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: yellowHaveIdea, lines: yellow }}>
      <IdeaWrapper>
        <IdeaHeading>{heading}</IdeaHeading>
        <Paragraph>{paragraph}</Paragraph>
        <Link href="/contact" as="/kontakt">
          <IdeaButton type="button">{button}</IdeaButton>
        </Link>
      </IdeaWrapper>
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
