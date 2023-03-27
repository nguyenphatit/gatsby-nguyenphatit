import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "nguyenphatit",
    description: `nguyenphatit`,
    siteUrl: `https://nguyenphatit.github.io/`,
    twitterUsername: `@nguyenphatit`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84969037662",
      email: "nguyenphatit.nl@gmail.com",
      contactType: "Support"
    }
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          `G-9STG9HVMM3`, // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nguyenphatit`,
        short_name: `PhatIT`,
        start_url: `/`,
        background_color: `#F1F1F1`,
        theme_color: `#C7E66E`,
        display: `standalone`,
        icon: `src/images/svg/icon.svg`,
        lang: `en`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
  ],
}

export default config
