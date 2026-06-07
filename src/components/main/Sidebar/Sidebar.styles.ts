import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.aside`
  position: sticky;
  top: 96px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1024px) {
    position: static;
  }
`

export const Heading = styled.h2`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1f1f1f;
`

export const TagList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const TagItem = styled.li<{ $selected: boolean }>`
  font-size: 14px;
  line-height: 2;
  font-weight: ${({ $selected }) => ($selected ? 700 : 400)};
  color: ${({ $selected }) => ($selected ? "#1f1f1f" : "#5a5a5a")};

  & a {
    transition: color 0.15s ease;
  }

  & a:hover {
    color: #1f1f1f;
  }
`

export const Count = styled.span`
  margin-left: 4px;
  color: #b0b0b0;
`

export { Link }
