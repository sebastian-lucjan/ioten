import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  return (
    <MainSectionWrapper colors={{ isGradient: true, bgColor: 'yellowHaveIdea', linesColor: 'yellow' }}>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <Link href="/contact" as="/kontakt">
        <button type="button">{button}</button>
      </Link>
    </MainSectionWrapper>
  );
};

export default IdeaInterlude;
