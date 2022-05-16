import BaseLayout from 'src/components/BaseLayout';
import { blogData } from 'src/data/blogData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Blog from 'src/components/Blog';
import { NextSeo } from 'next-seo';
import { useRef } from 'react';
import useScrollTop from '../../src/hooks/useScrollTop';

const BlogPage = () => {
  const ref = useRef(null);

  const hideScrollTop = useScrollTop(ref, '0px');

  const {
    headSection: { title, description },
  } = blogData;

  return (
    <>
      <NextSeo title={title} description={description} />
      <BaseLayout hideScrollTop={hideScrollTop} footerGridColor={theme.gradient.yellowToGray}>
        <Blog setRef={ref} />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
};

export default BlogPage;
