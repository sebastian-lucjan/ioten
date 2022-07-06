import Image from 'next/image';
import styled from 'styled-components';
import strategyIdea from 'src/assets/images/strategy-idea-graphics.png';

export const StrategyIdeaWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(75vw - 30px);
    margin: 0 0 0 10px;
    height: 100vh;

    .strategyIdea {
      background: ${({ theme }) => theme.gradient.transparentWhiteTransparentSecond};
      position: relative;
      height: 80vh;
      width: 100%;
      margin: 0 2px;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }
  }
`;

export default function StrategyIdea() {
  return (
    <StrategyIdeaWrapper>
      <div className="strategyIdea">
        <Image
          src={strategyIdea}
          layout="fill"
          objectFit="contain"
          alt="materiały i informacje od klienta w celu przygotowania strategii przy projektowaniu strony internetowej"
        />
      </div>
    </StrategyIdeaWrapper>
  );
}
