import type { GatsbyNode } from "gatsby"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
      type Mdx implements Node {
        frontmatter: MdxFrontmatter
      }
      type MdxFrontmatter {
        title: String
        slug: String
        date: Date @dateformat
        category: [String]
        description: String
        thumbnail: File @fileByRelativePath
      }
    `)
  }
