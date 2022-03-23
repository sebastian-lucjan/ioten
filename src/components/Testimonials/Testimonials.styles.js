import styled from 'styled-components';

const TestimonialsCaption = styled.div`
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

export default TestimonialsCaption;
