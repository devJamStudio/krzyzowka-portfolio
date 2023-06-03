import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"

const ContactPage = () => (
  <Jam>
    <h1>Hi from the second page</h1>
    <p>Welcome to page contct page</p>
    <Link to="/">Go back to the homepage</Link>
  </Jam>
)

export const Head = () => <Seo title="Page two" />

export default ContactPage
