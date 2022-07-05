import styled from 'styled-components';
import { TextParagraph } from 'src/components/TextComponents';

export const PostCategory = styled.p`
  color: ${({ theme, category }) => theme.color.categoryColor[category]};
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
  padding-right: 1.2rem;

  ${({ theme }) => theme.mq.tablet} {
    padding-right: 1.2rem;
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }
`;

export const BlogShortDescription = styled(TextParagraph)`
  line-height: 24px;
`;

// todo: add hover when add filter category feature
