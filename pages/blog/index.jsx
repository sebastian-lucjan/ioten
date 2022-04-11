import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import { blogData } from 'src/data/blogData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Blog from '../../src/components/Blog';

const BlogPage = () => {
  const {
    headSection: { title, description },
  } = blogData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <Blog />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
};

export default BlogPage;
