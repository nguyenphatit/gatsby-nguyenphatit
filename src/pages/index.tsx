import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HeroComponent from "../components/HeroComponent"
import { SEO } from "../components/seo"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <HeroComponent />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="nguyenphatit" description="@nguyenphatit"  />
