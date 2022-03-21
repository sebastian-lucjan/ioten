import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { motto } from 'src/data/pageData';
import { MottoCaption, MottoParagraph, Wrapper } from './MottoInterlude.styles';

const MottoInterlude = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: lightGray }} smaller>
      <Wrapper className="motto">
        <MottoParagraph className="motto__text">{motto.text}</MottoParagraph>
        <MottoCaption className="motto__caption">{motto.caption}</MottoCaption>
      </Wrapper>
    </MainSectionWrapper>
  );
};

export default MottoInterlude;
