import { v4 as uuid } from 'uuid';
import policyData from 'src/data/policyData';
import { NextSeo } from 'next-seo';
import BaseLayout from 'src/components/BaseLayout';
import Grid from 'src/components/Grid';
import { TextHeading } from 'src/components/TextComponents';
import PolicySection from 'src/components/PolicySection';
import theme from 'src/assets/styles/theme';
import IdeaInterlude from 'src/components/IdeaInterlude';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import { ContentContainer, Wrapper } from 'src/components/Policy/Policy.styles';

export default function PolicyPage() {
  const { heading, sectionsArray, metaData } = policyData;

  return (
    <MainSectionWrapper background={theme.color.white}>
      <NextSeo title={metaData.title} description={metaData.description} />
      <BaseLayout footerGridColor={theme.gradient.yellowToGray}>
        <Wrapper>
          <ContentContainer>
            <TextHeading size="lg" as="h1">
              {heading}
            </TextHeading>
            <ol>
              {sectionsArray.map((section) => (
                <PolicySection sectionData={section} key={uuid()} />
              ))}
            </ol>
            <Grid colors={{ lines: theme.gradient.grayToYellow }} />
          </ContentContainer>
        </Wrapper>
        <IdeaInterlude />
      </BaseLayout>
    </MainSectionWrapper>
  );
}
