import styled from "styled-components"

export const Wrapper = styled.div`
  position: sticky;
  top: 100px;
  width: 100%;

  @media (max-width: 900px) {
    display: none;
  }
`

export const Title = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #000000;
  font-size: 15px;
  font-weight: 600;
`

export const Items = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 20px;
`
