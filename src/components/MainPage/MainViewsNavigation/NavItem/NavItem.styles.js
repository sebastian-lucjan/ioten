import styled from 'styled-components';

export const StyledLink = styled.a`
  display: block;
  font-size: 22px;
  transform: ${({ type }) => (type === 'next' ? 'scaleX(-1)' : null)};
  line-height: 22px;
`;

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === 'prev' ? 'row' : 'row-reverse')};
  align-items: center;

  .styled-nav-item__paragraph {
    display: none;

    ${({ theme }) => theme.mq.tablet} {
      display: block;
    }
  }
`;

export default StyledNavItem;
