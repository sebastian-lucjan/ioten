import MainPageContext from 'src/context/mainPageContext';
import { useContext } from 'react';

export default function UseIsWhiteTextIntersection(whiteNavigationText) {
  const { pageIndex } = useContext(MainPageContext);

  return whiteNavigationText && pageIndex === 1; // dark page "design and functionality"
}
