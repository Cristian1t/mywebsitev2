require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Cristian Turmacu',
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Nunito`, `Fira Code`],
        display: 'swap',
      },
    },
    'gatsby-plugin-remove-serviceworker',
  ],
};
