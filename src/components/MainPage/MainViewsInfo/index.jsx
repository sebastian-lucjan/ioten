import { useContext } from 'react';
import { mainView } from 'src/data/mainPage';
import MainPageContext from 'src/context/mainPageContext';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { StyledMainViewsInfo, Wrapper } from './MainViewInfo.styles';
import theme from '../../../assets/styles/theme';

const MainViewsInfo = () => {
  const { pageIndex } = useContext(MainPageContext);

  const { heading, paragraph } = mainView[pageIndex];

  const colorCondition = pageIndex === 1 ? theme.color.white : null;

  return (
    <StyledMainViewsInfo>
      <Wrapper>
        <TextHeading color={colorCondition} as="h2" size="md">
          {heading}
        </TextHeading>
        <TextParagraph color={colorCondition} size="sm" lh="sm" weight="light">
          {paragraph}
        </TextParagraph>
      </Wrapper>
    </StyledMainViewsInfo>
  );
};

export default MainViewsInfo;
