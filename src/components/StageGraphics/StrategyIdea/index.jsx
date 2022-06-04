import Image from 'next/image';
import styled from 'styled-components';
import strategyIdea from 'src/assets/images/strategy-idea-graphics.png';
// import magnifier from 'src/assets/images/idea-item-1.png';
// import piggyBank from 'src/assets/images/idea-item-2.png';

export const StrategyIdeaWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(75vw - 30px);
    margin: 0 0 0 10px;
    height: 100vh;

    .strategyIdea {
      background: ${({ theme }) => theme.gradient.transparentWhiteTransparentSecond};
      position: relative;
      height: 80vh;
      width: 100%;
      margin: 0 2px;
      z-index: ${({ theme }) => theme.zIndex.peak};
    }

    .magnifier {
      display: none;
      position: absolute;
      top: 70%;
      left: 10%;
      width: 80px;
      height: 80px;
      z-index: ${({ theme }) => theme.zIndex.peak};
      filter: drop-shadow(5px 5px 2px #2222);

      ${({ theme }) => theme.mq.smallDesktop} {
        display: block;
      }
    }

    // .piggy-bank {
    //   display: none;
    //   position: absolute;
    //   top: 30%;
    //   left: 80%;
    //   width: 100px;
    //   height: 100px;
    //   z-index: ${({ theme }) => theme.zIndex.peak};
    //   //box-shadow: 1.3px 1px 4.1px rgba(0, 0, 0, 0.028), 4.2px 3.4px 13.6px rgba(0, 0, 0, 0.042), 19px 15px 61px rgba(0, 0, 0, 0.07);
    //   filter: drop-shadow(5px 5px 2px #2222);
    //
    //   ${({ theme }) => theme.mq.smallDesktop} {
    //     display: block;
    //   }
    // }
  }
`;

export default function StrategyIdea() {
  return (
    <StrategyIdeaWrapper>
      <div className="strategyIdea">
        <Image src={strategyIdea} layout="fill" objectFit="contain" alt="" />
      </div>
      {/* <div className="magnifier"> */}
      {/*  <Image src={magnifier} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
      {/* <div className="piggy-bank"> */}
      {/*  <Image src={piggyBank} layout="fill" objectFit="contain" alt="" /> */}
      {/* </div> */}
    </StrategyIdeaWrapper>
  );
}
