import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { IdeaButton, IdeaInterludeWrapper } from 'src/components/IdeaInterlude/IdeaInterlude.styles';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  const {
    color: { yellow },
    gradient: { yellowHaveIdea },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: yellowHaveIdea, lines: yellow }}>
      <IdeaInterludeWrapper>
        <TextHeading as="h2" size="lg" bolder className="idea-interlude__heading">
          {heading}
        </TextHeading>
        <TextParagraph className="idea-interlude__paragraph">{paragraph}</TextParagraph>
        <div className="idea-interlude__button">
          <Link href="/contact" as="/kontakt">
            <IdeaButton type="button">{button}</IdeaButton>
          </Link>
        </div>
      </IdeaInterludeWrapper>
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
