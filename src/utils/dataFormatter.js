export const dataFormatter = (rawData) => {
  const formatter = new Intl.DateTimeFormat('pl', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return formatter.format(new Date(rawData));
};

// export const dataFormatter = (rawDate) => {
//   const date = new Date(rawDate);
//
//   const year = new Intl.DateTimeFormat('pl', {
//     year: 'numeric',
//   }).format(date);
//   const month = new Intl.DateTimeFormat('pl', {
//     month: 'long',
//   }).format(date);
//   const day = new Intl.DateTimeFormat('pl', {
//     day: 'numeric',
//   }).format(date);
//
//   return `${year} ${month} ${day}`;
// };
