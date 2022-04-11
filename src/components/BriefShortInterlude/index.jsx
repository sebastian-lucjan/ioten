import contactData from 'src/data/contactData';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { IdeaInterludeWrapper } from 'src/components/IdeaInterlude/IdeaInterlude.styles';
import Grid from 'src/components/Grid';
import ContactButton from 'src/components/ContactMainView/ContactButton';

export default function BriefShortInterlude() {
  const { heading, paragraph, button } = contactData.briefShortInterlude;

  const {
    color: { white, darkestGray, black },
    gradient: { blackBrief },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: blackBrief }}>
      <IdeaInterludeWrapper>
        <TextHeading color={white} as="h2" size="lg" bolder className="brief-interlude__heading">
          {heading}
        </TextHeading>

        <TextParagraph color={white} className="brief-interlude__paragraph">
          {paragraph}
        </TextParagraph>
        <div className="brief-interlude__button">
          <Link href="/valuation" as="/wycena-projekt">
            <a>
              <ContactButton title={button} textColor={darkestGray} backgroundColor={white} />
            </a>
          </Link>
        </div>
      </IdeaInterludeWrapper>
      <Grid colors={{ lines: black }} />
    </MainSectionWrapper>
  );
}
