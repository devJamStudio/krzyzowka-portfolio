import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"

const WorkShopPage = () => (
  <Jam>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Jam>
)

export const Head = () => <Seo title="Page two" />

export default WorkShopPage
