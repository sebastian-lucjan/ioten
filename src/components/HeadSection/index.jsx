import Head from 'next/head';

// Indexing not allowed
const HeadSection = ({ title, description, indexing = false }) => {
  // const HeadSection = ({ title, description, ogData, indexing = true }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      {/* <meta property="og:title" content={ogData.title} /> */}
      {/* <meta property="og:description" content={ogData.description} /> */}
      {/* <meta property="og:image" content={ogData.image} /> */}
      {/* <meta property="og:url" content={ogData.url} /> */}
      <meta property="og:type" content="website" />

      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
      <script
        defer
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <title>{title}</title>
      {indexing ? <meta name="robots" content="all" /> : <meta name="robots" content="none" />}
    </Head>
  );
};

export default HeadSection;

/* //todo: change in production to: {index ? <meta name="robots" content="all" /> : <meta name="robots" content="none" />} */
