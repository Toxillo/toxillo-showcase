module.exports = {
  siteMetadata: {
    title: `Work in Progress`,
    siteUrl: `https://www.toxillo.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "334887328"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `blog`,
      path: `${__dirname}/projects`,
    }
  }, {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Open Sans`,
          file: `https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap`,
        },
        {
          name: `Noto Serif Japanese`,
          file: `https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@700&display=swap`,
        }
      ],
    },
  }, "gatsby-plugin-sass", "gatsby-plugin-mdx"]
};