import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { IdeaButton } from 'src/components/IdeaInterlude/IdeaInterlude.styles';
import Grid from '../Grid';
import { InterludeWrapper } from '../Interlude/Interlude.styles';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  const {
    color: { yellow },
    gradient: { yellowHaveIdea },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: yellowHaveIdea }}>
      <InterludeWrapper>
        <TextHeading as="h2" size="lg" bolder className="services-interlude__heading">
          {heading}
        </TextHeading>

        <TextParagraph className="services-interlude__paragraph">{paragraph}</TextParagraph>
        <div className="idea-interlude__button">
          <Link href="/contact" as="/kontakt">
            <IdeaButton type="button" className="services-interlude__button">
              {button}
            </IdeaButton>
          </Link>
        </div>
      </InterludeWrapper>
      <Grid colors={{ lines: yellow }} />
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
