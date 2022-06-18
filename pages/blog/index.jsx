import BaseLayout from 'src/components/BaseLayout';
import { blogData } from 'src/data/blogData';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import Blog from 'src/components/Blog';
import { NextSeo } from 'next-seo';
import { createContext } from 'react';
import { getAllPosts } from 'src/services/blog/getPosts';

export const BlogContext = createContext({});

export const getServerSideProps = async () => {
  const allPosts = await getAllPosts();

  return { props: { posts: allPosts } };
};

const BlogPage = ({ posts }) => {
  const { title, description, ogData, canonical } = blogData;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow />

      <BlogContext.Provider value={posts}>
        <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
          <Blog />
          <IdeaInterlude />
        </BaseLayout>
      </BlogContext.Provider>
    </>
  );
};

export default BlogPage;

// todo: indexing
