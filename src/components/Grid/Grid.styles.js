import styled from 'styled-components';

const Line = styled.span`
  position: absolute;
  top: 0;
  height: 100%;
  width: 1px;
  background: ${({ color }) => color};
  z-index: ${({ theme }) => theme.zIndex.front};

  &:first-child,
  &:last-child {
    width: 2px;
  }

  &:first-child {
    position: absolute;
    top: 0;
    left: 20px;
  }

  &:nth-child(2) {
    display: none;
    position: absolute;
    top: 0;
    left: calc(25% + 10px);

    ${({ theme }) => theme.mq.smallDesktop} {
      display: block;
    }
  }
  &:nth-child(3) {
    display: none;
    position: absolute;
    top: 0;
    left: calc(50%);

    ${({ theme }) => theme.mq.tablet} {
      display: block;
    }
  }
  &:nth-child(4) {
    display: none;
    position: absolute;
    top: 0;
    left: calc(75% - 10px);

    ${({ theme }) => theme.mq.smallDesktop} {
      display: block;
    }
  }

  &:last-child {
    position: absolute;
    top: 0;
    right: 20px;
  }
`;

export default Line;
