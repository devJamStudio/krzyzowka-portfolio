import * as React from "react"
import { Link } from "gatsby"

import Jam from "../components/jam"
import Seo from "../components/seo"
import OfferList from "../components/offer-list"
import Projects from "../components/projects"
const themeColor =  '#E0ECE9';


const PortoflioPage = () => (
  <Jam themeColor={themeColor} showHeader={true}>
  <div className="w-[95%] mx-auto  min-h-[70vh] mb-0 flex flex-col justify-baseline h-max ">
    <div class="min-h-[40vh]">
      <h1 className="text-[3rem] md:text-2xl font-light md:text-[64px] mb-0 md:leading-[80px] mt-[4rem]">
      Poznaj moją <span className="font-bold">ofertę</span>. Umówmy się na konsultację, aby wybrać odpowiedni pakiet dla Twojej marki.  
        </h1>
        </div>
        <div className="flex justify-between py-4 mb-0 ">
          <div class="w-full md:w-6/12  flex flex-col md:flex-row justify-between">
            <h2>Identyfikacja wizualna</h2>
          </div>
          <div class="w-full md:w-6/12 flex flex-col md:flex-row justify-between">
          <OfferList/>
          </div>
     
      </div>
      </div>
  </Jam>
)

export const Head = () => <Seo title="Portfolio" />

export default PortoflioPage
