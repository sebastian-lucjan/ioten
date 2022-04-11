import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import Grid from '../Grid';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';
import { TextCaption, TextHeading, TextParagraph } from '../TextComponents';
import Button from '../Button';
import servicesData from '../../data/servicesData';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin: auto 0;
  padding: 0 40px;
`;

export default function ServicesBenefit() {
  const {
    benefit: { caption, heading, paragraph, buttonLabel },
  } = servicesData;

  const {
    color: { darkNavy, lightGray, white },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: darkNavy }}>
      <Wrapper>
        <TextCaption color={lightGray}>{caption}</TextCaption>
        <TextHeading color={white} size="lg">
          {heading}
        </TextHeading>
        <TextParagraph color={white}>{paragraph}</TextParagraph>
        <Button text={buttonLabel} textColor={darkNavy} backgroundColor={white} type="button" />

        <Grid />
      </Wrapper>
    </MainSectionWrapper>
  );
}
