import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Jam from "../components/jam"
import Seo from "../components/seo"
import Tesimonials from "../components/testimonials"
import InstagramSlider from "../components/instagram-slider"
import Friends from "../components/friends"
const WorkShopPage = ({ data }) => {
  const heroImg = getImage(data.contentfulWorkshop.heroImg)

  return (
    <Jam>
      <div className="  w-[95%] mx-auto flex flex-col min-h-[20vh] items-center">
        <div className="w-full flex r">
          <h1 className="text-[3rem] md:text-2xl font-light md:text-[64px] mb-0 md:leading-[80px] mt-8">
            Witaj w <span className="font-bold">Pracowni grafiki Barbary <br className="hidden lg:block"></br>Olejarczyk.</span>
          </h1>
        </div>
        <div className=" 2xl:w-[95%] w-full flex justify-end">
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
      {heroImg && (
        <div className="w-full 2xl:w-[95%] mx-auto my-[5rem] min-h-[20vh] overflow-hidden">
          <GatsbyImage
            image={heroImg}
            alt={data.contentfulWorkshop.heroImg.title}
            className="w-full  h-auto max-w-full"
          />
        </div>
      )}
      <div className="w-[95%] mx-auto flex flex-col min-h-[20vh] items-start">
        <h2 className="text-[44px] leading-[80px] font-bold">Zakres graficzny</h2>
        <p>
          Pamiętaj, że każda marka jest wyjątkowa, dlatego w skład identyfikacji wizualnej czy brandingu mogą wchodzić
          różne elementy graficzne, w zależności od potrzeb.
        </p>
      </div>
        <div className="w-[95%] mx-auto flex flex-row min-h-[20vh] items-start">
          <div className="w-full md:w-6/12 flex flex-col justify-baseline">
          <h2 className="text-[44px] leading-[80px] font-bold">Przyjaciele</h2>
        <p>
        Nie widzisz tego, czego potrzebujesz? Spokojnie! Pamiętaj, że Krzyżówka ma wielu zdolnych przyjaciół. Powiedz czego potrzebujesz, a my poruszymy niebo i ziemię.
        </p>
            </div>
            <div className="w-full md:w-6/12 flex flex-col justify-baseline">
              <Friends />
            </div>
            
     
      </div>
      <div className="w-[95%] mx-auto flex-col min-h-[20vh] items-start">
        <Tesimonials />
      </div>
      <div className="2xl:w-[95%] mx-auto flex-col min-h-[20vh] items-start">
      <InstagramSlider />
      </div>
    
    </Jam>
  )
}

export const Head = () => <Seo title="Pracownia" />

export const query = graphql`
  query MyQuery {
    contentfulWorkshop {
      heroImg {
        gatsbyImageData(
          width: 1440
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
      }
    }
  }
`

export default WorkShopPage
