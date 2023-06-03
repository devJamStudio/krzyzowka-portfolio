import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jam from "../components/jam"
import Seo from "../components/seo"
import Projects from "../components/projectstwo"
import Instagram from "../components/instagram"

const IndexPage = () => (
  <Jam>
    <div className="font-acumin 
    flex min-h-screen	align-center justify-center text-center flex-col">
      <span>Miasto Łódź</span>
      <h1 
      className="text-3xl lg:text-3xl"
      >Pracownia grafiki dla małych,<br>
      </br> niezależnych marek i silnych<br></br> osobowości.</h1>
    </div>
    <h2
    className="text-center font-acumin pb-[30px] text-[18px]">
    PORTFOLIO</h2>
    <div className="ą">
  <Projects />
</div>

    <h2
    className="text-center font-acumin pb-[30px] text-[18px]">
    INSTAGRAM</h2>
    <div>
          <Instagram/>  
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
