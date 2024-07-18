import { useEffect } from "react"
import Prism from "prismjs"

import * as B from "./PostBody.styles"
import "prismjs/components/prism-typescript"

import Comment from "../Comment"
import TableOfContents from "../TableOfContents"
import useRenderRichText from "../../../hooks/useRenderRichText"

type PostBodyProps = {
  content: Queries.ContentfulPostContent
}

export default function PostBody({ content }: PostBodyProps) {
  const richText = useRenderRichText(content)

  useEffect(Prism.highlightAll, [])

  return (
    <B.Wrapper>
      <B.Content>
        <div id="content">{richText}</div>
        <Comment />
      </B.Content>
      <TableOfContents content={content} />
    </B.Wrapper>
  )
}
