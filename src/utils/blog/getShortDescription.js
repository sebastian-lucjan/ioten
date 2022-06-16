// Get short description from long text

const maxCharactersNumber = 120;

export const getShortDescription = (bodyText) => {
  const attachedBodyText = bodyText.content.reduce((acc, currentValue) => {
    return `${acc} ${currentValue.content[0].value}`;
  }, '');

  const shortDescription = attachedBodyText.split(' ').reduce((acc, currentValue) => {
    if (acc.length < maxCharactersNumber) {
      return `${acc} ${currentValue}`;
    }

    return acc;
  });

  console.log('shortDescription', shortDescription);

  return `${shortDescription}...`;
};
