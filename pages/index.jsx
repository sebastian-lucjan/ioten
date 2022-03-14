import React from 'react';
import styled from 'styled-components';
import Logo from 'src/assets/images/ioten-logo.svg';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color.black};
`;

export default function Home() {
  return (
    <div>
      <Logo />
      <Title>ioten.io</Title>
    </div>
  );
}
