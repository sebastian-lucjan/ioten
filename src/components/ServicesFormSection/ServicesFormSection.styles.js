import styled from 'styled-components';

export const StyledServicesForm = styled.div`
  position: relative;
  padding: 80px 40px;
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.smallDesktop} {
    display: flex;
    padding: 80px 20px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: calc(50% - 20px);
  } ;
`;
