import Image from 'next/image';
import styled from 'styled-components';
import developmentMobile from 'src/assets/images/development-mobile.png';
import developmentTablet from 'src/assets/images/development-tablet.png';
import developmentMac from 'src/assets/images/development-mac.png';
// import JsLogo from 'src/assets/images/logo-javascript.svg';
// import TsLogo from 'src/assets/images/logo-typescript.svg';
// import ReactLogo from 'src/assets/images/logo-react.svg';
// import NextJsLogo from 'src/assets/images/logo-nextjs.svg';
// import CssLogo from 'src/assets/images/logo-css.svg';
// import TailwindLogo from 'src/assets/images/logo-tailwindcss.svg';
// import HtmlLogo from 'src/assets/images/logo-html5.svg';
// import StrapiLogo from 'src/assets/images/logo-strapi.svg';
// import GaLogo from 'src/assets/images/logo-google-ads.svg';

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

    div {
      display: flex;
      justify-content: center;
      position: relative;
      height: 90vh;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }

    .development-tablet {
      grid-column: 1 / 2;
      margin: 0 40px;
    }

    .development-mobile {
      grid-column: 2 / 3;
      z-index: ${({ theme }) => theme.zIndex.highest};
      margin: 20px;
    }

    .development-mac {
      grid-column: 3 / 4;
      width: 120%;
      transform: translateX(-8%);
      margin: 0;
    }

    .logo {
      display: none;
      position: absolute;
      width: 40px;
      height: 40px;
      z-index: ${({ theme }) => theme.zIndex.peak};
      filter: drop-shadow(5px 5px 2px #2222);

      ${({ theme }) => theme.mq.smallDesktop} {
        display: block;
      }
    }

    .react-logo {
      top: 80%;
      left: 80%;
    }
    .next-logo {
      top: 90%;
      left: 70%;
    }
    .css-logo {
      top: 80%;
      left: 20%;
    }
    .tailwind-logo {
      top: 20%;
      left: 80%;
    }
    .html-logo {
      top: 0%;
      left: 55%;
    }
    .strapi-logo {
      top: 100%;
      left: 45%;
    }
    .ga-logo {
      top: 10%;
      left: 90%;
    }
    .js-logo {
      top: 5%;
      left: 10%;
    }
    .ts-logo {
      top: 20%;
      left: 20%;
    }
  } ;
`;
export default function Development() {
  return (
    <DevelopmentWrapper>
      <div className="development-tablet">
        <Image src={developmentTablet} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="development-mobile">
        <Image src={developmentMobile} layout="fill" objectFit="contain" alt="" />
      </div>
      <div className="development-mac">
        <Image src={developmentMac} layout="fill" objectFit="contain" alt="" />
      </div>

      {/* <div className="react-logo logo"> */}
      {/*  <ReactLogo /> */}
      {/* </div> */}
      {/* <div className="next-logo logo"> */}
      {/*  <NextJsLogo /> */}
      {/* </div> */}
      {/* <div className="css-logo logo"> */}
      {/*  <CssLogo /> */}
      {/* </div> */}
      {/* <div className="tailwind-logo logo"> */}
      {/*  <TailwindLogo /> */}
      {/* </div> */}
      {/* <div className="html-logo logo"> */}
      {/*  <HtmlLogo /> */}
      {/* </div> */}
      {/* <div className="strapi-logo logo"> */}
      {/*  <StrapiLogo /> */}
      {/* </div> */}
      {/* <div className="ga-logo logo"> */}
      {/*  <GaLogo /> */}
      {/* </div> */}
      {/* <div className="js-logo logo"> */}
      {/*  <JsLogo /> */}
      {/* </div> */}
      {/* <div className="ts-logo logo"> */}
      {/*  <TsLogo /> */}
      {/* </div> */}
    </DevelopmentWrapper>
  );
}
