import styled from 'styled-components';

export const CookiesPopUp = styled.div`
  position: fixed;
  width: 100%;
  height: 22vh;
  padding: 0 2rem;

  background-color: hsla(360, 100%, 100%, 0.9);
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.peak};

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 6rem;
    line-height: 18px;
  }

  ${({ theme }) => theme.mq.landscape} {
    height: 17vh;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    padding: 0 25%;
  } ;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  ${({ theme }) => theme.mq.mediumMobile} {
    p {
      font-size: ${({ theme }) => theme.font.size.caption};
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    p {
      font-size: ${({ theme }) => theme.font.size.smallText};
    }
  }

  ${({ theme }) => theme.mq.landscape} {
    flex-direction: row;
    align-items: center;
    p {
      font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    }
  }
`;

export const ExitSign = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  color: ${({ theme }) => theme.color.lightGray};
  cursor: pointer;

  * {
    padding: 2px;
    width: 3rem;
    height: 3rem;
  }
`;

export const CookieButton = styled.button`
  cursor: pointer;
  height: 36px;
  background-color: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.darkestGray};
  border: none;
  font-size: ${({ theme }) => theme.font.size.caption};
  border-radius: 4px;
  margin: 0 20%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};

  ${({ theme }) => theme.mq.mediumMobile} {
    font-size: ${({ theme }) => theme.font.size.smallText};
  }

  ${({ theme }) => theme.mq.landscape} {
    width: 400px;
    margin: 0 20px 0 60px;
  }
`;

export const ParagraphInside = styled.p`
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  cursor: pointer;
  //margin-left: 0.3rem;
`;
