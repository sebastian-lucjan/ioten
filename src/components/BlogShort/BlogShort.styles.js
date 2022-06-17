import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

export const WrapperBlogShort = styled(({ short, ...props }) => <TextWrapper short={short} {...props} />)`
  ${({ theme }) => theme.mq.tablet} {
    padding: 10vw;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    padding: 10vw 15vw;
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    padding: 10vw 20vw;
  }
`;

export const StyledImage = styled.div`
  height: 300px;
  width: 100%;
  position: relative;
  margin: 1rem 0;
`;

export const BlogIntroHeading = styled.h2`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.top};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-weight: normal;
  font-size: ${({ theme }) => theme.font.size.headingMedium};
  ${({ color }) => (color ? `color: ${color}` : '')} //passed color
  
  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSection};
  } ;
`;

export const BlogPostsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
  } ;
`;

export const StyledPost = styled.div`
  width: 100%;
  cursor: pointer;
  margin: 4rem 0;

  p {
    //control all inside paragraphs
    margin: 2rem 0 0 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 30%;
    margin: 0 0 4rem 0;

    &:last-child {
      margin-right: 0;
    }
  } ;
`;

export const StyledLink = styled.a`
  position: relative;
  margin: 2rem 0 4rem;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.smallText};

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 1px;
    width: 100%;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.color.black};
    z-index: 100;
  }
`;
