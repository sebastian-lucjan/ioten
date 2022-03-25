// import { useContext } from 'react';
// import MainPageContext from 'src/context/mainPageContext';
import StyledMainViewsNavigation from './MainViewsNavigation.styles';
import NavItem from './NavItem';

const MainViewsNavigation = () => {
  // const { pageIndex } = useContext(MainPageContext);

  // const calculateMainPagesIndexes = (pageIndex) => {};

  return (
    <StyledMainViewsNavigation>
      <NavItem type="prev" index={2} />
      <NavItem type="next" index={1} />
    </StyledMainViewsNavigation>
  );
};

export default MainViewsNavigation;
