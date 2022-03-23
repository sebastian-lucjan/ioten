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
  z-index: ${({ theme }) => theme.zIndex.highest};

  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.color.darkestGray};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

export default StyledBurger;
