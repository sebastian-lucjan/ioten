// Get short description from long text

const maxCharactersNumber = 120;

export const getShortDescription = (blogPostBody) => {
  const attachedBlogPostBody = blogPostBody.content.reduce((acc, currentValue) => {
    const stringToAttach = currentValue.content.reduce((result, currValue) => {
      // prevent if rich text is a img asset
      if (currValue.nodeType === 'text') {
        return `${result} ${currValue.value}`;
      }

      // if is different asset than "text" return result string without currValue
      return result;
    }, '');

    return `${acc} ${stringToAttach}`;
  }, '');

  const shortDescription = attachedBlogPostBody.split(' ').reduce((acc, currentValue) => {
    if (acc.length < maxCharactersNumber) {
      return `${acc} ${currentValue}`;
    }

    return acc;
  });

  return `${shortDescription}...`;
};
