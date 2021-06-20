require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Cristian Turmacu',
    description:
      'Personal portfolio website, made to showcase my projects and contact information.',
    url: 'https://www.cristianturmacu.com',
    image: '/images/profileimg.jpg',
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.svg',
        icons: [
          {
            src: 'src/images/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        cache_busting_mode: 'none',
        name: `Cristian Turmacu`,
        short_name: `Cristian Turmacu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00ADB5`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/projects/`],
      },
    },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [`Nunito`, `Fira Code`],
        display: 'swap',
        attributes: {
          rel: 'stylesheet prefetch',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        workboxConfig: {
          globPatterns: ['src/images/logo.png'],
        },
      },
    },
  ],
};
