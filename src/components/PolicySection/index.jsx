import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { TextHeading, TextParagraph } from '../TextComponents';

const Wrapper = styled.div`
  padding-top: 2rem;

  li {
    list-style: none;
    margin: 2rem 0;
  }
  p {
    font-size: 1.6rem;
    line-height: 32px;
  }

  .nested-list {
    font-size: 1.6rem;
    line-height: 32px;
    list-style-type: lower-latin;
    margin-left: 1.5rem;
  }
`;

const ListNumber = styled.div`
  float: left;
  font-size: 1.6rem;
  line-height: 32px;
  width: 20px;
`;

export default function PolicySection({ sectionData }) {
  return (
    <Wrapper>
      <TextHeading>{sectionData.heading}</TextHeading>
      {sectionData.paragraphs.map((paragraph, index) => {
        if (!paragraph.list) {
          return (
            <li key={uuid()}>
              <ListNumber>{`${index + 1}.`}</ListNumber>
              <TextParagraph>{paragraph}</TextParagraph>
            </li>
          );
        }
        return (
          <li key={uuid()}>
            <ListNumber>{`${index + 1}.`}</ListNumber>
            <p>{paragraph.mainText}</p>
            <ul>
              {paragraph.list.map((item) => (
                <li className="nested-list" key={uuid()}>
                  {item}
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </Wrapper>
  );
}
