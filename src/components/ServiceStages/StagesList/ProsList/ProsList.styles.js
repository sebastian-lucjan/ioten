import styled from 'styled-components';

export const StyledProsList = styled.ul`
  display: flex;
  flex-direction: column;

  & > div {
    margin-bottom: 2rem;

    svg {
      width: 24px;
      height: 24px;
      color: white;
    }
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    flex-direction: row;
    transform: translateX(-20px);
    width: calc(100% + 40px);
  } ;
`;

export const Pros = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;

  &:hover {
    transform: scale(1.04);
  }

  p {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    text-align: center;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
    padding: 1rem 2rem 1rem 0;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    width: 25%;
    padding: 1rem 2rem;
  } ;
`;

export const StyledIconWrapper = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.green};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 2rem 0;
`;
