import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../components/logo'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = ({ siteTitle }) => {
  return (
    <footer className="border font-acumin w-[95%] mb-[2.5%] mx-auto border-black mt-5 text-white">
      <div className="flex flex-col">
        <div className="md:flex justify-end">
          <div className="p-8 md:border-r border-black flex justify-between flex-col md:w-1/3">
            <Logo/>
            <p className="text-black font-light text-lg py-2">
              Przykładowy tekst. Porozmawiajmy o Twoim projekcie.
            </p>
            <Link to="/kontakt" className="text-sm">
              <button  aria-label=" Skontaktuj się" className="button px-8 py-4 bg-black hover:bg-white hover:text-black rounded-[30px] text-white">
              Skontaktuj się
              </button>
            </Link>
          </div>
          <div className="border-black flex-grow md:w-2/3">
            <div className="flex flex-row justify-between" id="ItemZ">
              <div className="flex-col p-6 pr-0 flex lg:w-6/12">
                <ul className="text-black mb-0 text-md font-light flex flex-col justify-between">
                  <li>
                    <Link to="/portfolio" className="flex align-center no-underline text-black font-light">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5002 5V19" stroke="black" strokeLinecap="square" strokeLinejoin="round"/>
                        <path d="M5.50024 12H19.5002" stroke="black" strokeLinecap="square" strokeLinejoin="round"/>
                      </svg>
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="/oferta" className="flex align-center no-underline text-black font-light">Oferta</Link>
                  </li>
                  <li>
                    <Link to="/pracownia" className="flex align-center no-underline text-black font-light">Pracownia</Link>
                  </li>
                  <li>
                    <Link to="/o-mnie" className="flex align-center no-underline text-black font-light">O mnie</Link>
                  </li>
                  <li>
                    <Link to="/kontakt" className="flex align-center no-underline text-black font-light">Kontakt</Link>
                  </li>
                </ul>
              </div>
              <div className="aspect-square flex items-center hidden md:flex justify-center border-l md:w-[263px] md:border-black">
                <svg className="object-cover h-full w-full" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="127" cy="127" r="127" stroke="black" strokeWidth="1" fill="none" />
                  <line x1="0" y1="127" x2="254" y2="127" stroke="black" strokeWidth="1" />
                  <line x1="127" y1="0" x2="127" y2="254" stroke="black" strokeWidth="1" />
                </svg>
              </div>
            </div>
            <div className="invisible md:visible flex flex-row border-black border-t flex-row justify-end">
              <div></div>
              <div className="social-icons flex  md:w-[263px] border-black border-l">
                <div className="social-icon text-2xl text-black aspect-square border-black border-r items-center flex justify-center p-4 w-1/3">
                  <FaFacebook />
                </div>
                <div className="social-icon flex text-2xl text-black  border-black border-r items-center justify-center p-4 w-1/3">
                  <FaTwitter />
                </div>
                <div className="social-icon flex text-2xl text-black justify-center items-center p-4 w-1/3">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        <div className="md:hidden flex border-t border-black">
          <div className="aspect-square flex-[2] sm:flex-[1]  w-[200px]  sm:w-[400px] md:flex-[2] sm:h-1/2  flex items-center justify-center border-l md:w-1/3 md:border-black">
            <svg className="object-cover  w-[100%]  h-full sm:w-[400px] md:h-full md:w-full stroke-black stroke-1" viewBox="0 0 254 254" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="127" cy="127" r="127" stroke="black" strokeWidth="1" fill="none" />
              <line x1="0" y1="127" x2="254" y2="127" stroke="black" strokeWidth="1" />
              <line x1="127" y1="0" x2="127" y2="254" stroke="black" strokeWidth="1" />
            </svg>
          </div>
          <div className="social-icons w-auto sm:w-1/3 grid-1 border-black border-l">
            <div className="social-icon w-full flex-col border-black border-b text-black text-2xl items-center flex justify-center p-4 h-1/3">
              <FaFacebook />
            </div>
            <div className="social-icon w-full flex-col flex border-black  text-black  border-b text-2xl items-center justify-center p-4 h-1/3">
              <FaTwitter />
            </div>
            <div className="social-icon w-full flex flex-col justify-center text-black   items-center text-2xl p-4 h-1/3">
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="py-8 md:hidden text-black border-t border-black w-full">
          {/* Additional content */}
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: '',
}

export default Footer
