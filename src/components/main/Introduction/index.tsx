import { StaticImage } from "gatsby-plugin-image"

import * as I from "./Introduction.styles"

export default function Introduction() {
  return (
    <div>
      <I.ProfileImage>
        <StaticImage src="../../images/thumbnail.JPG" alt="Profile Image" />
      </I.ProfileImage>
      <I.MainText>Hi, I&apos;m Chloe Han 👋</I.MainText>
      <I.SubText>
        {" "}
        A frontend-developer dedicated to enhancing experience!
      </I.SubText>
    </div>
  )
}
