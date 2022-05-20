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
    width: 300px;
    margin: 0 auto;
  }

  ${({ theme }) => theme.mq.mediumMobile} {
    svg {
      width: 360px;
    }
  }

  ${({ theme }) => theme.mq.landscape} {
    svg {
      width: 180px;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    svg {
      width: 640px;
    }
  }

  @media (orientation: landscape) and (min-width: 768px) and (max-width: 1023px) {
    svg {
      width: 360px;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    top: unset;
    position: unset;

    svg {
      width: 100%;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    svg {
      width: 500px;
    }
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
