import styled from 'styled-components';
import Link from 'next/link';
import { GoHomeButton, RestartValuationFormButton } from './ValuationFormButtons';

const Wrapper = styled.div`
  position: absolute;

  top: 22%;
  width: 100%;
  height: 55%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.mq.smallDesktop} {
    position: relative;
    top: 10vh;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    top: 15vh;
    padding: 0 180px 0 0;
  }
`;

const FormSuccessHeading = styled.h2`
  margin-bottom: 2rem;

  font-size: ${({ theme }) => theme.font.size.paragraphBig};
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  color: ${({ theme }) => theme.color.darkestGray};

  ${({ theme }) => theme.mq.smallDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingSection};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingBigDesktop};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    font-size: ${({ theme }) => theme.font.size.headingPage};
  }
`;

const FormSuccessDescription = styled.p`
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.font.size.smallText};
  color: ${({ theme }) => theme.color.darkerGray};

  span {
    font-family: ${({ theme }) => theme.font.family.myriadPro.black};
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }
`;

export default function ValuationFormSuccess() {
  return (
    <Wrapper>
      <FormSuccessHeading>Brawo!</FormSuccessHeading>
      <FormSuccessDescription>
        Twój formularz został wysłany do <span>ioten</span>. Postaramy się odpowiedzieć najszybciej jak potrafimy. Zwykle zajmuje nam to do 1 dnia
        roboczego.
      </FormSuccessDescription>
      <FormSuccessDescription>W odpowiedzi wyślemy Ci szacunkowy koszt wykonania usługi, lub dopytamy o dodatkowe informacje.</FormSuccessDescription>
      <Link href="/">
        <a>
          <GoHomeButton />
        </a>
      </Link>

      <RestartValuationFormButton />
    </Wrapper>
  );
}
