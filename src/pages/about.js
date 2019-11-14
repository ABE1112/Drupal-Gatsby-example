import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AboutPage = ({data}) => {

  // console.log(data.allNodePage)
  const AboutPage = data.allNodePage.edges[0].node
  return(
  <Layout>
   <h3>{AboutPage.title}</h3>
   <div dangerouslySetInnerHTML={{ __html: AboutPage.body.value}} />
    <Link to="/">Home</Link>
  </Layout>
)
}


export const query = graphql`
  query{
      allNodePage(
        filter: {id: {eq: "fe626742-b373-5aaf-af3b-0303f60e395b"}}) {
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

export default AboutPage

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
