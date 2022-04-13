import servicesData from 'src/data/servicesData';
import Grid from 'src/components/Grid';
import theme from 'src/assets/styles/theme';
import StagesList from './StagesList';
import StagesIntro from './StagesIntro';
import MainSectionWrapper from '../MainSectionWrapper/MainSectionWrapper.styles';

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
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: white }}>
      <StagesIntro heading={heading} paragraph={paragraph} stagesCaption={stagesCaption} />
      <StagesList stages={stagesArray} />
      <Grid />
    </MainSectionWrapper>
  );
}
