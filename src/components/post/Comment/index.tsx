import { useEffect, useRef } from "react"
import styled from "styled-components"

const ATTRIBUTES = {
  src: "https://utteranc.es/client.js",
  repo: "alswla/alswla.github.io",
  "issue-term": "pathname",
  label: "Comment",
  theme: `github-light`,
  crossorigin: "anonymous",
  async: "true",
}

const Wrapper = styled.div`
  width: 100%;
`

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current === null) return

    const utterances: HTMLScriptElement = document.createElement("script")

    Object.entries(ATTRIBUTES).forEach(([key, value]) =>
      utterances.setAttribute(key, value),
    )

    ref.current?.appendChild(utterances)

    return () => {
      if (ref.current?.hasChildNodes())
        ref.current.removeChild(ref.current.childNodes[0])
    }
  }, [])

  return <Wrapper ref={ref} />
  // return <div ref={ref} />
}
