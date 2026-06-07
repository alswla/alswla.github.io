import { IGatsbyImageData } from "gatsby-plugin-image"

import PostItem from "../PostItem"
import * as L from "./PostList.styles"

type PostListProps = {
  posts: Queries.IndexPageQuery["allContentfulPost"]["nodes"]
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <L.Empty>해당 카테고리에 글이 아직 없습니다.</L.Empty>
  }

  return (
    <L.Wrapper>
      {posts.map(({ title, category, slug, date, thumbnail, description }) => (
        <PostItem
          key={slug}
          title={title as string}
          date={date as string}
          category={(category ?? []) as string[]}
          description={description?.description as string}
          slug={slug as string}
          thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData | null}
        />
      ))}
    </L.Wrapper>
  )
}
