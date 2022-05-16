import styled from 'styled-components';
import BlogPostsAll from './BlogPostsAll';
import BlogHeader from './BlogHeader';

const StyledBlog = styled.div``;

export default function Blog({ setRef }) {
  return (
    <StyledBlog>
      <BlogHeader setRef={setRef} />
      <BlogPostsAll />
    </StyledBlog>
  );
}
