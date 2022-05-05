import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background 0.5s ease;

  ${({ currentPage }) => {
    if (currentPage === 0) {
      return 'background: rgba(235,235,235,1);';
    }
    if (currentPage === 1) {
      return 'background: rgba(56,61,84,1);';
    }
    if (currentPage === 2) {
      return 'background: #DAFF4D;';
    }
    return 'background: rgba(235,235,235,1);';
  }}

  ${({ theme }) => theme.mq.smallDesktop} {
    flex-direction: row;
    top: unset;
    position: unset;
  } ;
`;

export default Wrapper;
