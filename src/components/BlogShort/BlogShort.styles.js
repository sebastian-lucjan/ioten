import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

export const WrapperBlogShort = styled(({ short, ...props }) => <TextWrapper short={short} {...props} />)`
  ${({ theme }) => theme.mq.tablet} {
    padding: 0 10vw;
  } ;
`;

export const ImagePlaceholder = styled.div`
  height: 200px;
  width: 100%;
  background-color: lightgrey;
  margin: 1rem 0;
`;

export const BlogPostsContainer = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    display: flex;
    //flex-basis: 30%;
  } ;
`;

export const StyledPost = styled.div`
  margin: 4rem 0;

  p {
    //control all inside paragraphs
    margin: 2rem 0 0 0;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 30%;
    margin: 0 5% 4rem 0;

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
