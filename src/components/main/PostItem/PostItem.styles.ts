import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 320px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;

  @media (max-width: 1024px) {
    width: calc(50% - 10px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Thumbnail = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  height: 200px;
`

export const Contents = styled.div`
  padding: 15px;
`

export const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  max-height: 2.4em;
  font-size: 18px;
  font-weight: 700;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2em;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Date = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 200;
`

export const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0 5px;
  margin-top: 10px;
  font-size: 12px;
`

export const Description = styled.div`
  display: -webkit-box;
  overflow: hidden;
  width: 100%;
  max-height: 3.6em;
  margin-top: 15px;
  font-size: 12px;
  font-weight: 300;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.2em;
`
