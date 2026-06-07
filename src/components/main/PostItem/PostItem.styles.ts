import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled(Link)`
  display: flex;
  align-items: flex-start;
  gap: 28px;
  padding: 28px 0;
  color: inherit;
  border-bottom: 1px solid #ececec;

  &:first-child {
    padding-top: 0;
  }

  & h3 {
    transition: color 0.15s ease;
  }

  &:hover h3 {
    color: #2a7ae2;
  }

  @media (max-width: 640px) {
    gap: 16px;
  }
`

export const TextSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #8a8a8a;
`

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  color: #1f1f1f;
  word-break: keep-all;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const Description = styled.p`
  display: -webkit-box;
  overflow: hidden;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.6;
  color: #5a5a5a;
  text-overflow: ellipsis;
  word-break: keep-all;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px 10px;
  margin-top: 4px;
  font-size: 12px;
  color: #8a8a8a;

  & > span::before {
    content: "#";
    margin-right: 2px;
  }
`

export const ImageSide = styled.div`
  flex-shrink: 0;
  overflow: hidden;
  width: 160px;
  aspect-ratio: 16 / 10;
  border-radius: 6px;
  background-color: #f4f4f4;

  @media (max-width: 640px) {
    display: none;
  }
`
