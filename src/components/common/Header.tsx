import { Link } from "gatsby"
import styled from "styled-components"
import { AiFillGithub } from "react-icons/ai"

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;
`

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 72px;
  margin: 0 auto;
  padding: 0 24px;

  @media (max-width: 768px) {
    height: 60px;
    padding: 0 16px;
  }
`

const Brand = styled(Link)`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #1f1f1f;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 22px;
  color: #4a4a4a;

  & > a {
    display: flex;
    transition: color 0.15s ease;
  }

  & > a:hover {
    color: #1f1f1f;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    gap: 10px;
  }
`

export default function Header() {
  return (
    <Wrapper>
      <Inner>
        <Brand to="/">alswla.dev</Brand>

        <Actions>
          <a href="https://github.com/alswla" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
        </Actions>
      </Inner>
    </Wrapper>
  )
}
