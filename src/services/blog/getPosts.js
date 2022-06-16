import contentfulClient from '../contentfulClient';

export const getAllPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });
  return res.items;
};

export const getHighlightedPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });
  return res.items;
  // console.log('allPost', allPosts);
  // const highlightedPosts = ;
  // return allPosts;
};
