import styled from 'styled-components';
import { useTimeout } from '../../hooks/useTimeout';

const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 80px);
  height: 120px;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.smallText}; ;
`;

const StyledTimeBar = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.color.white};
  overflow: hidden;

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 6px;
    animation: move 4.9s linear 0s 1 forwards;
  }

  @keyframes move {
    0% {
      left: 0;
    }
    100% {
      left: calc(-110%);
    }
  }
`;

const TimeBar = () => {
  return (
    <StyledTimeBar>
      <span />
    </StyledTimeBar>
  );
};

const StyledMessage = styled.div``;

export default function SuccessMessage({ setSendSuccess }) {
  useTimeout(() => setSendSuccess(false), 5000);

  return (
    <Wrapper>
      <StyledMessage>
        <p>Twoja wiadomość została wysłana.</p>
        <TimeBar />
      </StyledMessage>
    </Wrapper>
  );
}
