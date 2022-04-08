import Grid from 'src/components/Grid';
import { blogData } from 'src/data/blogData';
import theme from 'src/assets/styles/theme';
import { TextCaption } from 'src/components/TextComponents';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { StyledBlogHeader } from 'src/components/Blog/BlogHeader/BlogHeader.styles';

export default function BlogHeader() {
  const { category, heading } = blogData.intro;
  const {
    color: { lightGray },
    gradient: { lightGray: lightGrayGradient, grayToTransparent },
  } = theme;

  return (
    <MainSectionWrapper smaller colors={{ background: lightGrayGradient }}>
      <StyledBlogHeader>
        <TextCaption className="blog-header__category">{category}</TextCaption>
        <h1 className="blog-header__heading">{heading}</h1>
        <Grid colors={{ lines: lightGray, innerLines: grayToTransparent }} />
      </StyledBlogHeader>
    </MainSectionWrapper>
  );
}
