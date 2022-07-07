import styled from 'styled-components';
import { TextHeading } from 'src/components/TextComponents';

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 120px;
  margin: 4rem 0 6rem 0;
  overflow: hidden;
  //filter: drop-shadow(1.3px 1px 4.1px rgba(0, 0, 0, 0.028)) drop-shadow(4.2px 3.4px 13.6px rgba(0, 0, 0, 0.042))
  //  drop-shadow(19px 15px 61px rgba(0, 0, 0, 0.07));

  img {
    border-radius: 10px;
  }

  ${({ theme }) => theme.mq.mediumMobile} {
    min-height: 180px;
  }

  ${({ theme }) => theme.mq.tablet} {
    min-height: 240px;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    min-height: 320px;
  }

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.color.darkestGray};
  }
`;

export const StyledImage = styled.div`
  img {
    filter: brightness(0.65) saturate(0.65);
    z-index: ${({ theme }) => theme.zIndex.back};
  }
`;

export const StyledBlogPost = styled.div`
  position: relative;
  padding-top: 64px;

  ${({ theme }) => theme.mq.tablet} {
    padding-top: 70px;
  } ;
`;

export const BlogPostIntroWrapper = styled.div`
  position: relative;
  height: 40vh;
  padding: 0 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
  }
`;

export const PhotoCaption = styled.p`
  margin-bottom: 4rem;
`;

export const BlogPostBodyWrapper = styled.div`
  padding: 0 40px 40px 40px;

  ${({ theme }) => theme.mq.tablet} {
    padding: 40px 120px 120px 120px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin: 0 auto;
    width: 50%;
    max-width: 900px;
    padding: 80px 40px 120px 40px;
  }
`;

export const PostHeading = styled(TextHeading)`
  font-size: ${({ theme }) => theme.font.size.paragraphBig} !important;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.white};
  letter-spacing: 1px;

  ${({ theme }) => theme.mq.bigMobile} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  }

  ${({ theme }) => theme.mq.tablet};
  font-size: ${({ theme }) => theme.font.size.headingSection}; ;
`;

export const PostCategory = styled.p`
  padding: 0.2rem 1rem;
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
  background-color: ${({ theme, category }) => theme.color.categoryColor[category]};
  border-radius: 4px;
  height: 24px;
  line-height: 24px;
  margin-right: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0.2rem 1.2rem;
    height: 32px;
    line-height: 32px;
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${({ bottomSpace }) => bottomSpace || '0px'};
`;

export const ParagraphWrapper = styled.div`
  padding: 1.6rem 0;
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  line-height: 24px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    line-height: 28px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  margin: 1rem 0;
  cursor: pointer;
  position: relative;
  display: inline;

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.green};
    position: absolute;
    bottom: -2px;
    left: 0;
  }

  color: black;

  &:hover {
    color: ${({ theme }) => theme.color.greenDark} !important;
    font-weight: bold;
    transition: 0.3s;
  }
`;

export const Code = styled.p`
  margin: 1rem 0;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: ${({ theme }) => theme.color.lightestGray};
  width: calc(100vw - 80px);
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.font.size.smallText};

  ${({ theme }) => theme.mq.tablet} {
    min-width: 400px;
    width: calc(100vw - 240px);
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: calc(44vw);
  }
`;
