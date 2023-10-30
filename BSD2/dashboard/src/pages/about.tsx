import Layout from "@/components/layout/Layout"
import React from "react"
import { request } from "../../lib/datocms"
import Image from "next/image"

const ABOUT_QUERY = `
query MyQuery {
  aboutPage {
    title
    backgroundImage {
      height
      width
      url
      alt
    }
  }
}
`
export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY,
    variables: { limit: 10 },
  })
  return {
    props: { data },
  }
}

const about = ({ data }: any) => {
  return (
    <Layout>
      About project
      <h1>{data.aboutPage.title}</h1>
      <Image
        src={data.aboutPage.backgroundImage.url}
        alt={data.aboutPage.backgroundImage.alt}
        width={data.aboutPage.backgroundImage.width}
        height={data.aboutPage.backgroundImage.height}
      />
    </Layout>
  )
}

export default about
