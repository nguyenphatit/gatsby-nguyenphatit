import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/SEO"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroComponent from "../components/HeroComponent"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="relative">
      <Header />
      <HeroComponent />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="nguyenphatit" description="@nguyenphatit"  />
