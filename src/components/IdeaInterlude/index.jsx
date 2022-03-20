import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { Wrapper, IdeaHeading, IdeaParagraph, IdeaButton } from './IdeaInterlude.styles';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  return (
    <MainSectionWrapper colors={{ isGradient: true, bgColor: 'yellowHaveIdea', linesColor: 'yellow' }}>
      <Wrapper>
        <IdeaHeading>{heading}</IdeaHeading>
        <IdeaParagraph>{paragraph}</IdeaParagraph>
        <Link href="/contact" as="/kontakt">
          <IdeaButton type="button">{button}</IdeaButton>
        </Link>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
