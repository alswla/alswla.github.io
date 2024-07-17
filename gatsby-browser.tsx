import { GatsbyBrowser } from "gatsby"
import "prismjs/themes/prism-tomorrow.min.css"

import Layout from "./src/components/common/Layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
