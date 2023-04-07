import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/SEO"
import Layout from "../components/Layout"
import HeroComponent from "../sections/HeroComponent"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <HeroComponent />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="nguyenphatit" description="@nguyenphatit"  />
