import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';

const MainPage = () => {
  const {
    color: { white, lightGray },
    // gradient: {},
  } = theme;

  return <MainSectionWrapper colors={{ background: white, lines: lightGray }}>Main Page - test</MainSectionWrapper>;
};

export default MainPage;
