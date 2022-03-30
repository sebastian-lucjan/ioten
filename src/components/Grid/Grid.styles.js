import styled from 'styled-components';

export const StyledGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.front};
`;

export const Line = styled.span`
  position: absolute;
  height: 100%;
  width: 1px;
  background: ${({ color }) => color};

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
