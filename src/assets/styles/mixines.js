import { css } from 'styled-components';
import theme from './theme';

export const soonLabel = css`
  position: relative;

  &::after {
    line-height: 16px;
    position: absolute;
    display: block;
    content: 'SOON';
    top: 2px;
    left: 100%;
    margin-left: 1rem;
    width: 36px;
    height: 14px;
    text-align: center;
    background-color: ${theme.color.lightGray};
    border-radius: 3px;
    color: ${theme.color.white};
    font-size: ${theme.font.size.xsText};
    font-family: ${theme.font.family.myriadPro.black};
  }
`;
