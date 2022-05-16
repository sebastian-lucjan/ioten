import styled from 'styled-components';
import BlogPostsAll from './BlogPostsAll';
import BlogHeader from './BlogHeader';

const StyledBlog = styled.div``;

export default function Blog() {
  return (
    <StyledBlog>
      <BlogHeader />
      <BlogPostsAll />
    </StyledBlog>
  );
}
