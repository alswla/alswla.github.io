import { GatsbyLinkProps, Link } from "gatsby"

import styled from "styled-components"
import * as T from "./TableOfContents.styles"

type TocItem = {
  url?: string | null
  title?: string | null
  items?: TocItem[] | null
}
export type TocData = { items?: TocItem[] | null } | null | undefined

type TableOfContentsProps = {
  items: TocData
}

const Item = styled(({ className, children, to }: GatsbyLinkProps<unknown>) => (
  <Link to={to} className={className}>
    {children}
  </Link>
))<{ $depth: number }>`
  padding-left: ${({ $depth }) => $depth * 10}px;
  font-size: 13px;
  font-weight: 300;
  color: rgba(30, 31, 33, 0.5);
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s all;

  &:hover {
    color: rgba(30, 31, 33, 1);
    font-weight: 700;
  }
`

function flatten(
  items: TocItem[] | null | undefined,
  depth: number,
  acc: { url: string; title: string; depth: number }[],
) {
  if (!items) return
  for (const it of items) {
    if (it.url && it.title) acc.push({ url: it.url, title: it.title, depth })
    flatten(it.items, depth + 1, acc)
  }
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  if (!items?.items?.length) return null

  const flat: { url: string; title: string; depth: number }[] = []
  flatten(items.items, 0, flat)

  if (flat.length === 0) return null

  return (
    <T.Wrapper>
      <T.Title>Table of Content</T.Title>
      <T.Items>
        {flat.map(({ url, title, depth }) => (
          <Item key={url} to={url} $depth={depth}>
            {title}
          </Item>
        ))}
      </T.Items>
    </T.Wrapper>
  )
}
