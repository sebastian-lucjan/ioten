import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';

const MottoInterlude = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: lightGray }}>
      <div>Motto placeholder</div>
    </MainSectionWrapper>
  );
};

export default MottoInterlude;
