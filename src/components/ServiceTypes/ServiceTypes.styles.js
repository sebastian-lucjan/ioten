import styled from 'styled-components';

export const ImagePlaceholder = styled.div`
  width: 100%;
  background-color: lightgrey;
  height: 40vh;

  ${({ theme }) => theme.mq.desktop} {
    height: 80vh;
  }
`;

export const StyledHeadingWrapper = styled.div`
  & > * {
    margin: 2rem 0;
  }
`;

export const StyledContentWrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.top};

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    padding-left: 20px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding-left: 20px;
  } ;
`;

export const Wrapper = styled.div`
  position: relative;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 80px 100px;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 80px 180px;
  } ;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 20px 40px 0 0;
  width: 100%;
  height: 80vh;
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    padding-right: 20px;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding-right: 80px;
  } ;
`;
