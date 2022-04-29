import { MdArrowBackIos } from 'react-icons/md';
import { mainView } from 'src/data/mainPage';
import useChangeMainViewIndex from 'src/hooks/useChangeMainViewIndex';
import { useContext } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import theme from 'src/assets/styles/theme';
import { StyledNavItem, StyledLink, StyledTextContent, StyledHeading, StyledParagraph } from './NavItem.styles';

const NavItem = ({ type, index }) => {
  const { pageIndex } = useContext(MainPageContext);
  const handleChangeIndex = useChangeMainViewIndex();

  const {
    short: { heading, paragraph },
  } = mainView[index];

  const colorCondition = pageIndex === 1 ? theme.color.lightestGray : null;

  return (
    <StyledNavItem type={type} onClick={() => handleChangeIndex(type)}>
      <StyledLink setColor={colorCondition} type={type}>
        <MdArrowBackIos />
      </StyledLink>

      <StyledTextContent>
        <StyledHeading color={colorCondition} type={type}>
          {heading}
        </StyledHeading>
        <StyledParagraph color={colorCondition} type={type}>
          {paragraph}
        </StyledParagraph>
      </StyledTextContent>
    </StyledNavItem>
  );
};

export default NavItem;
