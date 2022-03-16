import React from 'react';
// import styled from 'styled-components';
import BaseLayout from 'src/components/BaseLayout';
import Navigation from 'src/components/Navigation';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.color.black};
// `;

export default function Home() {
  return (
    <BaseLayout>
      <h2>ioten</h2>
      <Navigation />
      {/* <Title>ioten.io</Title> */}
    </BaseLayout>
  );
}
