import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import Jam from "../components/jam"

const TagTemplate = ({ data, pageContext }) => {
  const { allContentfulPortfolio } = data
  const { edges } = allContentfulPortfolio
  const { tag } = pageContext

  return (
    <Jam showHeader={true} >
      <div className=" w-[95%] mx-auto py-5">
        <h1>Projects with Tag: {tag}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-[40px]">
          {edges.map((edge) => {
            const { title, slug, image, data, tags } = edge.node;
            const imageData = image?.gatsbyImageData;
            const projectImage = imageData ? (
              <GatsbyImage image={imageData} alt={title} style={{}} />
            ) : null;
            const year = data && typeof data === 'string' ? new Date(data).getFullYear() : null;

            return (
              <div
                className="h-auto border border-solid border-black max-w-full"
                style={{ textAlign: 'col' }}
                key={slug}
              >
                {projectImage}
                <div className="py-4 px-4 border-black border-y flex justify-between">
                  <Link className="text-xl font-bold no-underline font-semibold text-black font-acumin"
                  to={`/portfolio-test/${slug}/`}>
                    <h2 className="text-xl font-bold no-underline font-semibold text-black font-acumin">
                      {title}
                    </h2>
                  </Link>
                  {year && <span className="ml-2 text-gray-500 font-acumin">{year}</span>}
                </div>
                <div className="p-4 ">
                  {tags.length > 0 &&
                    tags.map((tag, tagIndex) => (
                      <Link
                        to={`/tags/${tag}`}
                        key={tagIndex}
                        className="text-black no-underline font-acumin"
                      >{tag}
                        {tagIndex < tags.length - 1 && <span className="mx-2">+</span>}
                      </Link>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Jam>
  )
}

export const query = graphql`
  query($tag: String) {
    allContentfulPortfolio(filter: { tags: { eq: $tag } }) {
      edges {
        node {
          title
          slug
          tags
          data
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export default TagTemplate
