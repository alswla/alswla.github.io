import { ReactNode } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Header from "./Header"
import Footer from "./Footer"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:
      "Pretendard",
      -apple-system,
      BlinkMacSystemFont,
      "Helvetica Neue",
      "Apple SD Gothic Neo",
      Arial,
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #__gatsby,
  #gatsby-focus-wrapper {
    min-height: 100%;
  }

  body {
    background-color: #ffffff;
    color: #1f1f1f;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Contents = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 80px;

  @media (max-width: 768px) {
    padding: 32px 16px 60px;
  }
`

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Contents>{children}</Contents>
      <Footer />
    </Wrapper>
  )
}
