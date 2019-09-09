import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'


const example = (props) => {
  console.log(props);
  const { name, age } = props.data.site.siteMetadata.person;

  return (
    <Layout>
      examples page
      <HeaderHook />
      <HeaderStatic />
      <div>
        this is our person
        <h4>name: {name}</h4>
        <h4>age: {age}</h4>
      </div>
    </Layout>
  )
}

export const getData = graphql`
query {
  site {
    siteMetadata {
      siteTitle:title
      description
      author
      person:data {
        name
        age
      }
    }
  }
}
`

export default example
