import styled from 'styled-components';

export const StyledBenefit = styled.li`
  position: relative;
  list-style: none;
  display: flex;
  align-items: flex-start;

  .service-detail__check {
    display: flex;
    align-items: center;
    height: 32px;
  }
`;

export const StyledBenefitsList = styled.div`
  margin: 2rem 0;
`;

export const StyledColorCheckIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  background-color: ${({ color }) => `${color}66`}; // add opacity to color
  border: 2px ${({ color }) => color} solid;
  margin-right: 1rem;
`;
