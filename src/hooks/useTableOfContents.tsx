import { useState, useMemo } from "react"
import { HEADERS } from "./useRenderRichText"

type ContentType = {
  content: {
    content: {
      data: unknown
      marks: unknown
      nodeTypes: string
      value: string
    }[]
    nodeType: string
  }[]
  nodeType: string
}

export default function useTableOfContents(rawContent: string) {
  const [activeId, setIsActiveId] = useState<string | null>(null)

  const toc = useMemo(() => {
    const { content } = JSON.parse(rawContent) as ContentType

    const headers = content.filter(item =>
      HEADERS.find(header => header === item.nodeType),
    )

    const minDepth = Math.min(
      ...headers.map(({ nodeType }) =>
        parseInt(nodeType.charAt(nodeType.length - 1)),
      ),
    )

    return headers.map(({ nodeType, content }) => {
      const title = content[0].value
      const id = `${title.replaceAll(" ", "-")}_`
      const depth = parseInt(nodeType.charAt(nodeType.length - 1)) - minDepth

      return { id, title, depth }
    })
  }, [rawContent])

  return { toc, activeId }
}
