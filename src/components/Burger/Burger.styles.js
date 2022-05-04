import styled from 'styled-components';

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  align-items: center;
  top: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 20px 30px;
  z-index: ${({ theme }) => theme.zIndex['10']};
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2.1rem;
    height: 0.25rem;
    background: ${({ theme, isWhite, isOpen }) => (isWhite && !isOpen ? theme.color.white : theme.color.darkestGray)};
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;
  }

  div:nth-child(1) {
    ${({ isOpen }) => (isOpen ? 'transform: rotate(45deg);' : null)}
  }
  div:nth-child(2) {
    ${({ isOpen }) => (isOpen ? 'background-color: transparent;' : null)}
  }
  div:nth-child(3) {
    ${({ isOpen }) => (isOpen ? 'transform: rotate(-45deg);' : null)}
  }
`;

export default StyledBurger;
