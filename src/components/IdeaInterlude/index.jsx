import { ideaInterlude } from 'src/data/mainPage';
import Link from 'next/link';
import styled from 'styled-components';

const StyledIdeaInterlude = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.gradient.yellow.haveIdea};

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    left: 20px;
    background-color: ${({ theme }) => theme.color.yellow};
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 2px;
    top: 0;
    right: 20px;
    background-color: ${({ theme }) => theme.color.yellow};
  }
`;

const IdeaInterlude = () => {
  const { heading, paragraph, button } = ideaInterlude;

  return (
    <StyledIdeaInterlude>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
      <Link href="/contact" as="/kontakt">
        <button type="button">{button}</button>
      </Link>
    </StyledIdeaInterlude>
  );
};

export default IdeaInterlude;
