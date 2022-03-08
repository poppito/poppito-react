/* eslint-disable */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default function Home({ data }) {
  return (
      <StaticQuery query={query}
  render =
        {data => 
          <section >
          <div className="home">
              <a href={"/"} smooth duration={1000}>
              {"Back"}
              </a>
            </div>
            <h1 className="blogBody">Blog</h1>
            <div className="blognames">
            {data.allMdx.edges.filter(node => node.node.frontmatter.categories === "blog")
            .map(node => <a href={"../" + node.node.frontmatter.slug}> {node.node.frontmatter.title} <br/><br/> </a>)}
            </div>
        </section>
        }
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
            categories
          }
        }
      }
    }
  }  
`