import { TextHeading } from 'src/components/TextComponents';
import { dataFormatter } from 'src/utils/dataFormatter';
import Image from 'next/image';
import { getShortDescription } from 'src/utils/blog/getShortDescription';
import Link from 'next/link';
import { StyledImage, StyledPost } from 'src/components/BlogShort/BlogShort.styles';
import { CategoryWrapper } from 'src/components/Blog/BlogPost/BlogPost.styles';
import PostInfo from './PostInfo';
import { BlogShortDescription, PostCategory } from './BlogPostLink.styles';

const BlogPost = ({ post }) => {
  const {
    fields: {
      title,
      blogPostBody,
      category: categoryArr,
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
        <CategoryWrapper>
          {categoryArr.map((category) => (
            <PostCategory key={category} category={category}>
              {category}
            </PostCategory>
          ))}
        </CategoryWrapper>
        <TextHeading>{title}</TextHeading>
        <BlogShortDescription>{shortDescription}</BlogShortDescription>
        <PostInfo date={formattedData} readTime="5" />
        {/* <PostInfo date={date} readTime={readTime} /> */}
      </StyledPost>
    </Link>
  );
};

export default BlogPost;
