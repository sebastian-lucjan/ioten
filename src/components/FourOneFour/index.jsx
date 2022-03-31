import theme from 'src/assets/styles/theme';
import Grid from 'src/components/Grid';
import MainSectionWrapper from 'src/components/MainSectionWrapper/MainSectionWrapper.styles';
import FourOneFourImage from 'src/components/FourOneFour/FourOneFourImage';
import FourOneFourInfo from 'src/components/FourOneFour/FourOneFourInfo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Wrapper from './FourOneFour.styles';

const FourOneFour = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/404');
  }, []);

  const {
    gradient: { lightGray: LightGrayGradient, grayToYellow },
  } = theme;

  return (
    <MainSectionWrapper colors={{ background: LightGrayGradient }}>
      <Wrapper>
        <FourOneFourImage />
        <FourOneFourInfo />
      </Wrapper>
      <Grid colors={{ lines: grayToYellow }} />
    </MainSectionWrapper>
  );
};

export default FourOneFour;
