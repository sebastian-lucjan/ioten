import Image from 'next/image';
import styled from 'styled-components';
// import pulireWebsite from 'src/assets/images/macbook-air-13.png';
// import pulireWebsite from 'src/assets/images/macbook-air-13-blank.png';
// import pulireWebsite from 'src/assets/images/macbook-air-13-pulire.png';
// import handColor from 'src/assets/images/hand-color.png';
import designGraphicsView from 'src/assets/images/design-graphic-1.png';
import designSystemGraphics from 'src/assets/images/design-graphic-2.png';
// import tabletView from 'src/assets/images/tablet-view.png';
// import pulireWebsite from 'src/assets/images/hand-marble.png';
// import pulireWebsite from 'src/assets/images/head.png';
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
      //width: 100%;
      margin: 0 40px;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }
  }
`;

// export const DesignWrapper = styled.div`
//   display: none;
//
//   ${({ theme }) => theme.mq.desktop} {
//     position: relative;
//     display: flex;
//     justify-content: center;
//     width: calc(75vw - 70px);
//     height: calc(100% - 160px);
//     margin: 80px 20px 80px 30px;
//     z-index: ${({ theme }) => theme.zIndex.peak};
//
//     .pulire-design {
//       position: absolute;
//       top: 2%;
//       left: 37%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       width: 60%;
//       height: 100%;
//     }
//
//     //.hand-color {
//     //  position: absolute;
//     //  top: 30%;
//     //  left: 15%;
//     //  width: 70%;
//     //  height: 45%;
//     //}
//
//     .mobile-design {
//       position: absolute;
//       top: 18%;
//       left: -19%;
//       width: 70%;
//       height: 73%;
//     }
//
//     //.tablet-design {
//     //  position: absolute;
//     //  top: 10%;
//     //  right: -20%;
//     //  width: 70%;
//     //  height: 60%;
//     //  z-index: -1;
//     //}
//

//   } ;
// `;
export default function Design() {
  return (
    <DesignWrapper>
      {/* <div className="pulire-design"> */}
      {/*  <Image src={pulireWebsite} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
      {/* <div className="hand-color"> */}
      {/*  <Image src={handColor} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
      <div className="designGraphicsView">
        <Image src={designGraphicsView} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="designSystemGraphics">
        <Image src={designSystemGraphics} layout="fill" objectFit="contain" alt="" />
      </div>
      {/* <div className="tablet-design"> */}
      {/*  <Image src={tabletView} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
    </DesignWrapper>
  );
}
