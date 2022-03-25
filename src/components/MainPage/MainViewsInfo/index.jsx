import { useContext } from 'react';
import { mainView } from 'src/data/mainPage';
import MainPageContext from 'src/context/mainPageContext';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { StyledMainViewsInfo, Wrapper } from './MainViewInfo.styles';

const MainViewsInfo = () => {
  const { pageIndex } = useContext(MainPageContext);

  const { heading, paragraph } = mainView[pageIndex];

  return (
    <StyledMainViewsInfo>
      <Wrapper>
        <TextHeading size="md">{heading}</TextHeading>
        <TextParagraph size="sm" lh="sm" weight="light">
          {paragraph}
        </TextParagraph>
      </Wrapper>
    </StyledMainViewsInfo>
  );
};

export default MainViewsInfo;
