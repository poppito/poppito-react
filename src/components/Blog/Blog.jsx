import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Home({ data }) {
  return (
      <StaticQuery query={query}
  render={data => <div className="blogText">{data.allMdx.edges.map(node => <a href={"../" + node.node.frontmatter.slug}> {node.node.frontmatter.title} <br/> </a>)}</div>}
      />
  )
}

export const query = graphql
`query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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