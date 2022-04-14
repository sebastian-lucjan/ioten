import styled from 'styled-components';

export const StyledStagesIntro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  & > * {
    z-index: ${({ theme }) => theme.zIndex.top};
    margin-bottom: 2rem;
  }
`;
