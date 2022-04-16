import Grid from 'src/components/Grid';
import theme from 'src/assets/styles/theme';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { v4 as uuid } from 'uuid';
import { blogPosts } from 'src/data/blogData';
import BlogPost from '../BlogPostAll/BlogPost';
import { BlogPostContainer, StyledBlogPostAll } from './BlogPostAll.styles';

export default function BlogPostsAll() {
  const {
    color: { white },
    gradient: { grayToYellow, transparentToYellow },
  } = theme;

  return (
    <MainSectionWrapper background={white}>
      <StyledBlogPostAll>
        {/* <BlogNavigation/> */}
        {/* <BlogPost /> */}
        <BlogPostContainer>
          {blogPosts.map((post, index) => (
            <BlogPost key={uuid()} post={post} index={index} />
          ))}
        </BlogPostContainer>
        <Grid colors={{ lines: grayToYellow, innerLines: transparentToYellow }} />
      </StyledBlogPostAll>
    </MainSectionWrapper>
  );
}

// todo: do navigations when I'll have a few posts to couples of categories
