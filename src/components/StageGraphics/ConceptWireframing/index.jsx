import Image from 'next/image';
import styled from 'styled-components';
import signInWireframe from 'src/assets/images/wireframe-01.png';
import userWireframe from 'src/assets/images/wireframe-02.png';
import listWireframe from 'src/assets/images/wireframe-03.png';
import LineOne from 'src/assets/images/wireframe-line-1.svg';
// import LineTwo from 'src/assets/images/wireframe-line-2.svg';
// import LineThree from 'src/assets/images/wireframe-line-3.svg';
// import LineFour from 'src/assets/images/wireframe-line-4.svg';

export const ConceptWireframingWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px 40px;
    width: calc(75vw - 70px);
    height: calc(100% - 160px);
    margin: 80px 20px 80px 30px;
    
    .wireframe {
      position: relative;
      //display: flex;
      //justify-content: center;
      //align-items: center;
      //background-color: blue;
      //height: unset;
      z-index: ${({ theme }) => theme.zIndex.peak};
      //&:before {
      //  box-shadow: 2.1px 2.1px 2.7px rgba(0, 0, 0, 0.025), 5.2px 5.2px 6.9px rgba(0, 0, 0, 0.035), 10.6px 10.6px 14.2px rgba(0, 0, 0, 0.045),
      //  21.9px 21.9px 29.2px rgba(0, 0, 0, 0.055), 60px 60px 80px rgba(0, 0, 0, 0.08);
      //}

      //&:nth-child(2):before,
      //&:nth-child(3):before {
      //  position: absolute;
      //  display: block;
      //  content: '';
      //  width: calc(100% - 6px);
      //  height: calc(100% - 32px);
      //  background-color: yellow;
      //  border-radius: 3rem;
      //  opacity: 0.5;
      //  //todo: think if you want shadow above 2,3 wireframe
      //}
      //
      //&:nth-child(1):before {
      //  border-radius: 4rem;
      //  display: block;
      //  content: '';
      //  width: calc(100% - 16px);
      //  height: calc(100% - 40px);
      //}
    }

    .sign-in-wireframe {
      position: relative;
      grid-area: 1 / 1 / 3 / 2;
      background-color: yellow;

      
      //width: 100%;
      //height: 100%;
      //&:before {
      //* {
        //background-color: yellow;
        //filter: box-shadow(
        //  2.1px 2.1px 2.7px rgba(0, 0, 0, 0.025),
        //  5.2px 5.2px 6.9px rgba(0, 0, 0, 0.035),
        //  10.6px 10.6px 14.2px rgba(0, 0, 0, 0.045),
        //  21.9px 21.9px 29.2px rgba(0, 0, 0, 0.055),
        //  60px 60px 80px rgba(0, 0, 0, 0.08)
        //);
        //box-shadow: 2.1px 2.1px 2.7px rgba(0, 0, 0, 0.025), 5.2px 5.2px 6.9px rgba(0, 0, 0, 0.035), 10.6px 10.6px 14.2px rgba(0, 0, 0, 0.045),
        //  21.9px 21.9px 29.2px rgba(0, 0, 0, 0.055), 60px 60px 80px rgba(0, 0, 0, 0.08);
      }
    }

    .user-wireframe {
      //position: relative;
      grid-area: 1 / 2 / 3 / 3;
      //width: calc(100% - 20px);
      //height: calc(100% - 20px);
      background-color: green;
      margin: 10px;

      * {
        position: absolute;
        top: 75%;
        left: -52%;
        //transform: translate(-100%, 28%);
        width: 58%;
        z-index: 100;
      }
    }

    .list-wireframe {
      //position: relative;
      grid-area: 1 / 3 / 3 / 4;
      //width: calc(100% - 20px);
      //height: calc(100% - 20px);
      margin: 10px;
      border-radius: 20px;
    }


    .handmade-lines {
      //position: absolute;
      //top: 0;
      //left: 0;
      //background-color: lightgray;
      // z-index: ${({ theme }) => theme.zIndex.peak};
      //height: 100%;

      //svg:nth-child(1) {
      //  position: absolute;
      //  top: 75%;
      //  left: -52%;
      //  //transform: translate(-100%, 28%);
      //  width: 58%;
      //}
      svg:nth-child(2) {
        transform: translate(-65%, 340%);
        width: 120%;
      }
      svg:nth-child(3) {
        transform: translate(65%, 240%);
        width: 115%;
      }
      svg:nth-child(4) {
        transform: translate(173%, -120%);
        width: 48%;
      }
    }
  } ;
`;
export default function ConceptWireframing() {
  return (
    <ConceptWireframingWrapper>
      <div className="sign-in-wireframe wireframe">
        <Image src={signInWireframe} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="list-wireframe wireframe">
        <Image src={listWireframe} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="user-wireframe wireframe">
        <Image src={userWireframe} layout="fill" objectFit="contain" alt="" />
        <LineOne />
        <div className="handmade-lines">
          {/* <LineTwo /> */}
          {/* <LineThree /> */}
          {/* <LineFour /> */}
          {/* <Image src={lineOne} layout="fill" objectFit="contain" alt="" /> */}
        </div>
      </div>
    </ConceptWireframingWrapper>
  );
}
