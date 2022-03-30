import styled from 'styled-components';
import { TextParagraph, TextWrapper } from 'src/components/TextComponents';

export const TestimonialsWrapper = styled(({ ...props }) => <TextWrapper {...props} />)`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 10vh 15vw;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    padding: 10vh 20vw;
  } ;
`;

export const TestimonialsParagraph = styled(({ ...props }) => <TextParagraph {...props} />)`
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingMedium};
    line-height: 42px;
  }
  ${({ theme }) => theme.mq.smallDesktop} {
  } ;
`;

export const TestimonialsCaption = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
  font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  font-size: ${({ theme }) => theme.font.size.smallText};

  .motto__caption-line {
    width: 20px;
    margin: auto 1rem;
    height: 2px;
    background-color: ${({ theme }) => theme.color.black};
  }
`;
