import styled from 'styled-components';
import theme from 'src/assets/styles/theme';
import { TextCaption } from 'src/components/TextComponents';

const StyledPostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostInfo = ({ date, readTime }) => {
  const { lightGray, lighterGray } = theme.color;

  return (
    <StyledPostInfo>
      <TextCaption color={lightGray}>{date}</TextCaption>
      <TextCaption color={lighterGray}>{readTime} MIN</TextCaption>
    </StyledPostInfo>
  );
};

export default PostInfo;
