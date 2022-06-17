import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import theme from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import {
  BlogPostBodyWrapper,
  BlogPostIntroWrapper,
  ImageWrapper,
  PostHeading,
  StyledBlogPost,
  StyledImage,
  StyledParagraph,
} from './BlogPost.styles';

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      return (
        <ImageWrapper>
          <Image src={`https:${data.target.fields.file.url}`} layout="fill" objectFit="cover" />
        </ImageWrapper>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <StyledParagraph>{children}</StyledParagraph>;
    },
  },
};

export default function BlogPost({ post }) {
  const {
    coverImage,
    title,
    // category: [postCategory],
    blogPostBody,
  } = post.fields;

  const {
    gradient: { grayToYellow },
  } = theme;

  return (
    <StyledBlogPost>
      <BlogPostIntroWrapper>
        {/* <Image priority src={`https:${url}`} layout="fill" objectFit="cover" alt="czarna szczotka, narzędzie do sprzątania" /> */}
        <StyledImage>
          <Image src={`https:${coverImage.fields.file.url}`} layout="fill" objectFit="cover" />
        </StyledImage>
        <PostHeading>{title}</PostHeading>
        {/* <Grid colors={{ lines: lightGray, innerLines: grayTransparentGray }} /> */}
      </BlogPostIntroWrapper>
      <BlogPostBodyWrapper>
        <div>{documentToReactComponents(blogPostBody, richTextOptions)}</div>
      </BlogPostBodyWrapper>
      <Grid colors={{ lines: grayToYellow }} />
    </StyledBlogPost>
  );
}
