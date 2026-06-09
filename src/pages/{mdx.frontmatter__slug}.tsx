import { PageProps, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"
import PostHead from "../components/post/PostHead"
import PostBody from "../components/post/PostBody"

export default function Post({
  data: { mdx },
  children,
}: PageProps<Queries.PostPageQuery>) {
  return (
    <>
      <PostHead
        title={mdx?.frontmatter?.title as string}
        category={(mdx?.frontmatter?.category ?? []) as string[]}
        date={mdx?.frontmatter?.date as string}
        thumbnail={
          mdx?.frontmatter?.thumbnail?.childImageSharp
            ?.gatsbyImageData as IGatsbyImageData
        }
      />
      <PostBody tableOfContents={mdx?.tableOfContents}>{children}</PostBody>
    </>
  )
}

export const query = graphql`
  query PostPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        date
        category
        description
        thumbnail {
          childImageSharp {
            gatsbyImageData(width: 1000)
          }
        }
      }
      tableOfContents
    }
  }
`
