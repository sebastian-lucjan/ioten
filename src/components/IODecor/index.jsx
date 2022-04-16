import IRing from 'src/assets/images/i-ring.svg';
import ORing from 'src/assets/images/o-ring.svg';
// import styled from 'styled-components';

// const StyledIRing = styled(IRing)``;

// const IODecor = (type, size) => {
const IODecor = (type) => {
  return (
    <>
      {type === 'I' ? <IRing /> : null}
      {type === 'O' ? <ORing /> : null}
    </>
  );
};

export default IODecor;
