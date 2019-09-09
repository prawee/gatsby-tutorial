import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

const getData = graphql`
query {
  site {
    siteMetadata {
      siteTitle:title
      description
      author
      data {
        name
        age
      }
    }
  }
}` 

const HeaderStatic = () => {
  return (
    <StaticQuery 
      query={getData} 
      render={(data) => {
        return (
          <div>
            <h1>{data.site.siteMetadata.description}</h1>
          </div>
        )
      }}>
    </StaticQuery>
  )
}

export default HeaderStatic
