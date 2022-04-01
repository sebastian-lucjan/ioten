import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

export const IdeaInterludeWrapper = styled(({ ...props }) => <TextWrapper {...props} />)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin: auto 0;

  a {
    //container for button - need to customize sizes of button
    width: 100%;
  }

  ${({ theme }) => theme.mq.tablet} {
    height: unset;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    .idea-interlude__heading,
    .brief-interlude__heading {
      grid-area: 1 / 1 / 3 / 2;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 40px;
    }
    .idea-interlude__paragraph,
    .brief-interlude__paragraph {
      grid-area: 1 / 2 / 2 / 3;
      display: flex;
      align-items: center;
      line-height: 28px;
      padding: 0 20px;
    }
    .idea-interlude__button,
    .brief-interlude__button {
      height: 100%;
      display: flex;
      align-items: center;
      grid-area: 2 / 2 / 3 / 3;
      padding: 20px;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .idea-interlude__heading,
    .brief-interlude__heading {
      grid-area: 1 / 2 / 3 / 3;
    }
    .idea-interlude__paragraph,
    .brief-interlude__paragraph {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      grid-area: 1 / 3 / 2 / 4;
    }
    .idea-interlude__button,
    .brief-interlude__button {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
`;

export const IdeaButton = styled.button`
  position: relative;
  height: 60px;
  width: calc(100vw - 80px);
  margin: 0 auto;
  background: ${({ theme }) => theme.color.darkestGray};
  border: none;

  line-height: 100%;
  font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.7);
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    width: unset;
    margin: 0;
    padding: 1.4rem 4rem;
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    width: 100%;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    width: unset;
    font-size: ${({ theme }) => theme.font.size.headingSmall};
  }
`;
