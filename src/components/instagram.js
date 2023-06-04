import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent (limit: 24){
        edges {
          node {
            id
            caption
            permalink
            localImage {
              childImageSharp {
                gatsbyImageData(
                  width: 300
                  height: 300
                  layout: FIXED
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                )
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allInstagramContent.edges;

  return (
    <div className="py-8 border-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
      {posts.map((post) => {
        const { id, caption, permalink, localImage } = post.node;
        const imageData = localImage.childImageSharp.gatsbyImageData;

        return (
          <div className="h-auto hover:col-span-1" key={id}>
            <Link to={permalink} target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "100%", // 1:1 aspect ratio (square)
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                  }}
                >
                  <GatsbyImage
                    image={imageData}
                    alt={caption}
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                      height: "100%",
                      borderRadius: "0%",
                    }}
                    imgStyle={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Instagram;
