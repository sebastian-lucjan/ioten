import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
  padding: 80px 40px 40px 40px;
`;

export const ContentContainer = styled.div`
  p {
    z-index: ${({ theme }) => theme.zIndex.peak};
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin: 0 auto;
    width: 50%;
  } ;
`;
