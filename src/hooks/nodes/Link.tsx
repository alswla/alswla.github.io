import { AnchorHTMLAttributes, ReactNode } from "react"
import styled from "styled-components"

type LinkProps = {
  children: ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Component = styled.a`
  color: #4263eb;
  text-decoration: none;
`

export default function Link({ children, ...props }: LinkProps) {
  return <Component {...props}>{children}</Component>
}
