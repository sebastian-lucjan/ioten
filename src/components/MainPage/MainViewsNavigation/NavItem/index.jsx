import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { MdArrowBackIos } from 'react-icons/md';
import { mainView } from 'src/data/mainPage';
import useChangeMainViewIndex from 'src/hooks/useChangeMainViewIndex';
import StyledNavItem, { StyledLink } from './NavItem.styles';

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

      <TextHeading size="xs" weight="black">
        {heading}
      </TextHeading>
      <TextParagraph className="styled-nav-item__paragraph">{paragraph}</TextParagraph>
    </StyledNavItem>
  );
};

export default NavItem;
