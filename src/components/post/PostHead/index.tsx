import { IGatsbyImageData } from "gatsby-plugin-image"
import * as H from "./PostHead.styles"

type PostHeadProps = {
  title: string
  category: string[]
  date: string
  thumbnail?: IGatsbyImageData | null
}

export default function PostHead({
  title,
  category,
  date,
  thumbnail,
}: PostHeadProps) {
  if (!thumbnail) {
    return (
      <H.PlainHeader>
        <H.PlainTitle>{title}</H.PlainTitle>
        <H.PlainMeta>
          {category.map(item => (
            <span key={item}>#{item}</span>
          ))}
          <H.PlainDate>{date}</H.PlainDate>
        </H.PlainMeta>
      </H.PlainHeader>
    )
  }

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
