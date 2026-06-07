import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  width: calc(100% - 250px);
  aspect-ratio: 16 / 6;
  max-height: 260px;
  padding: 28px 32px;
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 100%;
    aspect-ratio: 16 / 7;
    max-height: 200px;
    padding: 20px 22px;
    gap: 10px;
  }
`

export const Title = styled.div`
  display: -webkit-box;
  max-height: 2.4em;
  overflow: hidden;
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-overflow: ellipsis;
  word-wrap: break-word;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3em;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const Information = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 400;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 12px;
    padding-bottom: 8px;
  }
`

export const Category = styled.div`
  display: flex;
  gap: 7px;
`

export const Thumbnail = styled(GatsbyImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.85) 130%
    );
  }
`
