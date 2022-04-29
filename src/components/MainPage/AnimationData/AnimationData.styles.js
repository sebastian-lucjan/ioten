import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  height: 50vh;
  transform: scale(1);
  z-index: ${({ theme }) => theme.zIndex.peak};
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.mq.smallDesktop} {
    margin-left: 0;
    height: 60vh;
    top: unset;
    position: unset;
  }

  svg {
    width: 240px;
    transform: translateY(-80px);
    height: 100%;

    ${({ theme }) => theme.mq.tablet} {
      transform: translateY(-120px);
      height: 60vh;
      width: 400px;
    }

    ${({ theme }) => theme.mq.smallDesktop} {
      transform: translateY(-40px);
      width: 300px;
    }

    ${({ theme }) => theme.mq.desktop} {
      transform: translateY(-100px);
      height: 75vh;
      width: 350px;
    }

    ${({ theme }) => theme.mq.mediumDesktop} {
      height: 78vh;
      transform: translateY(-120px);
      width: 400px;
    }

    ${({ theme }) => theme.mq.hugeDesktop} {
      transform: translateY(-100px);
      width: 480px;
    }
  }
`;
