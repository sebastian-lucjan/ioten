import contentfulClient from 'src/services/contentfulClient';
import { sortArrayByTime } from 'src/utils/date';
import readingTime from 'reading-time/lib/reading-time';

const postsWithReadingTime = (postsArray) =>
  postsArray.map((post) => {
    const resultPost = post;

    // all headings like h3, h4, h5 and paragraphs
    const conditions = ['paragraph', 'heading-'];

    const textField = post.fields.blogPostBody.content.filter((item) => conditions.some((condition) => item.nodeType.includes(condition)));

    const joinedTextFields = textField.reduce((acc, current) => {
      return acc.concat(current.content);
    }, []);

    const joinedTexts = joinedTextFields.reduce((accText, currText) => {
      return `${accText} ${currText.value}`;
    }, '');

    // add readingStats and change default 200 wordsPerMinute value to 160
    resultPost.fields.readingStats = readingTime(joinedTexts, { wordsPerMinute: 160 });

    return resultPost;
  });

export const getAllPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });

  return sortArrayByTime(postsWithReadingTime(res.items));
};

export const getHighlightedPosts = async () => {
  const client = contentfulClient;

  const res = await client.getEntries({ content_type: 'blogPost' });
  const highlightedPosts = res.items.filter((post) => post.fields.isMainPage);

  // sort by create date
  const dateSortedPosts = sortArrayByTime(postsWithReadingTime(highlightedPosts));

  // display only 3 posts on mail page BlogShort area
  return dateSortedPosts.slice(0, 3);
};
