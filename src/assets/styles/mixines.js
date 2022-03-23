import theme from './theme';

const mixines = {
  soonLabel: `
      line-height: 16px;
      position: absolute;
      display: block;
      content: 'SOON';
      top: 2px;
      width: 36px;
      height: 14px;
      text-align: center;
      background-color: ${theme.color.lightGray};
      border-radius: 3px;
      color: ${theme.color.white};
      font-size: ${theme.font.size.xsText};
      font-family: ${theme.font.family.myriadPro.black};
  `,
};

export default mixines;
