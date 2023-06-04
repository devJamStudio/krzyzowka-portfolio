import * as React from "react"
import { Link } from "gatsby"
import Jam from "../components/jam"
import Seo from "../components/seo"
import Contact from "../components/contact-form"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialMediaLinks = [
  {
    icon: FaFacebook,
    url: 'https://www.facebook.com/your-profile',
  },
  {
    icon: FaInstagram,
    url: 'https://www.instagram.com/your-profile',
  },
  {
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/your-profile',
  },
];
const ContactPage = () => (
  <Jam>
    
    <div className="py-5 mt-6 flex min-h-[80vh] flex-col md:flex-row w-[95%] mx-auto">
      <div className="w-full flex-col md:w-1/2 flex flex-col justify-between">
        <h1 className="text-3xl font-semibold	 font-acumin">Kontakt</h1>
        <p1 className="text-lg py-4 ">
          Masz pytania? Chcesz wycenić projekt? Skontaktuj się ze mną. Na większość wiadomości odpowiadam w ciągu 48 godzin.</p1>
          <div className="row flex justify-between">
            <div className="w-3/8 py-4">
            <p2>Barbara Olejarczyk<br></br>
            b.olejarczyk@krzyzowka.studio <br></br>
            +48 791 349 660</p2>
          </div>
          <div className="w-3/8 py-4">
            <p2> ul. Próchnika 1, lok. 9U<br></br>
            90-408 Łódź <br></br>
            NIP 7922266365</p2>
          </div>
          </div>
          <div className=" flex flex-row">
        {socialMediaLinks.map((link, index) => {
          const Icon = link.icon;
          return (
            <a key={index} href={link.url} className="text-black text-lg p-4 rounded-full flex items-center justify-center" target="_blank" rel="noopener noreferrer">
            <div className="border border-black rounded-full p-2 align-center justify-center flex">
              <Icon />
            </div>
          </a>
          );
        })}
      </div>
        </div>
       
      <div className="w-full md:w-1/2 flex justify-end align-center">
        <Contact />
      </div>
      
    </div>

  </Jam>
)

export const Head = () => <Seo title="Kontakt" />

export default ContactPage
