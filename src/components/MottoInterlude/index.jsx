import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { motto } from 'src/data/pageData';
import MottoCaption from './MottoInterlude.styles';
import { Paragraph, TextWrapper } from '../TextComponents';

const MottoInterlude = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: lightGray }} smaller>
      <TextWrapper className="motto">
        <Paragraph fontWeight="bold" className="motto__text">
          {motto.text}
        </Paragraph>
        <MottoCaption className="motto__caption">{motto.caption}</MottoCaption>
      </TextWrapper>
    </MainSectionWrapper>
  );
};

export default MottoInterlude;
