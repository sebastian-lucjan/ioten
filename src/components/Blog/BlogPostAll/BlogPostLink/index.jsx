import { TextHeading } from 'src/components/TextComponents';
import Image from 'next/image';
import Link from 'next/link';
import { StyledImage, StyledPost } from 'src/components/BlogShort/BlogShort.styles';
import { CategoryWrapper } from 'src/components/Blog/BlogPost/BlogPost.styles';
import { dataFormatter } from 'src/utils/date';
import PostInfo from './PostInfo';
import { BlogShortDescription, PostCategory } from './BlogPostLink.styles';

const BlogPost = ({ post }) => {
  const {
    fields: {
      title,
      category: categoryArr,
      coverImage: {
        fields: {
          file: { url },
          description: imgDescription,
        },
      },
      readingStats: { text: readingTimeText },
      articleSlug,
      description,
    },
  } = post;

  const formattedData = dataFormatter(post);

  return (
    <Link href={`/blog/${articleSlug}`}>
      <StyledPost>
        <StyledImage>
          <Image priority src={`https:${url}`} layout="fill" sizes="25vw" objectFit="cover" alt={imgDescription} />
        </StyledImage>
        <CategoryWrapper>
          {categoryArr.map((category) => (
            <PostCategory key={category} category={category}>
              {category}
            </PostCategory>
          ))}
        </CategoryWrapper>
        <TextHeading as="h3">{title}</TextHeading>
        <BlogShortDescription>{description}</BlogShortDescription>
        <PostInfo date={formattedData} readingTimeText={readingTimeText} />
        {/* <PostInfo date={date} readTime={readTime} /> */}
      </StyledPost>
    </Link>
  );
};

export default BlogPost;
