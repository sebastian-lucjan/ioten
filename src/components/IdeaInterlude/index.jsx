import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import IdeaButton from './IdeaInterlude.styles';
import { TextHeading, TextParagraph, TextWrapper } from '../TextComponents';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  const {
    color: { yellow },
    gradient: { yellowHaveIdea },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: yellowHaveIdea, lines: yellow }}>
      <TextWrapper fullHeight>
        <TextHeading as="h2" size="lg" bolder>
          {heading}
        </TextHeading>
        <TextParagraph>{paragraph}</TextParagraph>
        <Link href="/contact" as="/kontakt">
          <IdeaButton type="button">{button}</IdeaButton>
        </Link>
      </TextWrapper>
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
