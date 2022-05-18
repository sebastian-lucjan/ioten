import BaseLayout from 'src/components/BaseLayout';
import FourOneFour from 'src/components/FourOneFour';
import IdeaInterlude from 'src/components/IdeaInterlude';
import data404 from 'src/data/404data';
import { NextSeo } from 'next-seo';

export default function Page404() {
  const { title, description, canonical, ogData } = data404;

  return (
    <>
      <NextSeo title={title} description={description} canonical={canonical} openGraph={ogData} noindex nofollow />

      <BaseLayout>
        <FourOneFour />
        <IdeaInterlude />
      </BaseLayout>
    </>
  );
}
