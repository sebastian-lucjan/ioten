import styled from 'styled-components';
import { Icon } from '@iconify/react';

const StyledService = styled.li`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`;

const StyledHeading = styled.div`
  display: flex;
  margin-bottom: 1rem;

  h3 {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    font-family: ${({ theme }) => theme.font.family.myriadPro.regular};
    line-height: 28px;
    margin-left: 1rem;
  }

  div {
    width: 28px;
    height: 28px;
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.color.red};
  }
`;

const StyledParagraphWrapper = styled.div`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  font-family: ${({ theme }) => theme.font.family.myriadPro.light};
  line-height: 28px;
`;

export default function Service({ serviceData }) {
  return (
    <StyledService>
      <StyledHeading>
        <div>
          <Icon icon={serviceData.icon} />
        </div>
        <h3>{serviceData.heading}</h3>
      </StyledHeading>
      <StyledParagraphWrapper>
        <p>{serviceData.description}</p>
      </StyledParagraphWrapper>
    </StyledService>
  );
}
