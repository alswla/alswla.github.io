import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as P from "./PostItem.styles"

type PostItemProps = {
  title: string
  date: string
  category: string[]
  thumbnail: IGatsbyImageData
  description: string
  slug: string
}

export default function PostItem({
  title,
  date,
  category,
  thumbnail,
  description,
  slug,
}: PostItemProps) {
  return (
    <P.Wrapper to={slug as string}>
      <P.Thumbnail>
        <GatsbyImage
          image={thumbnail}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </P.Thumbnail>

      <P.Contents>
        <P.Title>{title}</P.Title>
        <P.Date>{date}</P.Date>
        <P.Category>
          {category?.map(category => <div key={category}>#{category}</div>)}
        </P.Category>
        <P.Description>{description}</P.Description>
      </P.Contents>
    </P.Wrapper>
  )
}
