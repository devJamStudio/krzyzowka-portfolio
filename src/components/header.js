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
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <g
      stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M0 4h24M0 20h24M0 12h24" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
    const MenuCloseIcon = () => (
      <svg
      width="24"
      height="24"
      viewBox="0 0 38 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.5L37 18.5" stroke="black" />
      <path d="M37 0.5L1 18.5" stroke="black" />
    </svg>);

  return (
    <nav className=" flex items-center  lg:max-h-[69px] ease-in duration-200 flex font-acumin  text-black overflow-hidden flex-wrap w-full items-center text-sm justify-between border border-black md:px-3 ">
      <div className="flex items-center flex-shrink-0   px-[30px] text-black w-1/4">
        <Link to={`/`}>
          <Logo />
        </Link>
      </div>
      <div className="flex border spacect-square rounded-[50%] border-black lg:hidden">
        <button
          onClick={handleToggle}
          className="flex items-center p-4 text-black  hover:text-black "
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
        } w-full block  px-4 py-4 flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col text-md lg:flex-row justify-between sm:text-lg md:text-lg lg:text-lg xl:text-lg lg:flex-grow text-right dark:text-white ">
          
          <Link
            to={`/portfolio`}
            className="block mt-4 mr-4  text-md  text-black no-underline lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            Portfolio
          </Link>
         
          <Link
            to={`/pracownia`}
            className="block mt-4 mr-4   text-md  text-black no-underline lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            Pracownia
          </Link>
          <Link
            to={`/o-mnie`}
            className="block mt-4 mr-4   text-md  no-underline	 text-black lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            O mnie
          </Link>
          <Link
            to={`/kontakt`}
            className="block mt-4 mr-4 text-md  text-black no-underline lg:inline-block dark:text-white   lg:mt-0 hover:text-black"
          >
            Kontakt
          </Link>
          
          <Link
            to={`/oferta`}
            id="oferta"
            className="block mt-4  text-md no-underline	 font-semibold	text-black lg:inline-block dark:text-white  lg:mt-0 hover:text-black"
          >
            Sprawdź ofertę
          </Link>
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
