import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jam from "../components/jam"
import Seo from "../components/seo"
import Projects from "../components/projects"
import Instagram from "../components/instagram"

const IndexPage = () => (
  <Jam>
    <div className="font-acumin 
    flex min-h-[30vh] md:min-h-[50vh]  w-[95%] mx-auto	align-center justify-center text-center flex-col">
      <span>Miasto Łódź</span>
      <h1 
      className=" md:text-left text-xl sm:text-2xl  font-light md:text-2xl"
      >Pracownia grafiki dla <span className="font-semibold">małych,
      niezależnych marek</span> i silnych osobowości.</h1>
    </div>

    <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-2 md:grid-cols-3 gap-4 w-[95%] mx-auto">
  <Projects />
</div>

    <div
    className="w-[95%] mx-auto
  ">
    </div>
   
  </Jam>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Krzyzowka" />

export default IndexPage
