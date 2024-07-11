import { useState, useEffect } from "react"
import { IGatsbyImageData } from "gatsby-plugin-image"

import PostItem from "../PostItem"
import * as L from "./PostList.styles"

type PostListProps = {
  posts: Queries.IndexPageQuery["allContentfulPost"]["nodes"]
}

function initPosts(posts: PostListProps["posts"]) {
  return posts.slice(0, 10).map(post => ({ post, groupKey: 0 }))
}

export default function PostList({ posts }: PostListProps) {
  const [items, setItems] = useState(initPosts(posts))

  const handleLoadPosts = (nextGroupKey: number) => {
    const nextPosts = posts
      .slice(nextGroupKey * 10, (nextGroupKey + 1) * 10)
      .map(post => ({ post, groupKey: nextGroupKey }))

    setItems(prevItems => [...prevItems, ...nextPosts])
  }

  useEffect(() => setItems(initPosts(posts)), [posts])

  return (
    <L.Wrapper
      gap={20}
      onRequestAppend={({ groupKey }: { groupKey: number }) => {
        const nextGroupKey = parseInt(groupKey?.toString() ?? "0") + 1

        if (posts.length <= nextGroupKey * 10) {
          return
        }

        handleLoadPosts(nextGroupKey)
      }}
    >
      {items.map(
        ({
          post: { title, category, slug, date, thumbnail, description },
          groupKey,
        }) => (
          <PostItem
            title={title as string}
            date={date as string}
            category={category as string[]}
            thumbnail={thumbnail?.gatsbyImageData as IGatsbyImageData}
            description={description?.description as string}
            slug={slug as string}
            key={slug}
            data-grid-groupkey={groupKey}
          />
        ),
      )}
      {items.length < 3 ? <div /> : null}
    </L.Wrapper>
  )
}
