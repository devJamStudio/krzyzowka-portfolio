import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import Footer from "../components/footer"

const Jam = ({ children, themeColor, showHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  React.useEffect(() => {
    document.documentElement.style.backgroundColor = themeColor; // Set the background color of the root HTML element
  }, [themeColor]);
  
  return (
    <>
      <div className="text-black  min-h-screen row px-4 flex-col container--main flex"
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
          backgroundColor: themeColor, 
        }}
      >
        <div className={`menu--wrapper w-[95%] mx-auto flex pt-8 ${!showHeader && 'flex lg:hidden'}`}>
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