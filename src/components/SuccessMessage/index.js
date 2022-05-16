import styled from 'styled-components';
import { useTimeout } from 'src/hooks/useTimeout';

const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 80px);
  height: 160px;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.smallText};
  border-radius: 6px;

  ${({ theme }) => theme.mq.tablet} {
    width: calc(50vw);
    left: 25%;
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
`;

const StyledTimeBar = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  margin-top: 3rem;
  border: 1px solid ${({ theme }) => theme.color.white};
  overflow: hidden;
  border-radius: 6px;

  span {
    position: absolute;
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 6px;
    animation: move 5s linear 0s 1 forwards;
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
