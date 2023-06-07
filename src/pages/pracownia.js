import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Jam from "../components/jam"
import Seo from "../components/seo"

const WorkShopPage = () => (
  <Jam>
    <div className="w-[93%] mx-auto flex flex-col min-h-[50vh] items-center ">
      <div className="w-full flex r ">
        <h1 className="text-lg font-light md:text-[64px] mb-0 leading-[80px]">
          Witaj w <span className="font-bold">Pracowni grafiki Barbary<br></br> Olejarczyk.</span>
        </h1>
      </div>
      <div className="w-full flex justify-end">
        <p className="text-md">
          Krzyżówka to otwarta pracownia grafiki.
          <br />
          <br />
          Zajmuję się projektowaniem graficznym i doradztwem, wymyślam, tworzę, rysuję. Moim konikiem są Social Media
          (głównie Instagram i Facebook), dzięki świetnej znajomości tych narzędzi, potrafię stworzyć markę, która
          będzie nie tylko widoczna, ale sprzeda też Twój produkt w miły i pasujący do Ciebie sposób.
          <br />
          Lubię projekty, które są przyjazne dla środowiska, dlatego staram się nie tworzyć wydmuszek, które nie spełnią
          swojego jestestwa.
        </p>
      </div>
      
    </div>
    <StaticImage
        src="https://cataas.com/cat/says/hello%20world!" // Replace with your external image URL
        alt="Image description"
        className="w-full p h-full min-h-[50vh]"
      />
  </Jam>
)

export const Head = () => <Seo title="Page two" />

export default WorkShopPage
