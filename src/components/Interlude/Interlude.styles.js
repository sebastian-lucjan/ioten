import styled from 'styled-components';
import { TextWrapper } from '../TextComponents';

export const InterludeWrapper = styled(({ ...props }) => <TextWrapper {...props} />)`
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
    .services-interlude__heading,
    .brief-interlude__heading {
      grid-area: 1 / 1 / 3 / 2;
      display: flex;
      align-items: center;
      height: 100%;
      padding: 40px;
    }
    .idea-interlude__paragraph,
    .services-interlude__paragraph,
    .brief-interlude__paragraph {
      grid-area: 1 / 2 / 2 / 3;
      display: flex;
      align-items: center;
      line-height: 28px;
      padding: 0 20px;
    }
    .idea-interlude__button,
    .services-interlude__button,
    .brief-interlude__button {
      height: 100%;
      display: flex;
      align-items: center;
      grid-area: 2 / 2 / 3 / 3;
      padding: 20px;
    }
  }

  ${({ theme }) => theme.mq.hugeDesktop} {
    .idea-interlude__paragraph,
    .services-interlude__paragraph,
    .brief-interlude__paragraph,
    .idea-interlude__button,
    .services-interlude__button,
    .brief-interlude__button {
      padding: 40px;
    }
  }

  ${({ theme }) => theme.mq.mediumDesktop} {
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .idea-interlude__heading,
    .services-interlude__heading,
    .brief-interlude__heading {
      grid-area: 1 / 2 / 3 / 3;
    }
    .idea-interlude__paragraph,
    .services-interlude__paragraph,
    .brief-interlude__paragraph {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      grid-area: 1 / 3 / 2 / 4;
    }
    .idea-interlude__button,
    .services-interlude__button,
    .brief-interlude__button {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
`;
