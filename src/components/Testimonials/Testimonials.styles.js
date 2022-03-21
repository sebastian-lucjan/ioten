import styled from 'styled-components';

export const Wrapper = styled.div`
  //align-items: flex-end;
  padding: 100px 40px;
  color: ${({ theme }) => theme.color.darkestGray};
  display: block;
`;

export const TestimonialsParagraph = styled.p`
  font-family: 'Myriad Pro', Roboto, Arial, serif;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.font.size.paragraph};
  line-height: 32px;
  display: block;
`;

export const TestimonialsCaption = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: 3rem;
  font-family: 'Myriad Pro', Roboto, Arial, serif;
  font-weight: 800;
  font-size: ${({ theme }) => theme.font.size.smallText};

  span {
    width: 20px;
    margin: auto 1rem;
    height: 2px;
    background-color: ${({ theme }) => theme.color.black};
  }
`;
