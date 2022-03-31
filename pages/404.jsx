import BaseLayout from 'src/components/BaseLayout';
import HeadSection from 'src/components/HeadSection';
import FourOneFour from 'src/components/FourOneFour';
import IdeaInterlude from 'src/components/IdeaInterlude';

export default function Home() {
  return (
    <>
      <HeadSection />
      <BaseLayout>
        <FourOneFour />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
}
