import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.smallDesktop} {
    //background-color: blue;
    flex-direction: row;
    top: unset;
    position: unset;
  } ;
`;

export default Wrapper;
