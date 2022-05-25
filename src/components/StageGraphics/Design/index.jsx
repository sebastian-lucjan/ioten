import Image from 'next/image';
import styled from 'styled-components';
import risingChart from 'src/assets/images/strategy-idea-01.png';
import statsChart from 'src/assets/images/strategy-idea-02.png';
import histogramChart from 'src/assets/images/strategy-idea-03.png';
import heatmapChart from 'src/assets/images/strategy-idea-04.png';

export const DesignWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px 40px;
    width: calc(75vw - 70px);
    height: calc(100% - 160px);
    //background-color: blue;

    margin: 80px 20px 80px 30px;
    z-index: ${({ theme }) => theme.zIndex.peak};
    //background-color: green;

    & > div {
      background-color: white;
      border-radius: 1rem;
      box-shadow: 2.1px 2.1px 2.7px rgba(0, 0, 0, 0.025), 5.2px 5.2px 6.9px rgba(0, 0, 0, 0.035), 10.6px 10.6px 14.2px rgba(0, 0, 0, 0.045),
        21.9px 21.9px 29.2px rgba(0, 0, 0, 0.055), 60px 60px 80px rgba(0, 0, 0, 0.08);
    }

    .rising-chart {
      position: relative;
      grid-area: 1 / 1 / 2 / 2;
      width: 100%;
      height: 100%;
    }

    .stats-chart {
      position: relative;
      grid-area: 1 / 2 / 2 / 3;
      width: 100%;
      height: 100%;
    }

    .histogram-chart {
      position: relative;
      grid-area: 2 / 1 / 3 / 3;
      width: 100%;
      height: 100%;
    }

    .heatmap-chart {
      position: relative;
      grid-area: 1 / 3 / 3 / 4;
      width: 100%;
      height: 100%;
    }
  } ;
`;
export default function Design() {
  return (
    <DesignWrapper>
      <div className="rising-chart">
        <Image src={risingChart} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="stats-chart">
        <Image src={statsChart} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="histogram-chart">
        <Image src={histogramChart} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="heatmap-chart">
        <Image src={heatmapChart} layout="fill" objectFit="contain" alt="" />
      </div>
    </DesignWrapper>
  );
}
