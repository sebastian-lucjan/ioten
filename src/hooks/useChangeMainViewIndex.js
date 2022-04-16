import { useContext } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import calculateIndex from 'src/helpers/calculateMainPagesIndexes';

const useChangeMainViewIndex = () => {
  const { pageIndex: idx, setCurrentPage } = useContext(MainPageContext);

  return (direction) => {
    if (direction === 'prev') {
      setCurrentPage(calculateIndex(idx, 'prev'));
    } else if (direction === 'next') {
      setCurrentPage(calculateIndex(idx, 'next'));
    }
  };
};

export default useChangeMainViewIndex;
