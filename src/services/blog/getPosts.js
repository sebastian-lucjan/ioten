import contentfulClient from 'src/services/contentfulClient';
import { sortArrayByTime } from 'src/utils/date';

export const getAllPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });

  return sortArrayByTime(res.items);
};

export const getHighlightedPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });
  const highlightedPosts = res.items.filter((post) => post.fields.isMainPage);

  // sort by create date
  const dateSortedPosts = sortArrayByTime(highlightedPosts);

  // display only 3 posts on mail page BlogShort area
  return dateSortedPosts.slice(0, 3);
};
