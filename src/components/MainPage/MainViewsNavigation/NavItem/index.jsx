import { MdArrowBackIos } from 'react-icons/md';
import { mainView } from 'src/data/mainPage';
import useChangeMainViewIndex from 'src/hooks/useChangeMainViewIndex';
import { StyledNavItem, StyledLink, StyledTextContent, StyledHeading, StyledParagraph } from './NavItem.styles';

const NavItem = ({ type, index }) => {
  const handleChangeIndex = useChangeMainViewIndex();

  const {
    short: { heading, paragraph },
  } = mainView[index];

  return (
    <StyledNavItem type={type} onClick={() => handleChangeIndex(type)}>
      <StyledLink type={type}>
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
