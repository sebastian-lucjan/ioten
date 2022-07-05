import { FaRegCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Icon = styled.div`
  margin-right: 1rem;
  margin-top: 1.6rem;
`;

const Item = styled.li`
  position: relative;
  height: 100%;
  list-style: none;
  display: flex;

  div :nth-child(1) {
    color: ${({ theme }) => theme.color.greenDark};
  }

  div {
    color: ${({ theme }) => theme.color.black} !important;
    font-size: 20px;
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export default function ListItem({ children }) {
  return (
    <Item>
      <Icon>
        <FaRegCheckCircle size={22} />
      </Icon>
      <div>{children}</div>
    </Item>
  );
}
