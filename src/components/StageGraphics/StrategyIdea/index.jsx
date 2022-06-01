import Image from 'next/image';
import styled from 'styled-components';
import strategyIdea from 'src/assets/images/strategy-idea-graphics.png';
// import risingChart from 'src/assets/images/strategy-idea-01.png';
// import statsChart from 'src/assets/images/strategy-idea-02.png';
// import histogramChart from 'src/assets/images/strategy-idea-03.png';
// import heatmapChart from 'src/assets/images/strategy-idea-04.png';

// export const StrategyIdeaWrapper = styled.div`
//   display: none;
//
//   ${({ theme }) => theme.mq.desktop} {
//     position: relative;
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//     grid-template-rows: 1fr 1fr;
//     grid-gap: 40px 40px;
//     width: calc(75vw - 70px);
//     height: calc(100% - 160px);
//     //background-color: blue;
//
//     margin: 80px 20px 80px 30px;
//     z-index: ${({ theme }) => theme.zIndex.peak};
//     //background-color: green;
//
//     & > div {
//       background-color: white;
//       border-radius: 1rem;
//       box-shadow: 2.1px 2.1px 2.7px rgba(0, 0, 0, 0.025), 5.2px 5.2px 6.9px rgba(0, 0, 0, 0.035), 10.6px 10.6px 14.2px rgba(0, 0, 0, 0.045),
//         21.9px 21.9px 29.2px rgba(0, 0, 0, 0.055), 60px 60px 80px rgba(0, 0, 0, 0.08);
//     }
//
//     .rising-chart {
//       position: relative;
//       grid-area: 1 / 1 / 2 / 2;
//       width: 100%;
//       height: 100%;
//     }
//
//     .stats-chart {
//       position: relative;
//       grid-area: 1 / 2 / 2 / 3;
//       width: 100%;
//       height: 100%;
//     }
//
//     .histogram-chart {
//       position: relative;
//       grid-area: 2 / 1 / 3 / 3;
//       width: 100%;
//       height: 100%;
//     }
//
//     .heatmap-chart {
//       position: relative;
//       grid-area: 1 / 3 / 3 / 4;
//       width: 100%;
//       height: 100%;
//     }
//   } ;
// `;

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
      background-color: white; //todo: gradient white to cover gray
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
        <Image src={strategyIdea} layout="fill" objectFit="contain" alt="" />
      </div>
    </StrategyIdeaWrapper>
  );
}
