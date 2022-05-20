import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
  margin-left: 20px;

  ${({ theme }) => theme.mq.tablet} {
    position: unset;
    margin-left: 30px;
  }

  ${({ theme }) => `${theme.mq.smallDesktop} and (orientation: landscape)`} {
    position: relative;
    margin-left: 30px;
  } ;
`;

export const ToggleBody = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.darkestGray};
  cursor: pointer;
  transform: translate(0, 0);

  ${({ theme }) => theme.mq.tablet} {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70px;
    height: 32px;
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    transform: translate(0, -6px);
    width: 90px;
    height: 48px;
  }
  ${({ theme }) => theme.mq.mediumDesktop} {
    transform: translate(0, 0);
    width: 90px;
    height: 48px;
  } ;
`;

export const TogglerHandle = styled.div`
  transition: left 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: ${({ boost }) => (boost === 'boost-chart' ? '26px' : 0)};
  height: 24px;
  width: 24px;
  border: 3px solid ${({ theme }) => theme.color.darkestGray};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.yellowLight};
  cursor: pointer;

  ${({ theme }) => theme.mq.tablet} {
    height: 32px;
    width: 32px;
    border: 4px solid ${({ theme }) => theme.color.darkestGray};
    left: ${({ boost }) => (boost === 'boost-chart' ? '41px' : 0)};
  }

  ${({ theme }) => theme.mq.smallDesktop} {
    height: 48px;
    width: 48px;
    border: 6px solid ${({ theme }) => theme.color.darkestGray};
  } ;
`;
