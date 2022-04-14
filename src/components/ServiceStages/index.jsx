import servicesData from 'src/data/servicesData';
import Grid from 'src/components/Grid';
import theme from 'src/assets/styles/theme';
import styled from 'styled-components';
import StagesList from './StagesList';
import StagesIntro from './StagesIntro';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';

const Wrapper = styled.div``;

export default function ServicesStages() {
  const {
    stages: stagesArray,
    serviceStagesIntro: stagesCaption,
    axisStages: {
      intro: { heading, paragraph },
    },
  } = servicesData;

  const {
    color: { white },
    gradient: { yellowGrayYellow },
  } = theme;

  return (
    <MainSectionWrapper background={white}>
      <Wrapper>
        <Grid colors={{ lines: yellowGrayYellow }} />

        <StagesIntro heading={heading} paragraph={paragraph} stagesCaption={stagesCaption} />
        <StagesList stages={stagesArray} />
      </Wrapper>
    </MainSectionWrapper>
  );
}
