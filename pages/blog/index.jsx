import BaseLayout from 'src/components/BaseLayout';
import { blogData } from 'src/data/blogData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Blog from 'src/components/Blog';
import { NextSeo } from 'next-seo';

const BlogPage = () => {
  const { title, description, ogData, canonical } = blogData;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow />

      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <Blog />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
};

export default BlogPage;
