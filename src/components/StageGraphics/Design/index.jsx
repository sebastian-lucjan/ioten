import Image from 'next/image';
import styled from 'styled-components';
// import pulireWebsite from 'src/assets/images/macbook-air-13.png';
// import pulireWebsite from 'src/assets/images/macbook-air-13-blank.png';
import pulireWebsite from 'src/assets/images/macbook-air-13-pulire.png';
// import handColor from 'src/assets/images/hand-color.png';
import mobileView from 'src/assets/images/mobile-view.png';
// import tabletView from 'src/assets/images/tablet-view.png';
// import pulireWebsite from 'src/assets/images/hand-marble.png';
// import pulireWebsite from 'src/assets/images/head.png';

export const DesignWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: flex;
    justify-content: center;
    width: calc(75vw - 70px);
    height: calc(100% - 160px);
    margin: 80px 20px 80px 30px;
    z-index: ${({ theme }) => theme.zIndex.peak};

    .pulire-design {
      position: absolute;
      top: 2%;
      left: 37%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 100%;
    }

    //.hand-color {
    //  position: absolute;
    //  top: 30%;
    //  left: 15%;
    //  width: 70%;
    //  height: 45%;
    //}

    .mobile-design {
      position: absolute;
      top: 18%;
      left: -19%;
      width: 70%;
      height: 73%;
    }

    //.tablet-design {
    //  position: absolute;
    //  top: 10%;
    //  right: -20%;
    //  width: 70%;
    //  height: 60%;
    //  z-index: -1;
    //}
  } ;
`;
export default function Design() {
  return (
    <DesignWrapper>
      <div className="pulire-design">
        <Image src={pulireWebsite} layout="fill" objectFit="contain" alt="" />
      </div>
      {/* <div className="hand-color"> */}
      {/*  <Image src={handColor} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
      <div className="mobile-design">
        <Image src={mobileView} layout="fill" objectFit="contain" alt="" />
      </div>
      {/* <div className="tablet-design"> */}
      {/*  <Image src={tabletView} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
    </DesignWrapper>
  );
}
