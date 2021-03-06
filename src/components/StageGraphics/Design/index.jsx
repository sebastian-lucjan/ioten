import Image from 'next/image';
import styled from 'styled-components';
import designGraphicsView from 'src/assets/images/design-graphic-1.png';
import designSystemGraphics from 'src/assets/images/design-graphic-2.png';
// import pencil from 'src/assets/images/design-item-3.png';

export const DesignWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    justify-content: center;
    align-items: center;
    width: calc(75vw - 30px);
    margin: 0 0 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .designGraphicsView {
      display: flex;
      justify-content: center;
      position: relative;
      grid-area: 1 / 2 / 2 / 3;
      height: 90vh;
      z-index: ${({ theme }) => theme.zIndex.peak};
      margin: 20px;
    }

    .designSystemGraphics {
      position: relative;
      grid-area: 1 / 3 / 2 / 4;
      height: 90vh;
      margin: 0 40px;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }
  }
`;

export default function Design() {
  return (
    <DesignWrapper>
      <div className="designGraphicsView">
        <Image
          src={designGraphicsView}
          layout="fill"
          objectFit="contain"
          alt="projektowanie designu strony internetowej, pokazanie odległości między elementami i relacji przestrzennych"
        />
      </div>
      <div className="designSystemGraphics">
        <Image
          src={designSystemGraphics}
          layout="fill"
          objectFit="contain"
          alt="zaprojektowany design book, użyte czcionki, rodzaje przycisków i zmiany kolorów w zależności od stanu przycisku na stronie internetowej"
        />
      </div>
    </DesignWrapper>
  );
}
