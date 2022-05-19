const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const reactStrictMod = true;
  // const compiler = {
  //   styledComponents: true,
  // };

  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    //     SITE_KEY: process.env.SITE_KEY,
    //     SECRET_KEY: process.env.SECRET_KEY,
    //     MAIL_USER: process.env.MAIL_USER,
    //     MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    IS_PROD: isProd,
    NEXT_PUBLIC_EMAIL_USER: process.env.NEXT_PUBLIC_EMAIL_USER,
    NEXT_PUBLIC_EMAIL_PASS: process.env.NEXT_PUBLIC_EMAIL_PASS,
    HCAPTCHA_SITE_KEY: process.env.HCAPTCHA_SITE_KEY,
    HCAPTCHA_SECRET_KEY: process.env.HCAPTCHA_SECRET_KEY,
    HCAPTCHA_SERVICES_SITE_KEY: process.env.HCAPTCHA_SERVICES_SITE_KEY,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
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
