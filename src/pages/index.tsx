import React from "react"

import Layout from "../components/layout"
import Storefront from "../components/storefront"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Storefront hours={[]} records={[]} />
  </Layout>
)

export default IndexPage
