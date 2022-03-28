import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { motto } from 'src/data/pageData';
import IRingFront from 'src/assets/images/i-ring-front-lg.svg';
import IRingBack from 'src/assets/images/i-ring-back-lg.svg';
import styled from 'styled-components';
import MottoCaption from './MottoInterlude.styles';
import { TextParagraph, TextWrapper } from '../TextComponents';

const StyledMediumRing = styled.div`
  & * {
    position: absolute;
    top: 20%;
    right: 0.4rem;
  }
  *:nth-child(1) {
    z-index: ${({ theme: { zIndex } }) => zIndex.top};
  }
`;

const MottoInterlude = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: lightGray }} smaller>
      <TextWrapper className="motto">
        <TextParagraph weight="bold" className="motto__text">
          {motto.text}
        </TextParagraph>
        <MottoCaption className="motto__caption">{motto.caption}</MottoCaption>
      </TextWrapper>
      <StyledMediumRing>
        <IRingFront />
        <IRingBack />
      </StyledMediumRing>
    </MainSectionWrapper>
  );
};

export default MottoInterlude;
