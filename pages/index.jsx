import React from 'react';
import styled from 'styled-components';
import BaseLayout from 'src/components/BaseLayout';

const StyledTestPage = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.gradient.yellow.slider};
  color: ${({ theme }) => theme.color.black};
  font-family: ${({ theme }) => theme.font.family};
`;

export default function Home() {
  return (
    <StyledTestPage>
      <BaseLayout>
        <p>test</p>
      </BaseLayout>
    </StyledTestPage>
  );
}
