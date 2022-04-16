import styled from 'styled-components';

export const StyledStage = styled.li`
  list-style: none;
  padding: 40px;
  //z-index: 0;
  //z-index: ${({ theme }) => theme.zIndex.peak};

  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.color.lightestGray};
  }

  & > * {
    padding-bottom: 2rem;
  }
`;
