/* eslint-disable @typescript-eslint/camelcase */
const siteMetadata = {
  title: `あのぞんブログ`,
  author: `anozon`,
  description: `フロントエンド中心のブログ`,
  siteUrl: `https://blog.anozon.me/`,
  social: {
    twitter: `anozon`,
  },
}

const feedsQuery = `
{
  allMarkdownRemark(
    filter: { frontmatter: { status: { ne: "draft" } } },
    sort: { order: DESC, fields: [frontmatter___date] },
  ) {
    edges {
      node { excerpt, html, fields { slug }, frontmatter { title date } }
    }
  }
}
`

module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-catch-links',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              usePrefix: ['oembed', 'video'],
              providers: { exclude: [] },
            },
          },
          {
            resolve: 'gatsby-remark-embed-gist',
            options: {
              username: 'elzup',
              includeDefaultCss: true,
            },
          },
          'gatsby-remark-prismjs-title',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              quality: 90,
              linkImagesToOriginal: true,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          'gatsby-plugin-twitter',
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                js: 'javascript',
                sh: 'bash',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: { superscript_types: /(SuperType)/ },
                  insertBefore: {
                    function: { superscript_keywords: /(superif|superelse)/ },
                  },
                },
              ],
              prompt: { user: 'root', host: 'localhost', global: false },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-49286104-10',
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#f9f7f7`,
        theme_color: `#112d4e`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.png`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    String(site.siteMetadata.siteUrl) +
                    String(edge.node.fields.slug),
                  guid:
                    String(site.siteMetadata.siteUrl) +
                    String(edge.node.fields.slug),
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: feedsQuery,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
  ],
}
