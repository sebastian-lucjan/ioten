import styled from 'styled-components';

export const FormDuel = styled.div`
  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: space-between;

    label {
      display: block;
      width: calc(50% - 10px);
    }
  } ;
`;

export const Wrapper = styled.div``;

export const StyledServicesForm = styled.div`
  ${({ theme }) => theme.mq.smallDesktop} {
    width: calc(50% - 20px);
  }
`;
