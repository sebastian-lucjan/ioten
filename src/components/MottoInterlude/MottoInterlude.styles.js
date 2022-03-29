import styled from 'styled-components';
import { TextParagraph, TextWrapper } from '../TextComponents';

export const MottoWrapper = styled(({ ...props }) => <TextWrapper {...props} />)`
  //margin: 0 20vw;
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10vh 15vw;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 10vh 20vw;
  } ;
`;

export const MottoParagraph = styled(({ ...props }) => <TextParagraph {...props} />)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
    line-height: 42px;
  }
  ${({ theme }) => theme.mq.desktop} {
  } ;
`;

export const MottoCaption = styled.p`
  margin-top: 3rem;
  margin-left: auto;
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
`;
