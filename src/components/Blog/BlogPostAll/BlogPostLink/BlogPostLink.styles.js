import styled from 'styled-components';
import { TextParagraph } from 'src/components/TextComponents';

export const PostCategory = styled.p`
  color: ${({ theme, category }) => theme.color.categoryColor[category]};
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
  margin-right: 2rem;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 1.2rem 0 0;
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }

  &:hover {
    filter: brightness(0.8);
  }
`;

export const BlogShortDescription = styled(TextParagraph)`
  line-height: 24px;
`;
