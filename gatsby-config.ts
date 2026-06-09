import type { GatsbyConfig } from "gatsby"
import dotenv from "dotenv"
import remarkGfm from "remark-gfm"

dotenv.config()

const config: GatsbyConfig = {
  siteMetadata: {
    title: `alswla_blog`,
    siteUrl: `https://alswla.github.io`,
    author: `@alswla`,
    description: `alswla's tech blog, where I write about web development(Frontend), and other tech-related topics.`,
  },
  graphqlTypegen: true,
  jsxRuntime: "automatic",
  plugins: [
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
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 1000, linkImagesToOriginal: false },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_ID],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
  ],
}

export default config
