import styled from "styled-components"

const Wrapper = styled.footer`
  width: 100%;
  margin-top: auto;
  border-top: 1px solid #ececec;
  background-color: #fafafa;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  font-size: 13px;
  line-height: 1.6;
  color: #8a8a8a;

  @media (max-width: 768px) {
    padding: 24px 16px;
    font-size: 12px;
  }
`

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <div>alswla&apos;s tech blog</div>
        <div>© {new Date().getFullYear()} alswla.dev. All rights reserved.</div>
      </Inner>
    </Wrapper>
  )
}
