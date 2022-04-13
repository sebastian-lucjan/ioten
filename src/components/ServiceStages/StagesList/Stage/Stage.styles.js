import styled from 'styled-components';

export const StyledStage = styled.li`
  list-style: none;
  padding: 40px;

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.lightestGray};
  }

  & > * {
    padding-bottom: 2rem;
  }
`;
