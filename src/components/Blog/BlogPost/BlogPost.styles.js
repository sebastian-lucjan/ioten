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
  }
`;

export const StyledBlogPost = styled.div`
  position: relative;
  padding-top: 64px;
`;

export const BlogPostIntroWrapper = styled.div`
  position: relative;

  padding: 80px 40px 40px 40px;
  height: 40vh;
`;

export const BlogPostBodyWrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

export const PostHeading = styled(TextHeading)`
  font-size: ${({ theme }) => theme.font.size.headingMedium};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.white}; ;
`;
