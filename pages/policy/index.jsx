import { v4 as uuid } from 'uuid';
import policyData from 'src/data/policyData';
import { NextSeo } from 'next-seo';
import BaseLayout from 'src/components/BaseLayout';
import Grid from 'src/components/Grid';
import styled from 'styled-components';
import { TextHeading } from 'src/components/TextComponents';
import PolicySection from 'src/components/PolicySection';
import theme from '../../src/assets/styles/theme';

const Wrapper = styled.section`
  position: relative;
  padding: 80px 40px 40px 40px;
`;

export default function PolicyPage() {
  const { heading, sectionsArray, metaData } = policyData;

  return (
    <BaseLayout footerGridColor={theme.color.lightGray}>
      <NextSeo title={metaData.title} description={metaData.description} />
      <Wrapper>
        <TextHeading size="lg" as="h1">
          {heading}
        </TextHeading>
        <ol>
          {sectionsArray.map((section) => (
            <PolicySection sectionData={section} key={uuid()} />
          ))}
        </ol>
        <Grid />
      </Wrapper>
    </BaseLayout>
  );
}
