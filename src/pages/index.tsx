import { useState, useEffect } from "react"
import { PageProps, graphql } from "gatsby"
import styled from "styled-components"

import PostList from "../components/main/PostList"
import Sidebar from "../components/main/Sidebar"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 64px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export default function Index({
  data: {
    allMdx: { nodes },
  },
  location,
}: PageProps<Queries.IndexPageQuery>) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setSelectedCategory(params.get("category") ?? "All")
  }, [location.search])

  const categories = nodes.reduce<Record<string, number>>(
    (acc, post) => {
      post.frontmatter?.category
        ?.filter((c): c is string => !!c)
        .forEach(c => (acc[c] = (acc[c] ?? 0) + 1))
      return acc
    },
    { All: nodes.length },
  )

  const posts = nodes.filter(
    ({ frontmatter }) =>
      selectedCategory === "All" ||
      frontmatter?.category?.includes(selectedCategory),
  )

  return (
    <Grid>
      <PostList posts={posts} />
      <Sidebar categories={categories} selectedCategory={selectedCategory} />
    </Grid>
  )
}

export const query = graphql`
  query IndexPage {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          category
          slug
          date(formatString: "YYYY-MM-DD")
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 300)
            }
          }
        }
      }
    }
  }
`
