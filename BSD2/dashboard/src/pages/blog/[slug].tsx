import React from "react"

import { request } from "../../../lib/datocms"

export async function getStaticProps({ params }: any) {
  const data = await request({
    query: `query MyQuery {
     
  article(filter: {slug: {eq: "${params.slug}"}}){
    title
    slug
    summary
  }
}`,
    variables: { limit: 10, slug: params.slug },
  })
  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const path: any = await request({
    query: `{
        allArticles {
            slug
        }
    }`,
  })

  return {
    paths: path.allArticles.map(
      (post: { slug: string }) => `/blog/${post.slug}`
    ),
    fallback: false,
  }
}

const Article = ({ data }: any) => {
  return (
    <div>
      <h1>{data.article?.title}</h1>
      <h2>{data.article?.summary}</h2>
    </div>
  )
}

export default Article
