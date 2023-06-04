import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"

const Jam = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="bg-krzyzowka text-black row px-4 flex-col container--main flex"
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <div className="menu--wrapper w-[95%] mx-auto flex py-8">
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
        <div className="w-100 columns-2 flex flex-col flex-1 col-span-2 md:col-span-3 lg:col-span-5">
          <main>{children}</main>
          <Footer siteTitle={data.site.siteMetadata?.title || `Title`} />
        </div>
      </div>
    </>
  )
}

export default Jam