import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"

import Projects from "../components/projects"


const PortoflioPage = () => (
  <Jam>
    <div
    className="grid-cols-1 w-[95%] mx-auto py-8 sm:grid-cols-2 md-grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6	gap-4 grid"
    >
    <Projects/>

    </div>
    <Link to="/">Go back to the homepage</Link>
  </Jam>
)

export const Head = () => <Seo title="Portfolio" />

export default PortoflioPage
