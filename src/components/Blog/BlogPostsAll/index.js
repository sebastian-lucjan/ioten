import Grid from 'src/components/Grid';
import theme from 'src/assets/styles/theme';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { useContext } from 'react';
import { BlogContext } from 'pages/blog';
import BlogPost from '../BlogPostAll/BlogPostLink';
import { BlogPostContainer, StyledBlogPostAll } from './BlogPostAll.styles';

export default function BlogPostsAll() {
  const blogPosts = useContext(BlogContext);

  const {
    color: { white },
    gradient: { grayToYellow, transparentToYellow },
  } = theme;

  return (
    <MainSectionWrapper background={white}>
      <StyledBlogPostAll>
        {/* <BlogNavigation/> */}
        {/* <BlogPostLink /> */}
        <BlogPostContainer>
          {blogPosts.map((post, index) => (
            <BlogPost key={post.sys.id} post={post} index={index} />
          ))}
        </BlogPostContainer>
        <Grid colors={{ lines: grayToYellow, innerLines: transparentToYellow }} />
      </StyledBlogPostAll>
    </MainSectionWrapper>
  );
}

// todo: do navigations when I'll have a few posts to couples of categories
