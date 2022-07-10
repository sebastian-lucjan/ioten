import styled from 'styled-components';
import Bulb from '../Bulb';
import WireframeCheckbox from '../WireframeCheckbox';
import CrayonEraser from './CrayonEraser';
import RocketDevelopment from './RocketDevelopment';

const FlyingGraphics = styled.div`
  position: absolute;
  top: -10%;
  left: calc(100% - 6px);
  width: 50px;
  height: 50px;
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.smallDesktop} {
    top: 55%;
    z-index: ${({ theme }) => theme.zIndex.highest};
  } ;
`;

export default function StageFlyingGraphics({ index }) {
  return (
    <FlyingGraphics>
      {index === 0 ? <Bulb /> : null}
      {index === 1 ? <WireframeCheckbox /> : null}
      {index === 2 ? <CrayonEraser /> : null}
      {index === 3 ? <RocketDevelopment /> : null}
      {/* {index === 4 ? <OptimizationSupport /> : null} */}
    </FlyingGraphics>
  );
}
