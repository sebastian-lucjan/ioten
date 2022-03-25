import styled from 'styled-components';

const StyledServiceDetail = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 120px);
  padding: 1.2rem 1.6rem;
  margin: 60px 40px 20px 40px;
  border-radius: 1rem;
  box-shadow: 0 0 2.7px rgba(0, 0, 0, 0.017), 0 0 6.9px rgba(0, 0, 0, 0.024), 0 0 14.2px rgba(0, 0, 0, 0.029),
    0 0 29.2px rgba(0, 0, 0, 0.035), 0 0 80px rgba(0, 0, 0, 0.05);
  z-index: ${({ theme }) => theme.zIndex.highest};
  background-color: ${({ theme }) => theme.color.white};
`;

export default StyledServiceDetail;
