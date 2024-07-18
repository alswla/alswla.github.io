import { GatsbyLinkProps, Link } from "gatsby"

import styled from "styled-components"
import * as T from "./TableOfContents.styles"

import useRenderRichText from "../../../hooks/useRenderRichText"
import useTableOfContents from "../../../hooks/useTableOfContents"

type TableOfContentProps = {
  content: Queries.ContentfulPostContent
}

export const Item = styled(
  ({ className, children, to }: GatsbyLinkProps<unknown>) => (
    <Link to={to} className={className}>
      {children}
    </Link>
  ),
)<{ $depth: number; $focused: boolean }>`
  padding-left: ${({ $depth }) => $depth * 10}px;
  font-size: 13px;
  font-weight: ${({ $focused }) => ($focused ? 700 : 300)};
  color: rgba(30, 31, 33, ${({ $focused }) => ($focused ? 1 : 0.5)});
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s all;
`

export default function TableOfContents({
  content: { raw },
}: TableOfContentProps) {
  const { toc, activeId } = useTableOfContents(raw as string)

  return (
    <T.Wrapper>
      <T.Title>Table of Content</T.Title>
      <T.Items>
        {toc.map(({ id, title, depth }) => (
          <Item
            key={id}
            to={`#${id}`}
            $depth={depth}
            $focused={id === activeId}
          >
            {title}
          </Item>
        ))}
      </T.Items>
    </T.Wrapper>
  )
}
