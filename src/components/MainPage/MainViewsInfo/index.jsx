import { useContext } from 'react';
import { mainView } from 'src/data/mainPage';
import MainPageContext from 'src/context/mainPageContext';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import theme from 'src/assets/styles/theme';
import { HeadingWrapper, StyledMainViewsInfo, Wrapper } from './MainViewInfo.styles';
import DataToggler from './DataToggler';

const MainViewsInfo = () => {
  const { pageIndex } = useContext(MainPageContext);

  const { heading, paragraph } = mainView[pageIndex];

  const colorCondition = pageIndex === 1 ? theme.color.white : null;

  return (
    <StyledMainViewsInfo>
      <Wrapper>
        <HeadingWrapper>
          <TextHeading color={colorCondition} as="h1" size="md">
            {heading}
          </TextHeading>
          {pageIndex === 2 ? <DataToggler /> : null}
        </HeadingWrapper>
        <TextParagraph color={colorCondition} size="sm" lh="sm" weight="light">
          {paragraph}
        </TextParagraph>
      </Wrapper>
    </StyledMainViewsInfo>
  );
};

export default MainViewsInfo;
