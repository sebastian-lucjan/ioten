import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { TextHeading, TextParagraph } from '../TextComponents';

const Wrapper = styled.div`
  padding-top: 2rem;

  li {
    //list-style: none;
  }

  p {
    padding-bottom: 2rem;
  }
`;

export default function PolicySection({ sectionData }) {
  return (
    <Wrapper>
      <TextHeading>{sectionData.heading}</TextHeading>
      {sectionData.paragraphs.map((paragraph) => {
        if (!paragraph.list) {
          return (
            <li>
              <TextParagraph>{paragraph}</TextParagraph>
            </li>
          );
        }
        return (
          <>
            <li>{paragraph.mainText}</li>
            {paragraph.list.map((item) => (
              <p key={uuid()}>{item}</p>
            ))}
          </>
        );
      })}
    </Wrapper>
  );
}
