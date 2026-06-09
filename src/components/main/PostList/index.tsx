import { IGatsbyImageData } from "gatsby-plugin-image"

import PostItem from "../PostItem"
import * as L from "./PostList.styles"

type PostListProps = {
  posts: Queries.IndexPageQuery["allMdx"]["nodes"]
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <L.Empty>해당 카테고리에 글이 아직 없습니다.</L.Empty>
  }

  return (
    <L.Wrapper>
      {posts.map(({ frontmatter }) => (
        <PostItem
          key={frontmatter?.slug as string}
          title={frontmatter?.title as string}
          date={frontmatter?.date as string}
          category={(frontmatter?.category ?? []) as string[]}
          description={frontmatter?.description as string}
          slug={frontmatter?.slug as string}
          thumbnail={
            frontmatter?.thumbnail?.childImageSharp
              ?.gatsbyImageData as IGatsbyImageData | null
          }
        />
      ))}
    </L.Wrapper>
  )
}
