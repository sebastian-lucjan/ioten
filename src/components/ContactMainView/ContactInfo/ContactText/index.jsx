import contactData from 'src/data/contactData';
import styled from 'styled-components';

export default function ContactText() {
  const {
    heading,
    text: [firstParagraph, secondParagraph],
  } = contactData.contactContent.intro;

  return (
    <StyledContactText>
      <h1 className="contact-details__header">{heading}</h1>

      <p className="contact-details__paragraph">{firstParagraph}</p>
      <p className="contact-details__paragraph">{secondParagraph}</p>
    </StyledContactText>
  );
}

const StyledContactText = styled.div`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.color.black};

  .contact-details__header {
    margin-bottom: 3rem;
    font-family: ${({ theme }) => theme.font.family.myriadPro.bold};
    font-weight: lighter;
    font-size: ${({ theme }) => theme.font.size.headingMedium};
  }

  .contact-details__paragraph {
    margin-bottom: 2rem;
    font-family: ${({ theme }) => theme.font.family.myriadPro.light};
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  }

  ${({ theme }) => theme.mq.tablet} {
    .contact-details__header {
      font-size: ${({ theme }) => theme.font.size.headingSection};
    }

    .contact-details__paragraph {
      font-size: ${({ theme }) => theme.font.size.paragraph};
    }
  } ;
`;
