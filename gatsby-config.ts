import type { GatsbyConfig } from "gatsby"
import dotenv from "dotenv"

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `alswla_blog`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `@alswla`,
    description: `alswla's tech blog, where I write about web development(Frontend), and other tech-related topics.`,
  },
  graphqlTypegen: true,
  jsxRuntime: "automatic",
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}

export default config
