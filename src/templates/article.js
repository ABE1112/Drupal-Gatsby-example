/**


import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PropTypes from "prop-types"

const Article = ({data}) => {
  const post = data.nodeArticle

  return(
    <Layout>
      <center><h1>{post.title}</h1></center>
      <center><div dangerouslySetInnerHTML={{ __html: post.body.processed}} /></center>
    </Layout>
  )
}

Article.propTypes ={
  data: PropTypes.object.isRequired,
}



export const query = graphql`
query{
  allNodeArticle {
   nodes {
     id
     title
     body {
       processed
     }
   }
 }
   }
`;



export default Article





/**
query($ArticleId: String!){
    nodeArticle(id: {eq: SArticleId}) {
      id
      title
      body {
        processed
      }
     }
   }
`;







query{
    nodeArticle(id: {eq: "db2b3ed0-bc13-5853-9bc2-2cc0725f4ab8"}) {
      id
      title
      body {
        processed
      }
     }
   }
`;















nodeArticle(id: {eq: "db2b3ed0-bc13-5853-9bc2-2cc0725f4ab8"}) {
  id
  title
  body {
    processed
  }
 }
 nodeArticle(id: {eq: "661b4960-42ff-51c7-b848-05717558c16d"}) {
   id
   title
   body {
     processed
   }
  }
  nodeArticle(id: {eq: "47c8163b-2c3e-5a52-9da1-e1c8823613a4"}) {
    id
    title
    body {
      processed
    }
   }



*/
