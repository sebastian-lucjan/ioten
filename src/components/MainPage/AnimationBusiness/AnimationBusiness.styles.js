import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 14vh;
  left: 0;
  width: 100%;
  transform: scale(0.9);
  z-index: ${({ theme }) => theme.zIndex.peak};

  svg {
    display: block;
    width: 360px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mq.tablet} {
    svg {
      width: 640px;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    top: unset;
    position: unset;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    svg {
      width: 680px;
    }
  }
  ${({ theme }) => theme.mq.hugeDesktop} {
    svg {
      width: 760px;
    }
  }

  #phone,
  #phone-background {
    cursor: pointer;
  }
`;
