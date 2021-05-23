module.exports = {
  siteMetadata: {
    title: 'Cristian Turmacu',
  },
  plugins: [
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
  ],
};
