import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import Jam from "../components/jam"

const TagTemplate = ({ data, pageContext }) => {
  const { allContentfulPortolio } = data
  const { edges } = allContentfulPortolio
  const { tag } = pageContext

  return (
    <Jam>
      <div className=" py-5">
        <h1>Projects with Tag: {tag}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
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
                <div className="my-4 flex justify-between px-4 border-black border-y">
                  <Link to={`/portfolio-test/${slug}/`}>
                    <h2 className="text-2xl text-black font-acumin">
                      {title}
                    </h2>
                  </Link>
                  {year && <span className="ml-2 text-gray-500">{year}</span>}
                </div>
                <div className="flex flex-wrap px-4 py-2">
                  {tags.map((tag, index) => (
                    <Link
                      to={`/tags/${tag}`}
                      key={index}
                      className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-700"
                    >
                      {tag}
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
    allContentfulPortolio(filter: { tags: { eq: $tag } }) {
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
