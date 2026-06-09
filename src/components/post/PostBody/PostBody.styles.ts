import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 100px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding-top: 56px;
  }
`
export const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 100px;
  font-size: 16px;
  line-height: 1.75;
  word-break: break-word;

  @media (max-width: 640px) {
    gap: 56px;
    font-size: 15px;
    line-height: 1.65;
  }

  #content {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700;
      line-height: 1.4;
      margin-top: 2.4em;
      margin-bottom: 0.8em;
    }
    h1 {
      font-size: 1.8em;
    }
    h2 {
      font-size: 1.5em;
      padding-bottom: 0.3em;
      border-bottom: 1px solid #eee;
    }
    h3 {
      font-size: 1.25em;
    }
    h4 {
      font-size: 1.1em;
    }

    p {
      margin: 1.3em 0;
    }

    /* paragraph that's just a single bold phrase → treat as a sub-heading break */
    p:has(> strong:only-child) {
      margin-top: 2em;
      margin-bottom: 0.6em;
    }

    strong,
    b {
      font-weight: 700;
    }

    em,
    i {
      font-style: italic;
    }

    a {
      color: #2563eb;
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        color: #1d4ed8;
      }
    }

    ul,
    ol {
      padding-left: 1.5em;
      margin: 1.5em 0;
    }

    ul {
      list-style: disc;
    }
    ol {
      list-style: decimal;
    }

    li {
      margin: 0.6em 0;
    }

    /* a top-level bullet that is just one bold sentence → visible breathing room */
    #content > ul > li > p:first-child:has(> strong:only-child),
    #content > ul > li:has(> strong:only-child) {
      margin-top: 1.4em;
    }

    blockquote {
      margin: 1.2em 0;
      padding: 0.6em 1.1em;
      border-left: 4px solid #d1d5db;
      background: #f9fafb;
      color: #4b5563;

      p {
        margin: 0.4em 0;
      }
    }

    hr {
      margin: 2.4em 0;
      border: 0;
      border-top: 1px solid #e5e7eb;
    }

    img {
      max-width: 100%;
      height: auto;
      margin: 1em 0;
      border-radius: 6px;
    }

    table {
      display: block;
      width: 100%;
      overflow-x: auto;
      border-collapse: collapse;
      margin: 1.2em 0;
      font-size: 0.95em;
    }

    th,
    td {
      border: 1px solid #e5e7eb;
      padding: 0.55em 0.9em;
      text-align: left;
      vertical-align: top;
      line-height: 1.6;
    }

    thead th {
      background: #f3f4f6;
      font-weight: 700;
    }

    tbody tr:nth-child(even) {
      background: #fafafa;
    }

    code:not([class*="language-"]) {
      background: #f3f4f6;
      padding: 0.15em 0.4em;
      border-radius: 4px;
      font-size: 0.92em;
      color: #be185d;
    }

    pre {
      margin: 1.6em 0;
      padding: 1em 1.2em;
      background: #1e1e1e;
      border-radius: 8px;
      overflow-x: auto;
      line-height: 1.6;
      font-size: 0.92em;

      code {
        background: transparent;
        color: #d4d4d4;
        padding: 0;
      }
    }

    .gatsby-resp-image-wrapper {
      margin: 1.2em 0 !important;
    }
  }
`
