import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Home({ data }) {
  return (
      <StaticQuery query={query}
      render={data => <div>{data.allMdx.edges.map(node => node.node.frontmatter.title)}</div>}
      />
  )
}

export const query = graphql
`query {
        allMdx {
          edges {
            node {
              frontmatter {
                title
                slug
                date
              }
            }
          }
        }
      }
`