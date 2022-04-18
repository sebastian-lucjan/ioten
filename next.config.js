const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMod = true;

  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    //     SITE_KEY: process.env.SITE_KEY,
    //     SECRET_KEY: process.env.SECRET_KEY,
    //     MAIL_USER: process.env.MAIL_USER,
    //     MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    IS_PROD: isProd,
    //     NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    //     NEXT_PUBLIC_GA_VERCEL_ID: process.env.NEXT_PUBLIC_GA_VERCEL_ID,
  };
  //
  const rewrites = () => {
    return [
      {
        source: '/o-nas',
        destination: '/about',
      },
      {
        source: '/uslugi',
        destination: '/services',
      },
      {
        source: '/blog',
        destination: '/blog',
      },
      {
        source: '/kontakt',
        destination: '/contact',
      },
      {
        source: '/wycena-projektu',
        destination: '/valuation',
      },
      {
        source: '/polityka-prywatnosci',
        destination: '/policy',
      },
    ];
  };

  const webpack = (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  };

  return {
    reactStrictMod,
    env,
    rewrites,
    webpack,
  };
};
