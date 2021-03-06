import Head from 'next/head';

const HeadMeta = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
      <link rel="manifest" href="icons/site.webmanifest" />
      <link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />

      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      <meta name="title" content="ioten - tworzenie firmowych stron internetowych" />
      <meta name="keywords" content="ioten, tworzenie kreatywnych stron internetowych, strony internetowe dla firm, budowanie stron internetowych" />

      <meta property="og:locale" content="pl_PL" />

      <title>ioten - tworzenie firmowych stron internetowych</title>
    </Head>
  );
};

export default HeadMeta;
