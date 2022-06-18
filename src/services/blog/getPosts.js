import contentfulClient from '../contentfulClient';

export const getAllPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });
  return res.items;
};

export const getHighlightedPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });
  const highlightedPosts = res.items.filter((post) => post.fields.isMainPage);

  return highlightedPosts.slice(0, 3);
};
