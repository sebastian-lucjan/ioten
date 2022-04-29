import styled from 'styled-components';
import { useContext } from 'react';
import MainPageContext from 'src/context/mainPageContext';

export const Wrapper = styled.div`
  position: relative;
  transition: all 0.3s ease-in-out;
  margin-left: 30px;
`;

export const ToggleBody = styled.div`
  position: absolute;
  width: 90px;
  height: 48px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.darkestGray};
`;

export const TogglerHandle = styled.div`
  transition: left 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: ${({ boost }) => (boost === 'boost-chart' ? '40px' : 0)};
  height: 48px;
  width: 48px;
  border: 6px solid ${({ theme }) => theme.color.darkestGray};
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.yellowLight};
  cursor: pointer;
`;

export default function DataToggler() {
  const { dataBooster, setDataBooster } = useContext(MainPageContext);

  const handleClick = () => {
    if (dataBooster === 'boost-chart') {
      setDataBooster('boost-chart-reverse');
    } else if (dataBooster === 'boost-chart-reverse' || dataBooster === 'initial-state') {
      setDataBooster('boost-chart');
    }
  };

  return (
    <Wrapper>
      <ToggleBody />
      <TogglerHandle boost={dataBooster} onClick={handleClick} />
    </Wrapper>
  );
}
