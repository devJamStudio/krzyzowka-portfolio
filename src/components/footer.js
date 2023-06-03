import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../components/logo'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="border border-black mt-5 text-white">
      <div className="flex flex-col">
        <div className="md:flex justify-end">
          <div className="p-8 md:border-r border-black md:w-1/3">
            <Logo/>
          </div>
          <div className="border-black flex-grow md:w-2/3">
            <div className="md:border-b flex flex-row justify-between" id="ItemZ">
              <div className="flex-col p-6">
                <h2 className="text-lg font-bold mb-4">Column 2</h2>
                <ul>
                  <li>
                    <Link to="/blog" className="hover:text-gray-300">Blog</Link>
                  </li>
                  <li>
                    <Link to="/portfolio" className="hover:text-gray-300">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-gray-300">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="aspect-square flex items-center justify-center border-l md:w-1/3 md:border-black">
                <svg className="object-contain h-full w-auto" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M252.5 127C252.5 196.312 196.366 252.5 127.121 252.5C57.8767 252.5 1.74219 196.312 1.74219 127C1.74219 57.6878 57.8767 1.5 127.121 1.5C196.366 1.5 252.5 57.6878 252.5 127Z" stroke="black" strokeMiterlimit="10"/>
                  <line x1="128.268" y1="1" x2="128.268" y2="251.95" stroke="black"/>
                  <line x1="251.709" y1="128.147" x2="1.00049" y2="128.147" stroke="black"/>
                </svg>
              </div>
            </div>
            <div className="invisible md:visible flex flex-row border-black border-t flex-row justify-end">
              <div>
                cokolwiek
              </div>
              <div className="social-icons flex w-1/3 border-black border-l">
                <div className="social-icon aspect-square border-black border-r items-center flex justify-center p-4 w-1/3">
                  <FaFacebook />
                </div>
                <div className="social-icon flex border-black border-r items-center justify-center p-4 w-1/3">
                  <FaTwitter />
                </div>
                <div className="social-icon flex justify-center items-center p-4 w-1/3">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="md:hidden flex border-t border-black">
          <div className="aspect-square items-center justify-center w-full border-l md:border-black">
            <svg className="object-contain h-full w-auto" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M252.5 127C252.5 196.312 196.366 252.5 127.121 252.5C57.8767 252.5 1.74219 196.312 1.74219 127C1.74219 57.6878 57.8767 1.5 127.121 1.5C196.366 1.5 252.5 57.6878 252.5 127Z" stroke="black" strokeMiterlimit="10"/>
              <line x1="128.268" y1="1" x2="128.268" y2="251.95" stroke="black"/>
              <line x1="251.709" y1="128.147" x2="1.00049" y2="128.147" stroke="black"/>
            </svg>
          </div>
          <div className="social-icons w-full grid-1 w-1/4 border-black border-l">
            <div className="social-icon w-full flex-col border-black border-b text-2xl items-center flex justify-center p-4 h-1/3">
              <FaFacebook />
            </div>
            <div className="social-icon w-full flex-col flex border-black border-b text-2xl items-center justify-center p-4 h-1/3">
              <FaTwitter />
            </div>
            <div className="social-icon w-full flex flex-col justify-center items-center text-2xl p-4 h-1/3">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="py-8 md:hidden text-black border-t border-black w-full">
          cokolwiek
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
