import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"

import Projects from "../components/projects-mansory-grid"


const PortoflioPage = () => (
  <Jam>
    <div
    className="w-[95%] mx-auto"
    >
    <Projects/>
    </div>
  </Jam>
)

export const Head = () => <Seo title="Portfolio" />

export default PortoflioPage
