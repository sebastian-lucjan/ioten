import styled from 'styled-components';
import { TextParagraph, TextWrapper } from 'src/components/TextComponents';

export const TestimonialsWrapper = styled(({ ...props }) => <TextWrapper {...props} />)`
  li.slick-active > * {
    background-color: ${({ theme }) => theme.color.black} !important;
  }
  padding: 20vh 40px;

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
    z-index: ${({ theme }) => theme.zIndex.peak};
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    padding: 15vh 0 12vh 0;
  }
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

export const StyledMediumIRing = styled.div`
  & * {
    position: absolute;
    top: 20%;
    right: 0.4rem;
  }
  *:nth-child(1) {
    z-index: ${({ theme: { zIndex } }) => zIndex.top};
  }
`;

export const StyledMediumORing = styled.div`
  & * {
    position: absolute;
    bottom: 20%;
    left: 0.8rem;
  }
  *:nth-child(1) {
    z-index: ${({ theme: { zIndex } }) => zIndex.top};
  }
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.green};
  }
`;
