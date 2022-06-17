import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import theme from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import {
  BlogPostBodyWrapper,
  BlogPostIntroWrapper,
  CategoryWrapper,
  ImageWrapper,
  PostCategory,
  PostHeading,
  StyledBlogPost,
  StyledImage,
  StyledParagraph,
} from './BlogPost.styles';

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      console.log('data', data);
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
    coverImage: {
      fields: { file, description },
    },
    title,
    category: categoryArr,
    blogPostBody,
  } = post.fields;

  const {
    gradient: { grayToYellow, transparentToYellow },
  } = theme;

  return (
    <StyledBlogPost>
      <BlogPostIntroWrapper>
        <PostHeading>{title}</PostHeading>
        <CategoryWrapper>
          {categoryArr.map((category) => (
            <PostCategory key={category} category={category}>
              {category}
            </PostCategory>
          ))}
        </CategoryWrapper>

        <StyledImage>
          <Image src={`https:${file.url}`} layout="fill" objectFit="cover" alt={description} />
        </StyledImage>
      </BlogPostIntroWrapper>

      <BlogPostBodyWrapper>{documentToReactComponents(blogPostBody, richTextOptions)}</BlogPostBodyWrapper>

      <Grid colors={{ lines: grayToYellow, innerLines: transparentToYellow }} />
    </StyledBlogPost>
  );
}
