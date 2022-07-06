import styled from 'styled-components';
import { TextParagraph } from 'src/components/TextComponents';

export const PostCategory = styled.p`
  background-color: ${({ theme, category }) => theme.color.categoryColor[category]};
  color: white;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  letter-spacing: 0.5px;
  font-size: ${({ theme }) => theme.font.size.smallText};
  padding: 0.4rem 1rem 0.1rem 1rem;
  border-radius: 0.3rem;
  margin-right: 1.2rem !important;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }
`;

export const BlogShortDescription = styled(TextParagraph)`
  line-height: 24px;
`;

// todo: add hover when add filter category feature
