import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => {

  // console.log(data.allNodePage)
  const Homepage = data.allNodePage.edges[0].node
  return(
  <Layout>
   <h3>{Homepage.title}</h3>
   <div dangerouslySetInnerHTML={{ __html: Homepage.body.value}} />
    <Link to="/about/">About</Link>
  </Layout>
)
}


export const query = graphql`
  query{
      allNodePage(
        filter: {id: {eq: "471a1bc9-4919-5030-abb3-866887e9eacf"}}) {
        edges {
          node {
            id
            title
            body {
              value
            }
          }
        }
      }
    }
`

export default IndexPage

/*
{
  allNodePage(
    filter: {title: {ne: ""}}) {
    edges {
      node {
        uuid
        title
        body {
          value
        }
      }
    }
  }
}
*/
