import contentfulClient from 'src/services/contentfulClient';
import { NextSeo } from 'next-seo';
import BaseLayout from 'src/components/BaseLayout';
import theme from 'src/assets/styles/theme';
import { getShortDescription } from 'src/utils/text';
import IdeaInterlude from 'src/components/IdeaInterlude';
import BlogPost from 'src/components/Blog/BlogPost';

export async function getStaticPaths() {
  const res = await contentfulClient.getEntries({ content_type: 'blogPost' });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.articleSlug },
    };
  });

  return {
    paths,
    fallback: false, // 404 page instead fallback page
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { items } = await contentfulClient.getEntries({ content_type: 'blogPost', 'fields.articleSlug': slug });

  return {
    props: {
      post: items[0],
    },
  };
}

function BlogArticle({ post }) {
  const { title, blogPostBody } = post.fields;

  const shortDescription = getShortDescription(blogPostBody);

  return (
    <>
      <NextSeo title={title} description={shortDescription} noindex nofollow />
      {/* <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow /> */}

      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <BlogPost post={post} />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
}

export default BlogArticle;

// todo: index ! ogData
