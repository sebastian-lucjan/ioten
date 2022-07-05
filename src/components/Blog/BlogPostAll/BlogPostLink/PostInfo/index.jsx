import styled from 'styled-components';
import theme from 'src/assets/styles/theme';
import { TextCaption } from 'src/components/TextComponents';

const StyledPostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostInfo = ({ date, readingTimeText }) => {
  const { gray } = theme.color;

  const readingTime = readingTimeText.replace(' read', '');

  return (
    <StyledPostInfo>
      <TextCaption color={gray}>{date}</TextCaption>
      <TextCaption color={gray}>{readingTime}</TextCaption>
    </StyledPostInfo>
  );
};

export default PostInfo;
