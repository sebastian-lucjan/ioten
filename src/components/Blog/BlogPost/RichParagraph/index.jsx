import { Code, ParagraphWrapper } from '../BlogPost.styles';

export default function RichParagraph({ children }) {
  const richChildren = children.map((child) => {
    console.log('child: ', child);
    if (child?.type === 'code') {
      return <Code>{child}</Code>;
    }
    if (child === '') return null;

    return child;
  });

  return <ParagraphWrapper>{richChildren}</ParagraphWrapper>;
}
