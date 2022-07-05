import { MdArrowBackIos } from 'react-icons/md';
import { mainView } from 'src/data/mainPage';
import useChangeMainViewIndex from 'src/hooks/useChangeMainViewIndex';
import { useContext } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import { StyledNavItem, StyledLink, StyledTextContent, StyledHeading, StyledParagraph } from './NavItem.styles';

const NavItem = ({ type, index }) => {
  const { pageIndex } = useContext(MainPageContext);
  const handleChangeIndex = useChangeMainViewIndex();

  const {
    short: { heading, paragraph },
  } = mainView[index];

  return (
    <StyledNavItem pageIndex={pageIndex} type={type} onClick={() => handleChangeIndex(type)}>
      <StyledLink as="div" type={type}>
        <MdArrowBackIos />
      </StyledLink>

      <StyledTextContent>
        <StyledHeading type={type}>{heading}</StyledHeading>
        <StyledParagraph type={type}>{paragraph}</StyledParagraph>
      </StyledTextContent>
    </StyledNavItem>
  );
};

export default NavItem;
