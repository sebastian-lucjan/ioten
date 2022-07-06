import Image from 'next/image';
import styled from 'styled-components';
import supportView from 'src/assets/images/support-graphics-1.png';
import supportComments from 'src/assets/images/support-graphics-2.png';

export const OptimizationSupportWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    justify-content: center;
    align-items: center;
    width: calc(75vw - 30px);
    margin: 0 0 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .support-view {
      display: flex;
      justify-content: center;
      position: relative;
      grid-area: 1 / 2 / 2 / 3;
      height: 90vh;
      z-index: ${({ theme }) => theme.zIndex.peak};
      margin: 20px;
    }

    .support-comments {
      position: relative;
      grid-area: 1 / 3 / 2 / 4;
      height: 90vh;
      margin: 0 40px;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }
  } ;
`;
export default function OptimizationSupport() {
  return (
    <OptimizationSupportWrapper>
      <div className="support-view">
        <Image
          src={supportView}
          layout="fill"
          objectFit="contain"
          alt="wykonana strona internetowa po wprowadzeniu dodatkowych funkcjonalności i uwag klienta"
        />
      </div>
      <div className="support-comments">
        <Image
          src={supportComments}
          layout="fill"
          objectFit="contain"
          alt="lista wprowadzonych zmian na życzenie klienta oraz nowych funkcjonalności na stronie internetowej"
        />
      </div>
    </OptimizationSupportWrapper>
  );
}
