import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jam from "../components/jam"
import Seo from "../components/seo"
import Projects from "../components/projects-frontpage"
import Instagram from "../components/instagram"
import Header from "../components/header"
const showHeader = false;
const themeColor = '#E0ECE9';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Jam themeColor={themeColor} showHeader={false} >
      <div className="font-acumin flex min-h-[30vh] md:min-h-[30vh] lg:min-h-[50vh] w-[95%] mx-auto align-center   justify-center  lg:justify-between text-center flex-col">
        <div className="hidden lg:flex h-[80px] pt-8"></div>
        <h1 className="md:text-left py-4 text-xl sm:text-2xl font-light md:text-3xl mdtracking-[-0.2rem]">
          Pracownia grafiki dla
          <br />
          <span className="font-semibold">małych, niezależnych marek</span>
          <br />
          i silnych osobowości.
        </h1>
        <div className={`menu--wrapper w-full mx-auto flex py-8 ${!showHeader && 'hidden lg:flex'}`}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
      </div>

      <div className="w-[95%] mx-auto grid grid-cols-1 gap-[40px] sm:grid-cols-2 md:grid-cols-3 gap-4 stairs-grid">
        <Projects />
      </div>

      <div className="w-[95%] mx-auto">
        {/* Additional content */}
      </div>
    </Jam>
  );
}

export default IndexPage;
