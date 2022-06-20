// if it is custom date take it, if not, take createdAt date
export const customOrCurrentDate = (post) => (post.fields?.myCustomDateField ? post.fields.myCustomDateField : post.sys.createdAt);

// sort array of post by time(given or actual)
export const sortArrayByTime = (array) => {
  return array.sort((post, nextPost) => {
    const datePost = new Date(customOrCurrentDate(post));
    const dateNextPost = new Date(customOrCurrentDate(nextPost));

    // sort by create date
    return dateNextPost.getTime() - datePost.getTime();
  });
};

// change date into pl simple date: day, short month, year
export const dataFormatter = (post) => {
  const rawData = customOrCurrentDate(post);

  const formatter = new Intl.DateTimeFormat('pl', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(new Date(rawData));
};
