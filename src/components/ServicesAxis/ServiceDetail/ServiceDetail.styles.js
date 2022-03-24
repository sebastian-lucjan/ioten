import styled from 'styled-components';

const StyledServiceDetail = styled.article`
  position: absolute;
  //top: ${({ detailIndex }) => `${detailIndex * 19}%`}; //shown window placed where clicked
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 120px);
  padding: 1.2rem 1.6rem;
  background-color: ${({ theme }) => theme.color.white};
  margin: 60px 40px;
  border-radius: 1rem;
  box-shadow: 0 0 2.7px rgba(0, 0, 0, 0.017), 0 0 6.9px rgba(0, 0, 0, 0.024), 0 0 14.2px rgba(0, 0, 0, 0.029),
    0 0 29.2px rgba(0, 0, 0, 0.035), 0 0 80px rgba(0, 0, 0, 0.05);
  z-index: ${({ theme }) => theme.zIndex.highest};
`;

export default StyledServiceDetail;

// todo: by każdy popup był przesunięty o 16.66% * service's index
