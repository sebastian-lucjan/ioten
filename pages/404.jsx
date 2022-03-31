import BaseLayout from 'src/components/BaseLayout';
import HeadSection from 'src/components/HeadSection';
import FourOneFour from 'src/components/FourOneFour';
import IdeaInterlude from 'src/components/IdeaInterlude';
import data404 from 'src/data/404data';

export default function Page404() {
  const {
    headSection: { title, description },
  } = data404;

  return (
    <>
      <HeadSection title={title} description={description} indexing={false} />
      <BaseLayout>
        <FourOneFour />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
}
