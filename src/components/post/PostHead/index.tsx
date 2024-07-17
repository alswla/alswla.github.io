import { IGatsbyImageData } from "gatsby-plugin-image"
import * as H from "./PostHead.styles"

type PostHeadProps = {
  title: string
  category: string[]
  date: string
  thumbnail: IGatsbyImageData
}

export default function PostHead({
  title,
  category,
  date,
  thumbnail,
}: PostHeadProps) {
  return (
    <H.Wrapper>
      <H.Title>{title}</H.Title>
      <H.Information>
        <H.Category>
          {category.map(item => (
            <div key={item}>#{item}</div>
          ))}
        </H.Category>
        <div>{date}</div>
      </H.Information>
      <H.Thumbnail image={thumbnail} alt={title} />
    </H.Wrapper>
  )
}
