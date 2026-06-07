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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    font-size: 12px;
    padding-bottom: 8px;
  }
`

export const Category = styled.div`
  display: flex;
  gap: 7px;
`

export const PlainHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: calc(100% - 250px);
  padding: 8px 0 4px;
  border-bottom: 1px solid #ececec;

  @media (max-width: 900px) {
    width: 100%;
    gap: 12px;
  }
`

export const PlainTitle = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #1f1f1f;
  word-break: keep-all;

  @media (max-width: 900px) {
    font-size: 24px;
  }
`

export const PlainMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px 12px;
  padding-bottom: 18px;
  font-size: 13px;
  color: #8a8a8a;

  @media (max-width: 900px) {
    font-size: 12px;
    padding-bottom: 14px;
  }
`

export const PlainDate = styled.span`
  margin-left: auto;
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
