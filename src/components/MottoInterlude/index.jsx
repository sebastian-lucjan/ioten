import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { motto } from 'src/data/pageData';
import IRingFront from 'src/assets/images/i-ring-front-lg.svg';
import IRingBack from 'src/assets/images/i-ring-back-lg.svg';
import styled from 'styled-components';
import Grid from 'src/components/Grid';
import { MottoCaption, MottoParagraph, MottoWrapper } from './MottoInterlude.styles';

const StyledMediumRing = styled.div`
  & * {
    position: absolute;
    top: 20%;
    right: 0.4rem;
  }
  *:nth-child(1) {
    z-index: ${({ theme: { zIndex } }) => zIndex.peak};
  }
`;

const MottoInterlude = () => {
  const {
    color: { white },
  } = theme;

  return (
    <MainSectionWrapper background={white} smaller>
      <MottoWrapper>
        <MottoParagraph weight="bold" className="motto__text">
          {motto.text}
        </MottoParagraph>
        <MottoCaption className="motto__caption">{motto.caption}</MottoCaption>
      </MottoWrapper>

      <Grid />

      <StyledMediumRing>
        <IRingFront />
        <IRingBack />
      </StyledMediumRing>
    </MainSectionWrapper>
  );
};

export default MottoInterlude;
