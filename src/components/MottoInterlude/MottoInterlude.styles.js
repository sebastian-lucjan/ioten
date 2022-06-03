import styled from 'styled-components';
import { TextParagraph, TextWrapper } from '../TextComponents';

export const MottoWrapper = styled(({ ...props }) => <TextWrapper {...props} />)`
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10vh 15vw;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 45%;
    margin: 0 auto;
    padding: 10vh 0;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    padding: 15vh 0 12vh 0;
  }
`;

export const MottoParagraph = styled(({ ...props }) => <TextParagraph {...props} />)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
    line-height: 42px;
  }
  ${({ theme }) => theme.mq.smallDesktop} {
  } ;
`;

export const MottoCaption = styled.p`
  margin-top: 3rem;
  margin-left: auto;
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};
`;
