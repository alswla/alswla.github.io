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
  line-height: 2;
  word-break: break-word;

  @media (max-width: 640px) {
    gap: 56px;
    font-size: 15px;
    line-height: 1.8;
  }
`
