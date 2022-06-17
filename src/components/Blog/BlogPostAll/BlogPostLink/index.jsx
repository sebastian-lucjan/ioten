import { TextCaption, TextHeading, TextParagraph } from 'src/components/TextComponents';
import { dataFormatter } from 'src/utils/dataFormatter';
import Image from 'next/image';
import { getShortDescription } from 'src/utils/blog/getShortDescription';
import styled from 'styled-components';
import Link from 'next/link';
import { StyledImage, StyledPost } from '../../../BlogShort/BlogShort.styles';
import PostInfo from './PostInfo';

export const BlogShortDescription = styled(TextParagraph)`
  line-height: 24px;
`;

const BlogPost = ({ post }) => {
  const {
    fields: {
      title,
      blogPostBody,
      category,
      coverImage: {
        fields: {
          file: { url },
        },
      },
      articleSlug,
    },
    sys: { createdAt },
  } = post;

  const formattedData = dataFormatter(createdAt);

  const shortDescription = getShortDescription(blogPostBody);

  return (
    <Link href={`/blog/${articleSlug}`}>
      <StyledPost>
        <StyledImage>
          <Image priority src={`https:${url}`} layout="fill" objectFit="cover" alt="czarna szczotka, narzędzie do sprzątania" />
        </StyledImage>
        <TextCaption>{category[0]}</TextCaption>
        <TextHeading>{title}</TextHeading>
        <BlogShortDescription>{shortDescription}</BlogShortDescription>
        <PostInfo date={formattedData} readTime="5" />
        {/* <PostInfo date={date} readTime={readTime} /> */}
      </StyledPost>
    </Link>
  );
};

export default BlogPost;
