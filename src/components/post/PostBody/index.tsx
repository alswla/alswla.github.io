import { ReactNode, useEffect } from "react"
import Prism from "prismjs"

import * as B from "./PostBody.styles"
import "prismjs/components/prism-typescript"
import "prismjs/components/prism-jsx"
import "prismjs/components/prism-tsx"

import Comment from "../Comment"
import TableOfContents, { TocData } from "../TableOfContents"

type PostBodyProps = {
  children: ReactNode
  tableOfContents: TocData
}

export default function PostBody({ children, tableOfContents }: PostBodyProps) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <B.Wrapper>
      <B.Content>
        <div id="content">{children}</div>
        <Comment />
      </B.Content>
      <TableOfContents items={tableOfContents} />
    </B.Wrapper>
  )
}
