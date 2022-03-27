import { mainView } from 'src/data/mainPage';

const calculateIndex = (index, direction) => {
  let calcIndex;

  if (direction === 'prev') {
    calcIndex = index - 1 < 0 ? mainView.length - 1 : index - 1;
  } else if (direction === 'next') {
    calcIndex = index + 1 > mainView.length - 1 ? 0 : index + 1;
  }

  return calcIndex;
};

export default calculateIndex;
