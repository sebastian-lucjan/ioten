import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import theme from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import {
  BlogPostBodyWrapper,
  BlogPostIntroWrapper,
  CategoryWrapper,
  ImageWrapper,
  PhotoCaption,
  PostCategory,
  PostHeading,
  StyledBlogPost,
  StyledImage,
  StyledLink,
} from './BlogPost.styles';
import { Heading, Quote } from './RichText';
import RichParagraph from './RichParagraph';
import ListItem from './ListItem';

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data }) => {
      const {
        fields: { file, description },
      } = data.target;

      return (
        <ImageWrapper>
          <Image
            src={`https:${file.url}`}
            layout="responsive"
            width={file.details.image.width}
            height={file.details.image.height}
            objectFit="contain"
            alt={description}
          />

          {/* {description ? <p>fot.: {description}</p> : null} */}
        </ImageWrapper>
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <RichParagraph>{children}</RichParagraph>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <Heading lvl={3}>{children}</Heading>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <Heading lvl={4}>{children}</Heading>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <PhotoCaption>{children}</PhotoCaption>;
    },
    [BLOCKS.QUOTE]: (node, children) => {
      return <Quote>{children}</Quote>;
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <ListItem>{children}</ListItem>;
    },
    // [MARKS.CODE]: (node, children) => { doesn't work, don't know why
    //   return <Code>{children}</Code>;
    // },
    [INLINES.HYPERLINK]: (node, children) => {
      const [text] = children;
      const {
        data: { uri },
      } = node;
      return (
        <StyledLink href={uri} target="_blank" rel="noopener">
          {text}
        </StyledLink>
      );
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

  console.log('blogPostBody:', blogPostBody);

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
// todo: dodaj takie keywords - Serwisy wizerunkowe, strony produktowe - projektowanie i tworzenie
