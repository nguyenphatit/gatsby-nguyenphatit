import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { SEO } from "../components/SEO"
import HeroComponent from "../components/HeroComponent"
import IntroduceComponent from "../components/IntroduceComponent"
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="relative">
      <HeroComponent />
      <Header />
      <IntroduceComponent />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO title="nguyenphatit" description="@nguyenphatit"  />
