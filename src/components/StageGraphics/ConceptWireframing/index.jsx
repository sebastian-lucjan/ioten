import Image from 'next/image';
import styled from 'styled-components';
import wireframeGraphic from 'src/assets/images/wireframe-graphics.png';
// import octahedron from 'src/assets/images/wireframe-item-1.png';
// import cube from 'src/assets/images/wireframe-item-2.png';

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ConceptWireframingWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: calc(75vw - 30px);
    margin: 0 0 0 10px;

    .wireframe {
      position: relative;
      height: 100vh;
      width: 100%;
      margin: 0 2px;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }

    .cube,
    .octahedron {
      display: none;
      position: absolute;
      width: 100px;
      height: 100px;
      z-index: ${({ theme }) => theme.zIndex.peak};
      filter: drop-shadow(5px 5px 2px #2222);

      ${({ theme }) => theme.mq.smallDesktop} {
        display: block;
      }
    }
  }
`;

export default function ConceptWireframing() {
  return (
    <Container>
      <ConceptWireframingWrapper>
        <div className="sign-in-wireframe wireframe">
          <Image src={wireframeGraphic} layout="fill" objectFit="contain" alt="przykład wireframe przy tworzeniu strony internetowej" />
        </div>
      </ConceptWireframingWrapper>
    </Container>
  );
}
