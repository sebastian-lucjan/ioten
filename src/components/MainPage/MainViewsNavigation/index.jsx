import { useContext } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import calculateIndex from 'src/helpers/calculateMainPagesIndexes';
import StyledMainViewsNavigation from './MainViewsNavigation.styles';
import NavItem from './NavItem';

const MainViewsNavigation = () => {
  const { pageIndex } = useContext(MainPageContext);

  return (
    <StyledMainViewsNavigation>
      <NavItem type="prev" index={calculateIndex(pageIndex, 'prev')} />
      <NavItem type="next" index={calculateIndex(pageIndex, 'next')} />
    </StyledMainViewsNavigation>
  );
};

export default MainViewsNavigation;
