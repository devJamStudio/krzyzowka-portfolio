import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from '../components/logo'
import ThemeToggle from "../components/themeToggle"
import Search from "../components/search"

const searchIndices = [{ name: `Pages` }]

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  const handleToggle = () => {
    toggleExpansion(!isExpanded)
  }
  const MenuIcon = () => (
    <svg
      width="40"
      height="19"
      viewBox="0 0 40 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="1" fill="black" />
      <rect y="9" width="40" height="1" fill="black" />
      <rect y="18" width="40" height="1" fill="black" />
    </svg>);
    const MenuCloseIcon = () => (
      <svg
      width="38"
      height="19"
      viewBox="0 0 38 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.5L37 18.5" stroke="black" />
      <path d="M37 0.5L1 18.5" stroke="black" />
    </svg>);

  return (
    <nav className="flex font-acumin bg-krzyzowka dark:bg-gray-900 text-black dark:text-white dark:border-white flex-wrap w-full items-center justify-between border border-black p-6 bg-krzyzowka">
      <div className="flex items-center flex-shrink-0 mr-6 dark:text-white text-black w-1/4">
        <Link to={`/`}>
          <Logo />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center px-3 py-2 text-black  rounded hover:text-black hover:border-black"
        >
          {isExpanded ? (
          <MenuCloseIcon/>
          ) : (
            <MenuIcon/>
          )}
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col lg:flex-row justify-between sm:text-lg md:text-lg lg:text-lg xl:text-lg lg:flex-grow text-right dark:text-white ">
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 mr-4 no-underline	 text-black lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            Home
          </Link>
          <Link
            to={`/portfolio`}
            className="block mt-4 mr-4 text-black no-underline lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            Portfolio
          </Link>
          <Link
            to={`/kontakt`}
            className="block mt-4 mr-4 text-black no-underline lg:inline-block dark:text-white   lg:mt-0 hover:text-black"
          >
            Kontakt
          </Link>
          <Link
            to={`/pracownia`}
            className="block mt-4 mr-4 text-black no-underline lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            Pracownia
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
