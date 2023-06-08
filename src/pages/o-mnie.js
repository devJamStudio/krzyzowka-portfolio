import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"

import Projects from "../components/projects"
import { StaticImage } from "gatsby-plugin-image"


const About = () => (
    <Jam>
    <div className="w-[95%] mx-auto  min-h-[50vh] flex flex-col md:flex-row  gap-16">
      <div className="w-full  min-h-[60vh] mb-0 flex flex-col justify-between h-max  mb-4 md:w-6/12">
        <h1 className="text-2xl font-light md:text-3xl">
          Cześć, z tej strony  <span className="font-bold">Barbara</span>
        </h1>
        <div className="flex flex-col justify-between py-0 mb-0 ">
        <p className="text-md py-0 mb-0 ">
        Zajmuję się projektowaniem graficznym  i doradztwem, wymyślam, tworzę, rysuję. Moim konikiem są media społecznościowe, dzięki ich znajomości, potrafię stworzyć markę, która będzie nie tylko widoczna, ale co ważniejsze, sprzeda Twój produkt w miły i pasujący do Ciebie sposób. 
        </p>
        <p className="text-md py-0 mb-0 ">
Lubię projekty społeczne, oraz takie, które są przyjazne dla środowiska, dlatego staram się nie tworzyć wydmuszek, które nie spełnią swojego celu, rzadko projektuję ulotki i staram się nie zaśmiecać środowiska nieptrzebnymi realizacjami.
        </p>
      </div>
      </div>
      <div className="w-full  md:w-6/12 flex flex-col justify-beetween">
        
        
      <StaticImage
        src="https://cataas.com/cat/says/hello%20world!" // Replace with your external image URL
        alt="Image description"
        className="w-full h-full"
      />
      </div>
    </div>

  </Jam>
)

export const Head = () => <Seo title="O mnie" />

export default About
