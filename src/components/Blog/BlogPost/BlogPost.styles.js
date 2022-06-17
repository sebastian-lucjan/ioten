import styled from 'styled-components';
import { TextHeading, TextParagraph } from 'src/components/TextComponents';

export const StyledParagraph = styled(TextParagraph)`
  padding: 2rem 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
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
`;

export const BlogPostIntroWrapper = styled.div`
  position: relative;
  height: 40vh;
  padding: 80px 40px 40px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const BlogPostBodyWrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

export const PostHeading = styled(TextHeading)`
  font-size: ${({ theme }) => theme.font.size.headingMedium};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.white}; ;
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

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
`;
