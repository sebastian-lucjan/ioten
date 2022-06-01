import Image from 'next/image';
import styled from 'styled-components';
import developmentView from 'src/assets/images/development-graphics.png';
// import statsChart from 'src/assets/images/strategy-idea-02.png';
// import histogramChart from 'src/assets/images/strategy-idea-03.png';
// import heatmapChart from 'src/assets/images/strategy-idea-04.png';

export const DevelopmentWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    justify-content: center;
    align-items: center;
    width: calc(75vw - 30px);
    margin: 0 0 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .rising-chart {
      display: flex;
      justify-content: center;
      position: relative;
      grid-area: 1 / 2 / 2 / 3;
      height: 90vh;
      z-index: ${({ theme }) => theme.zIndex.peak};
      margin: 20px;
    }
  } ;
`;
export default function Development() {
  return (
    <DevelopmentWrapper>
      <div className="rising-chart">
        <Image src={developmentView} layout="fill" objectFit="contain" alt="" />
      </div>
    </DevelopmentWrapper>
  );
}
