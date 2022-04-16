import Link from 'next/link';
import data404 from 'src/data/404data';
import { Styled404Info, StyledH1, StyledLink, StyledParagraph } from './FourOneFour.styles';

const FourOneFourInfo = () => {
  const { heading, paragraphs, cta } = data404;

  return (
    <Styled404Info>
      <StyledH1>{heading}</StyledH1>
      <StyledParagraph>{paragraphs[0]}</StyledParagraph>
      <StyledParagraph>{paragraphs[1]}</StyledParagraph>
      <Link href={cta.href}>
        <StyledLink>{cta.text}</StyledLink>
      </Link>
    </Styled404Info>
  );
};

export default FourOneFourInfo;
