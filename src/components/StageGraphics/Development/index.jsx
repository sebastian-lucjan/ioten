import Image from 'next/image';
import styled from 'styled-components';
import developmentMobile from 'src/assets/images/development-mobile.png';
import developmentTablet from 'src/assets/images/development-tablet.png';
import developmentMac from 'src/assets/images/development-mac.png';

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
    </DevelopmentWrapper>
  );
}
