import styled from 'styled-components';
import IotenLogo from 'src/assets/images/ioten-logo-main.svg';
import ThinArrow from 'src/assets/images/service-detail-arrow.svg';

export const StyledServiceDetail = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  margin: 60px 40px 20px 40px;
  border-radius: 1rem;
  box-shadow: 0 0 2.7px rgba(0, 0, 0, 0.017), 0 0 6.9px rgba(0, 0, 0, 0.024), 0 0 14.2px rgba(0, 0, 0, 0.029), 0 0 29.2px rgba(0, 0, 0, 0.035),
    0 0 80px rgba(0, 0, 0, 0.05);
  z-index: ${({ theme }) => theme.zIndex.peak};
  background-color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    top: ${({ detailIndex }) => `${detailIndex * 20 - 10}%`};
    left: calc(50% - 20px);
    width: calc(50% - 60px);
  } ;
`;

export const StyledDetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .service-details__logo-and-exit {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const StyledLogo = styled.div`
  position: relative;
  height: 20px;
  transform: scale(0.6);
`;

export const StyledIotenLogo = styled(IotenLogo)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledThinArrow = styled(ThinArrow)`
  ${({ color }) => (color ? `color: ${color}` : '')} //passed color
  margin-left: 1.6rem;
`;

export const ServiceDetailFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0 1rem 0;

  .service-detail__read-more {
    display: flex;
    align-items: center;

    p {
      margin-right: 20px;
    }
  }

  .service-detail__question {
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
  }
`;
export const StyledDetailIntro = styled.div`
  p {
    margin: 20px 0 0 0;
  }
`;
