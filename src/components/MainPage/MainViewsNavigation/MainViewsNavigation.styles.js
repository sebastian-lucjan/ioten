import styled from 'styled-components';
import { TextWrapper } from 'src/components/TextComponents';

const StyledMainViewsNavigation = styled(TextWrapper)`
  position: absolute;
  top: 85vh;
  width: 100%;
  height: 15vh;

  //flex inherit from TextWrapper
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export default StyledMainViewsNavigation;
