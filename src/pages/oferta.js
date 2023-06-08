import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"
import OfferList from "../components/offer-list"
import Projects from "../components/projects"


const PortoflioPage = () => (
  <Jam>
    <div className="w-[95%] mx-auto   min-h-[70vh] mb-0 flex flex-col justify-baseline h-max ">
      <h1 className="text-[3rem] md:text-2xl font-light md:text-[64px] mb-0 md:leading-[80px] mt-[4rem]">
      Poznaj moją <span className="font-bold">ofertę</span>. Umówmy się na konsultację, aby wybrać odpowiedni pakiet dla Twojej marki.  
        </h1>
        <div className="flex flex-col justify-between py-0 mb-0 ">
      < OfferList />
      </div>
      </div>
  </Jam>
)

export const Head = () => <Seo title="Portfolio" />

export default PortoflioPage
