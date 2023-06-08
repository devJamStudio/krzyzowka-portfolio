import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        nodes {
          title
          slug
          data
          tags
          image {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  `);

  const projects = data.allContentfulPortolio.nodes;

  return (
    <div className="py-8 border-t border-1 border-black grid  md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 gap-6">
      {projects.map((project, index) => {
        const imageData = project.image?.gatsbyImageData;
        const image = imageData ? (
          <GatsbyImage image={imageData} alt={project.title} style={{}} />
        ) : null;

        const postdate =
          project.data && typeof project.data === "string"
            ? project.data
            : null;
        const year = postdate ? new Date(postdate).getFullYear() : null;

        const tags = project.tags || [];

        // Determine the col-span class based on the index
        const colSpanClass =
          index % 5 === 0 || index % 5 === 1 ? "md:col-span-3" : "md:col-span-2";

        return (
          <div
            className={`h-auto border border-solid border-black  col-span-1 max-w-full ${colSpanClass}`}
            style={{ textAlign: "col" }}
            key={index}
          >
            {image}
            <div className="py-4 flex justify-between px-4 border-black border-y">
              <Link to={`/portfolio-test/${project.slug}/`}>
                <h2 className="text-2xl text-black font-acumin">
                  {project.title}
                </h2>
              </Link>
              {year && `${year}`}
            </div>
            <div>
              {tags.length > 0 &&
                tags.map((tag, tagIndex) => (
                  <React.Fragment key={tagIndex}>
                    <Link to={`/tags/${tag}`} className="mr-2">
                      {tag}
                    </Link>
                    {tagIndex < tags.length - 1 && <span className="mr-2">+</span>}
                  </React.Fragment>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
