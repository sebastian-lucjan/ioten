import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import theme from 'src/assets/styles/theme';

const BlogShort = () => {
  const {
    color: { white, lightGray },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white, lines: lightGray }}>
      <p>Blog short - placeholder</p>
    </MainSectionWrapper>
  );
};

export default BlogShort;
