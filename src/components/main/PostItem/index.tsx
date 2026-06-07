import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import * as P from "./PostItem.styles"

type PostItemProps = {
  title: string
  date: string
  category: string[]
  description: string
  slug: string
  thumbnail?: IGatsbyImageData | null
}

export default function PostItem({
  title,
  date,
  category,
  description,
  slug,
  thumbnail,
}: PostItemProps) {
  return (
    <P.Wrapper to={slug}>
      <P.TextSide>
        <P.Meta>
          <span>{date}</span>
        </P.Meta>
        <P.Title>{title}</P.Title>
        <P.Description>{description}</P.Description>
        {category?.length > 0 && (
          <P.Categories>
            {category.map(c => (
              <span key={c}>{c}</span>
            ))}
          </P.Categories>
        )}
      </P.TextSide>

      {thumbnail && (
        <P.ImageSide>
          <GatsbyImage
            image={thumbnail}
            alt={title}
            style={{ width: "100%", height: "100%" }}
            imgStyle={{ objectFit: "cover" }}
          />
        </P.ImageSide>
      )}
    </P.Wrapper>
  )
}
