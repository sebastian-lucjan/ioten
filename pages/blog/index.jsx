import HeadSection from 'src/components/HeadSection';
import BaseLayout from 'src/components/BaseLayout';
import { blogData } from 'src/data/blogData';

const Blog = () => {
  const {
    headSection: { title, description },
  } = blogData;

  return (
    <>
      <HeadSection title={title} description={description} />
      <BaseLayout>
        <section>Blog</section>
      </BaseLayout>
    </>
  );
};

export default Blog;
