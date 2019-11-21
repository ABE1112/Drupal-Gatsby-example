/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/**
const path = require('path')

exports.createPages = async ({actions, graphql}) => {
  const { createPage } = actions

  const articles = await graphql(`
    {
  allNodeArticle {
  nodes {
    id
    title
    path{
      langcode
    }
  }
}
    }
  `)
  articles.data.allNodeArticle.nodes.map(articleData =>
     createPage({
       path: articleData.path.langcode,
       component: path.resolve('src/templates/article.js'),
       context: {
         ArticleId: articleData.id,
       }
     })
  )
}


*/

/**
allNodeArticle {
nodes {
  id
  title
  body {
    processed
  }
  relationships {
    node_type {
      relationships {
        node__article {
          body {
            value
          }
        }
      }
    }
  }
}
}
path: articleData.path.langcode,
*/
