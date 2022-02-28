import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color.black};
`;

export default function Home() {
  return <Title>ioten.io</Title>;
}
