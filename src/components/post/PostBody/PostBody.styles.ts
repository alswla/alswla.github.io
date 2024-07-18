import styled from "styled-components"

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 220px;
  grid-gap: 30px;
  justify-content: space-between;
  align-items: flex-start;
  /* justify-content: center; */
  /* align-items: center; */
  padding-top: 100px;
`
export const Content = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 100px;
  font-size: 16px;
  line-height: 2;
  word-break: break-word;
`
