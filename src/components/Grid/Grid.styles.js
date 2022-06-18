import styled from 'styled-components';

const Line = styled.span`
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background: ${({ color }) => color};
  z-index: ${({ theme }) => theme.zIndex.top};
  transition: background 1s ease;

  &:first-child,
  &:last-child {
    width: 2px;
  }

  &:first-child {
    left: 20px;
  }

  &:nth-child(2) {
    display: none;
    left: calc(25% + 10px);

    ${({ theme }) => theme.mq.smallDesktop} {
      display: block;
    }
  }
  &:nth-child(3) {
    display: none;
    left: calc(50%);

    ${({ theme }) => theme.mq.tablet} {
      display: block;
    }
  }
  &:nth-child(4) {
    display: none;
    left: calc(75% - 10px);

    ${({ theme }) => theme.mq.smallDesktop} {
      display: block;
    }
  }

  &:last-child {
    right: 20px;
  }
`;

export default Line;
