import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';
import { blogData, blogPosts } from 'src/data/blogData';
import { TextCaption, TextHeading, TextWrapper } from 'src/components/TextComponents';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';
import { StyledLink } from './BlogShort.styles';
import BlogPost from './BlogPost';

const BlogShort = () => {
  const {
    color: { white },
    gradient: { grayToYellow },
  } = theme;

  const { category, heading, blogLink } = blogData.intro;

  return (
    <MainSectionWrapper colors={{ background: white, lines: grayToYellow }}>
      <TextWrapper short>
        <TextCaption>{category}</TextCaption>
        <TextHeading size="md">{heading}</TextHeading>
        <Link href="/blog">
          <StyledLink>{blogLink}</StyledLink>
        </Link>
        {blogPosts.map((post) => (
          <BlogPost key={uuid()} post={post} />
        ))}
        {/* <Image loader={() => 'myLoader'} src="me.png" alt="Picture of the author" width={500} height={500} /> */}
      </TextWrapper>
    </MainSectionWrapper>
  );
};

export default BlogShort;
