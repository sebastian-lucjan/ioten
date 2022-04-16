import { TextCaption, TextHeading, TextParagraph } from 'src/components/TextComponents';
import { ImagePlaceholder, StyledPost } from '../../../BlogShort/BlogShort.styles';
import PostInfo from './PostInfo';

const BlogPost = ({ post: { category, heading, shortDescription, date, readTime } }) => {
  return (
    <StyledPost>
      <ImagePlaceholder className="post__image-placeholder" />
      <TextCaption>{category}</TextCaption>
      <TextHeading>{heading}</TextHeading>
      <TextParagraph>{shortDescription}</TextParagraph>
      <PostInfo date={date} readTime={readTime} />
    </StyledPost>
  );
};

export default BlogPost;
