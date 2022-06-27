import contentfulClient from 'src/services/contentfulClient';
import { NextSeo } from 'next-seo';
import BaseLayout from 'src/components/BaseLayout';
import theme from 'src/assets/styles/theme';
import { getShortDescription } from 'src/utils/text';
import IdeaInterlude from 'src/components/IdeaInterlude';
import BlogPost from 'src/components/Blog/BlogPost';
import { readingTime } from 'src/services/blog/readingTime';

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

  const postReadingTime = readingTime();

  return {
    props: {
      post: items[0],
      postReadingTime,
    },
  };
}

function BlogArticle({ post, postReadingTime }) {
  const { title, blogPostBody, articleSlug } = post.fields;

  const shortDescription = getShortDescription(blogPostBody);

  return (
    <>
      <NextSeo title={title} description={shortDescription} canonical={`https://www.ioten.io/blog/${articleSlug}`} />
      {/* <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow /> */}

      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <BlogPost post={post} postReadingTime={postReadingTime} />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
}

export default BlogArticle;

// todo: index ! ogData
