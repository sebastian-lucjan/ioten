import { TextHeading, TextParagraph } from 'src/components/TextComponents';
import { MdArrowBackIos } from 'react-icons/md';
import Link from 'next/link';
import { mainView } from 'src/data/mainPage';
import StyledNavItem, { StyledLink } from './NavItem.styles';

const NavItem = ({ type, index }) => {
  const {
    short: { heading, paragraph },
  } = mainView[index];

  return (
    <StyledNavItem type={type}>
      <Link href="/">
        <StyledLink type={type}>
          <MdArrowBackIos />
        </StyledLink>
      </Link>

      <TextHeading size="xs" weight="black">
        {heading}
      </TextHeading>
      <TextParagraph className="styled-nav-item__paragraph">{paragraph}</TextParagraph>
    </StyledNavItem>
  );
};

export default NavItem;
