import { TextCaption, TextHeading, TextParagraph } from 'src/components/TextComponents';
import { ImagePlaceholder, StyledPost } from '../BlogShort.styles';
import PostInfo from './PostInfo';

const BlogPost = ({ post: { category, heading, shortDescription, date, readTime } }) => {
  return (
    <StyledPost>
      <ImagePlaceholder />
      <TextCaption>{category}</TextCaption>
      <TextHeading>{heading}</TextHeading>
      <TextParagraph>{shortDescription}</TextParagraph>
      <PostInfo date={date} readTime={readTime} />
    </StyledPost>
  );
};

export default BlogPost;
