import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { blogData } from 'src/data/blogData';
import { TextCaption } from 'src/components/TextComponents';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import Grid from 'src/components/Grid';
import BlogPost from 'src/components/Blog/BlogPostAll/BlogPostLink';
import { useContext } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import { BlogIntroHeading, BlogPostsContainer, StyledLink, WrapperBlogShort } from './BlogShort.styles';

const BlogShort = () => {
  const { highlightedPosts } = useContext(MainPageContext);

  const {
    color: { white },
    gradient: { grayToYellow, yellowTransparentGray },
  } = theme;

  const { category, heading, blogLink } = blogData.intro;

  return (
    <MainSectionWrapper background={white}>
      <WrapperBlogShort short>
        <TextCaption>{category}</TextCaption>
        <BlogIntroHeading>{heading}</BlogIntroHeading>
        <Link href="/blog">
          <StyledLink as="div">{blogLink}</StyledLink>
        </Link>
        <BlogPostsContainer>
          {highlightedPosts.map((post) => (
            <BlogPost key={uuid()} post={post} />
          ))}
        </BlogPostsContainer>
        {/* <Image loader={() => 'myLoader'} src="me.png" alt="Picture of the author" width={500} height={500} /> */}
      </WrapperBlogShort>
      <Grid colors={{ lines: grayToYellow, innerLines: yellowTransparentGray }} />
    </MainSectionWrapper>
  );
};

export default BlogShort;
