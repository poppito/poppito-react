import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Home({ data }) {
  return (
      <StaticQuery query={query}
      render={data => <div>{data.allMdx.edges.map(node => <div> {node.node.frontmatter.title} <br/> </div>)}</div>}
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