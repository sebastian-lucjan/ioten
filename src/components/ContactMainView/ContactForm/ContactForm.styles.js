import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px 100px 40px;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    margin: auto;
    width: 400px;

    padding: 100px 40px;

    //&:nth-child(n*2 + 1) {
    //  margin-right: 10px;
    //  background-color: pink;
    //}
  }
`;
